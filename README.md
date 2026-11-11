<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-11-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" First, solve the problem. Then, write the code. "*  
> — **John Johnson**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-11`)

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
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 561,646**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 498,017**)
  > A collective list of free APIs

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 458,959**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 450,503**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 401,472**)
  > :books: Freely available programming books


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**After 7 months, Glasswing overwelms maintainers with underwhelming findings**](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) · `351 pts` · *by panic*
- [**Scion is back and is going to sell a kei truck in America**](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) · `390 pts` · *by NaOH*
- [**A great old-timey game-programming hack (2013)**](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) · `65 pts` · *by palsecam*
- [**.name Grandfathered**](https://neil.fraser.name/news/2026/11/10/) · `729 pts` · *by p4bl0*

#### ✍️ Dev.to Trending Community Reads
- [**Ask More of Your UI**](https://dev.to/dailycontext/ask-more-of-your-ui-2nf7) `#ai` `#agents` `#webdev` · *by Ben Halpern*
- [**Detecting Flaky Tests and Finding Their Root Causes with Strands Agents and Gemini**](https://dev.to/m4rri4nne/detecting-flaky-tests-and-finding-their-root-causes-with-strands-agents-and-gemini-4kan) `#ai` `#testing` `#python` · *by Alicia Marianne Gonçalves*
- [**I Used gp-grid to Build a React Food Festival App with Advanced Data Grid Features**](https://dev.to/hadil/i-used-gp-grid-to-build-a-react-food-festival-app-with-advanced-data-grid-features-3l22) `#webdev` `#programming` `#react` · *by Hadil Ben Abdallah*
- [**Stop Trusting npm Scans: Run Untrusted Packages in an Isolated AWS Sandbox**](https://dev.to/aws-builders/stop-trusting-npm-scans-run-untrusted-packages-in-an-isolated-aws-sandbox-cmm) `#aws` `#ai` `#discuss` · *by Sarvar Nadaf*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $73,718.00 | 🔴 `-1.22%` |
| **Ethereum** | `ETH` | $2,067.00 | 🔴 `-2.34%` |
| **Solana** | `SOL` | $83.04 | 🔴 `-3.20%` |
| **BNB** | `BNB` | $681.26 | 🔴 `-1.03%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

- 📄 [2026-11-11](digest/2026/11/2026-11-11.md)
- 📄 [2026-11-10](digest/2026/11/2026-11-10.md)
- 📄 [2026-11-09](digest/2026/11/2026-11-09.md)
- 📄 [2026-11-08](digest/2026/11/2026-11-08.md)
- 📄 [2026-11-07](digest/2026/11/2026-11-07.md)
- 📄 [2026-11-06](digest/2026/11/2026-11-06.md)
- 📄 [2026-11-05](digest/2026/11/2026-11-05.md)
- 📄 [2026-11-04](digest/2026/11/2026-11-04.md)
- 📄 [2026-11-03](digest/2026/11/2026-11-03.md)
- 📄 [2026-11-02](digest/2026/11/2026-11-02.md)
- 📄 [2026-11-01](digest/2026/11/2026-11-01.md)
- 📄 [2026-10-31](digest/2026/10/2026-10-31.md)
- 📄 [2026-10-30](digest/2026/10/2026-10-30.md)
- 📄 [2026-10-29](digest/2026/10/2026-10-29.md)
- 📄 [2026-10-28](digest/2026/10/2026-10-28.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
