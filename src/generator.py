import os
from datetime import datetime
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DIGEST_DIR = BASE_DIR / "digest"
README_PATH = BASE_DIR / "README.md"


def format_crypto_table(crypto_items: list) -> str:
    if not crypto_items:
        return "*Market data currently unavailable.*"
    lines = [
        "| Asset | Symbol | Price (USD) | 24h Trend |",
        "| :--- | :--- | :--- | :--- |"
    ]
    for c in crypto_items:
        indicator = "🟢" if c.get("positive") else "🔴"
        lines.append(f"| **{c['name']}** | `{c['symbol']}` | {c['price']} | {indicator} `{c['change_24h']}` |")
    return "\n".join(lines)


def format_github_trending(repos: list) -> str:
    if not repos:
        return "*No repository spotlight available today.*"
    lines = []
    for r in repos:
        lines.append(f"- ⭐ [**{r['full_name']}**]({r['url']}) (`{r['language']}` | **★ {r['stars']:,}**)")
        lines.append(f"  > {r['description']}\n")
    return "\n".join(lines)


def format_tech_news(news: dict) -> str:
    hn_stories = news.get("hacker_news", [])
    devto_posts = news.get("dev_to", [])
    lines = []

    if hn_stories:
        lines.append("#### 🌐 Hacker News Top Discussions")
        for s in hn_stories:
            lines.append(f"- [**{s['title']}**]({s['url']}) · `{s['score']} pts` · *by {s['by']}*")
        lines.append("")

    if devto_posts:
        lines.append("#### ✍️ Dev.to Trending Community Reads")
        for a in devto_posts:
            tags = " ".join([f"`#{t}`" for t in a.get("tags", [])[:3]])
            lines.append(f"- [**{a['title']}**]({a['url']}) {tags} · *by {a['by']}*")

    if not lines:
        return "*Tech discussions stream currently quiet.*"
    return "\n".join(lines)


def build_daily_digest(data: dict, date_str: str) -> str:
    """Generate daily archive markdown content."""
    quote = data.get("quote", {})
    til = data.get("til", {})
    crypto = data.get("crypto", [])
    repos = data.get("trending_repos", [])
    news = data.get("news", {})

    content = f"""# 📡 Daily Tech Digest & Radar — {date_str}

> *" {quote.get('quote', '')} "*  
> — **{quote.get('author', 'Unknown')}**

---

## 💡 Today I Learned (TIL) & Pro Tip
### 📌 {til.get('category', 'Dev Tip')}: {til.get('title', '')}

{til.get('content', '')}

---

## 🔥 Open-Source Repositories Spotlight
{format_github_trending(repos)}

---

## 📰 Tech Pulse & Engineering News
{format_tech_news(news)}

---

## 📊 Market & Tech Pulse Snapshot
{format_crypto_table(crypto)}

---
*Auto-curated with precision by Daily Tech Engine on `{date_str}`.*
"""
    return content


def update_readme(data: dict, date_str: str, author_name: str = "Developer"):
    """Update root README.md with the latest daily overview and archive link."""
    quote = data.get("quote", {})
    til = data.get("til", {})
    crypto = data.get("crypto", [])
    repos = data.get("trending_repos", [])
    news = data.get("news", {})

    # Scan archive files
    archive_links = []
    if DIGEST_DIR.exists():
        for year_dir in sorted(DIGEST_DIR.glob("*"), reverse=True):
            if year_dir.is_dir():
                for month_dir in sorted(year_dir.glob("*"), reverse=True):
                    if month_dir.is_dir():
                        for md_file in sorted(month_dir.glob("*.md"), reverse=True):
                            fname = md_file.stem
                            rel_path = md_file.relative_to(BASE_DIR).as_posix()
                            archive_links.append(f"- 📄 [{fname}]({rel_path})")

    archive_content = "\n".join(archive_links[:15]) if archive_links else "*Archive will appear here.*"

    readme_text = f"""<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-{date_str}-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" {quote.get('quote', '')} "*  
> — **{quote.get('author', 'Unknown')}**

</div>

---

## 📌 Latest Digest Snapshot (`{date_str}`)

### 💡 Today I Learned: {til.get('category', 'Tip')}
#### {til.get('title', '')}

{til.get('content', '')}

---

### 🔥 GitHub Trending Spotlight
{format_github_trending(repos)}

---

### 📰 Tech Radar Highlights
{format_tech_news(news)}

---

### 📊 Crypto & Market Pulse
{format_crypto_table(crypto)}

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

{archive_content}

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>{author_name}</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
"""
    with open(README_PATH, "w", encoding="utf-8") as f:
        f.write(readme_text)


def save_digest(data: dict) -> tuple[Path, str]:
    """Save daily archive and update README."""
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    year_str = now.strftime("%Y")
    month_str = now.strftime("%m")

    target_dir = DIGEST_DIR / year_str / month_str
    target_dir.mkdir(parents=True, exist_ok=True)

    file_path = target_dir / f"{date_str}.md"
    digest_content = build_daily_digest(data, date_str)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(digest_content)

    print(f"[OK] Saved digest to {file_path}")
    return file_path, date_str
