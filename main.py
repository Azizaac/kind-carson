import sys
from datetime import datetime

# Ensure utf-8 output on Windows consoles
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

from src.config import load_config
from src.fetchers.github_trending import fetch_github_trending
from src.fetchers.tech_news import fetch_all_tech_news
from src.fetchers.crypto_market import fetch_crypto_snapshot
from src.fetchers.til_curator import get_daily_til
from src.fetchers.quotes import get_daily_quote
from src.generator import save_digest, update_readme
from src.git_manager import commit_and_push


def run():
    print("=" * 60)
    print("🚀 DAILY TECH DIGEST & GITHUB ACTIVITY ENGINE")
    print(f"🕒 Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    config = load_config()
    features = config.get("features", {})
    author_name = config.get("author_name", "Developer")

    data = {}

    # 1. Quote
    if features.get("daily_quote", True):
        print("[1/5] 📜 Loading daily engineering quote...")
        data["quote"] = get_daily_quote()

    # 2. TIL
    if features.get("daily_til", True):
        print("[2/5] 💡 Curating daily 'Today I Learned' & Pro Tip...")
        data["til"] = get_daily_til()

    # 3. GitHub Trending
    if features.get("github_trending", True):
        print("[3/5] 🔥 Fetching GitHub open-source spotlight...")
        data["trending_repos"] = fetch_github_trending(limit=5)

    # 4. Tech News
    if features.get("tech_news", True):
        print("[4/5] 📰 Gathering Hacker News & Dev.to discussions...")
        data["news"] = fetch_all_tech_news()

    # 5. Crypto Market
    if features.get("crypto_market", True):
        print("[5/5] 📊 Capturing crypto market pulse...")
        data["crypto"] = fetch_crypto_snapshot()

    # Generate Markdown and Update README
    print("\n📝 Generating daily markdown archive and refreshing README...")
    file_path, date_str = save_digest(data)
    update_readme(data, date_str, author_name)

    # Git Operations
    print("\n📦 Processing Git commit and synchronization...")
    success = commit_and_push(date_str, config)

    print("=" * 60)
    if success:
        print("✨ Daily sync completed successfully!")
    else:
        print("⚠️ Daily sync completed with Git warnings. Check output above.")
    print("=" * 60)


if __name__ == "__main__":
    try:
        run()
    except Exception as e:
        print(f"\n[FATAL ERROR] {e}", file=sys.stderr)
        sys.exit(1)
