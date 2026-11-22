<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-22-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Software is a great combination between artistry and engineering. "*  
> — **Bill Gates**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-22`)

### 💡 Today I Learned: Security Engineering
#### Timing Attacks & Safe String Comparison

Comparing secret hashes or API tokens using standard `==` is vulnerable to timing attacks (it exits early on the first mismatched byte).
In Python, always use `hmac.compare_digest`:
```python
import hmac
is_valid = hmac.compare_digest(user_token, secret_token)
```
This runs in constant time, preventing attackers from measuring response latency to deduce tokens.

---

### 🔥 GitHub Trending Spotlight
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 564,506**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 500,679**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 473,004**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,457**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 402,046**)
  > :books: Freely available programming books


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Toyota, Nissan, and Honda to Standardize Parts to Lower Costs**](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) · `76 pts` · *by zdw*
- [**Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'**](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib) · `808 pts` · *by rafaelc*
- [**Lean verification of the Riemann Hypothesis**](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · `919 pts` · *by g-b-r*
- [**Inkling-2-Mini in 5.4 GB Memory**](https://github.com/ShinMegamiBoson/lookatmyquant) · `405 pts` · *by k__*

#### ✍️ Dev.to Trending Community Reads
- [**The Chairs Are Back. The Coffee Is On. ☕**](https://dev.to/thethirdcup/the-chairs-are-back-the-coffee-is-on-243p) `#community` `#discuss` `#ai` · *by xulingfeng*
- [**Monuments of India, Part 3: Sixteen Statues Sculpted from Photographs, a Rebuilt Mysore Palace and More**](https://dev.to/amananandrai/monuments-of-india-part-3-sixteen-statues-sculpted-from-photographs-a-rebuilt-mysore-palace-and-3bm) `#javascript` `#threejs` `#webdev` · *by amananandrai*
- [**Day 89: A Dead Service and a Private Container That Serves**](https://dev.to/ndcodes/day-89-a-marker-in-the-file-and-a-grant-somewhere-else-1deo) `#devops` `#ansible` `#azure` · *by Nnamdi Felix Ibe*
- [**Dead Keys: I Brought Back the Typing Games. Kiro Did the Heavy Lifting.**](https://dev.to/earlgreyhot1701d/dead-keys-i-brought-back-the-typing-games-kiro-did-the-heavy-lifting-5gc2) `#ai` `#kiro` `#gamedev` · *by Earl Grey*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $59,102.00 | 🟢 `+5.02%` |
| **Ethereum** | `ETH` | $1,658.43 | 🟢 `+6.28%` |
| **Solana** | `SOL` | $69.20 | 🟢 `+4.89%` |
| **BNB** | `BNB` | $539.34 | 🟢 `+5.16%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-11-12](digest/2026/11/2026-11-12.md)
- 📄 [2026-11-11](digest/2026/11/2026-11-11.md)
- 📄 [2026-11-10](digest/2026/11/2026-11-10.md)
- 📄 [2026-11-09](digest/2026/11/2026-11-09.md)
- 📄 [2026-11-08](digest/2026/11/2026-11-08.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
