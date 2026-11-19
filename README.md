<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-19-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" First, solve the problem. Then, write the code. "*  
> — **John Johnson**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-19`)

### 💡 Today I Learned: Database & SQL
#### Avoid `OFFSET` for Large Pagination (Keyset / Cursor Pagination)

`LIMIT 20 OFFSET 100000` forces the database engine to scan 100,020 rows and discard the first 100,000, causing severe I/O bottlenecks.
Instead, use **Keyset Pagination (Seek method)**:
```sql
SELECT id, title, created_at 
FROM posts 
WHERE id > 100000 
ORDER BY id ASC 
LIMIT 20;
```
This utilizes the B-Tree primary index directly in O(log N) lookup time.

---

### 🔥 GitHub Trending Spotlight
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 563,737**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 500,126**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 468,631**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,304**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**openclaw/openclaw**](https://github.com/openclaw/openclaw) (`TypeScript` | **★ 394,779**)
  > The AI that really does things. Any OS. Any Platform. The lobster way. 🦞 


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Gemini 4 Neon**](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · `647 pts` · *by yigitdemirag*
- [**Unauthenticated remote code execution in Nginx**](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) · `1254 pts` · *by speedping*
- [**Multiple vulnerabilities in Regexp and String case conversion**](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) · `171 pts` · *by runesoerensen*
- [**Unreal Tournament 2004 in the Browser**](https://ut2004.dev/) · `95 pts` · *by TheAceOfHearts*

#### ✍️ Dev.to Trending Community Reads
- [**The CodeNewbie Podcast is Back for Season 28!**](https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484) `#codenewbie` `#ai` `#podcast` · *by Lauren Lee👩🏼‍💻*
- [**Is Coding with AI Actually Faster and Cheaper?**](https://dev.to/sylwia-lask/is-coding-with-ai-actually-faster-and-cheaper-2810) `#ai` `#programming` `#productivity` · *by Sylwia Laskowska*
- [**25 Editions of Dev Opportunity Radar: From My Radar to Our Radar 💙 + AMA**](https://dev.to/hemapriya_kanagala/25-editions-of-dev-opportunity-radar-from-my-radar-to-our-radar-ama-5f5) `#discuss` `#community` `#ama` · *by Hemapriya Kanagala*
- [**One Year on DEV: The People Made the Platform**](https://dev.to/hanzla/one-year-on-dev-the-people-made-the-platform-hab) `#devto` `#discuss` `#writing` · *by Hanzla Baig*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $63,262.00 | 🔴 `-2.12%` |
| **Ethereum** | `ETH` | $1,795.86 | 🔴 `-0.78%` |
| **Solana** | `SOL` | $74.50 | 🔴 `-0.87%` |
| **BNB** | `BNB` | $585.83 | 🔴 `-1.00%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

- 📄 [2026-11-19](digest/2026/11/2026-11-19.md)
- 📄 [2026-11-18](digest/2026/11/2026-11-18.md)
- 📄 [2026-11-17](digest/2026/11/2026-11-17.md)
- 📄 [2026-11-16](digest/2026/11/2026-11-16.md)
- 📄 [2026-11-15](digest/2026/11/2026-11-15.md)
- 📄 [2026-11-14](digest/2026/11/2026-11-14.md)
- 📄 [2026-11-13](digest/2026/11/2026-11-13.md)
- 📄 [2026-11-12](digest/2026/11/2026-11-12.md)
- 📄 [2026-11-11](digest/2026/11/2026-11-11.md)
- 📄 [2026-11-10](digest/2026/11/2026-11-10.md)
- 📄 [2026-11-09](digest/2026/11/2026-11-09.md)
- 📄 [2026-11-08](digest/2026/11/2026-11-08.md)
- 📄 [2026-11-07](digest/2026/11/2026-11-07.md)
- 📄 [2026-11-06](digest/2026/11/2026-11-06.md)
- 📄 [2026-11-05](digest/2026/11/2026-11-05.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
