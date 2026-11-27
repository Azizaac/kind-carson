<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-27-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" First, solve the problem. Then, write the code. "*  
> — **John Johnson**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-27`)

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
- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 501,705**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 480,146**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,687**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 402,349**)
  > :books: Freely available programming books

- ⭐ [**openclaw/openclaw**](https://github.com/openclaw/openclaw) (`TypeScript` | **★ 395,323**)
  > The AI that really does things. Any OS. Any Platform. The lobster way. 🦞 


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**The need for a formally verifiable mainstream programming language**](https://blainehansen.me/post/mainstream-verifiable-language/) · `40 pts` · *by todsacerdoti*
- [**AI made self-hosting fun again**](https://janlukas.blog/posts/ai-self-hosting) · `534 pts` · *by jlelse*
- [**Hard Drive pricing has gotten bad**](https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/) · `255 pts` · *by zdw*
- [**YouTube Ad Punisher – Auto-reloads YouTube pages when an ad plays**](https://github.com/antonpictures/youtube-punisher) · `347 pts` · *by iantongeorge*

#### ✍️ Dev.to Trending Community Reads
- [**Nostalgia and the AI Productivity Paradox**](https://dev.to/gramli/nostalgia-and-the-ai-productivity-paradox-4f33) `#ai` `#productivity` `#watercooler` · *by Daniel Balcarek*
- [**I Built AI Test Automation. Today, I Went Back to Manual Testing.**](https://dev.to/thethirdcup/i-built-ai-test-automation-today-i-went-back-to-manual-testing-mlh) `#discuss` `#testing` `#ai` · *by xulingfeng*
- [**On reviewing AI-generated code**](https://dev.to/nfrankel/on-reviewing-ai-generated-code-3olj) `#ai` `#codereview` `#opinion` · *by Nicolas Fränkel*
- [**From a feed full of Fable 5.2 demos to a 20-episode Indian epic: how I built "The Eighteen Days"**](https://dev.to/amananandrai/from-a-feed-full-of-fable-52-demos-to-a-20-episode-indian-epic-how-i-built-the-eighteen-days-14mm) `#python` `#ai` `#animation` · *by amananandrai*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $61,634.00 | 🟢 `+1.98%` |
| **Ethereum** | `ETH` | $1,731.89 | 🟢 `+2.81%` |
| **Solana** | `SOL` | $72.91 | 🟢 `+3.11%` |
| **BNB** | `BNB` | $565.15 | 🟢 `+1.75%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

- 📄 [2026-11-27](digest/2026/11/2026-11-27.md)
- 📄 [2026-11-26](digest/2026/11/2026-11-26.md)
- 📄 [2026-11-25](digest/2026/11/2026-11-25.md)
- 📄 [2026-11-24](digest/2026/11/2026-11-24.md)
- 📄 [2026-11-23](digest/2026/11/2026-11-23.md)
- 📄 [2026-11-22](digest/2026/11/2026-11-22.md)
- 📄 [2026-11-21](digest/2026/11/2026-11-21.md)
- 📄 [2026-11-20](digest/2026/11/2026-11-20.md)
- 📄 [2026-11-19](digest/2026/11/2026-11-19.md)
- 📄 [2026-11-18](digest/2026/11/2026-11-18.md)
- 📄 [2026-11-17](digest/2026/11/2026-11-17.md)
- 📄 [2026-11-16](digest/2026/11/2026-11-16.md)
- 📄 [2026-11-15](digest/2026/11/2026-11-15.md)
- 📄 [2026-11-14](digest/2026/11/2026-11-14.md)
- 📄 [2026-11-13](digest/2026/11/2026-11-13.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
