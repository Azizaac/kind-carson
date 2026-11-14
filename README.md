<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-14-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Software is a great combination between artistry and engineering. "*  
> — **Bill Gates**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-14`)

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
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 562,376**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 498,823**)
  > A collective list of free APIs

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,105**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 457,981**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 401,560**)
  > :books: Freely available programming books


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Ggml v1.0.0**](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) · `92 pts` · *by cobychapple*
- [**FAA issues national ground stop – lifted 4.5 hours later**](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) · `1427 pts` · *by zulln*
- [**Nvidia Allegedly Engineered Scarcity by Funding AI Startups to Buy Its GPUs**](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) · `128 pts` · *by speckx*
- [**Terminal borders that don't cost a cell**](https://www.joshka.net/cell-borders/) · `156 pts` · *by vinhnx*

#### ✍️ Dev.to Trending Community Reads
- [**Congrats to the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine Winners!**](https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-4-ghost-in-the-machine-winners-nok) `#devchallenge` `#hf26challenge` `#hacktoberfest` · *by Jem*
- [**Dev Opportunity Radar #25: $120K+ Atlassian Hackathon, MLH Fellowship, and INSEAD AI Founder Sprint**](https://dev.to/devengers/dev-opportunity-radar-25-120k-atlassian-hackathon-mlh-fellowship-and-insead-ai-founder-sprint-m96) `#discuss` `#community` `#opportunities` · *by Hemapriya Kanagala*
- [**🛸 Necoz: The UFO Kingdom Python Loops 🐱**](https://dev.to/necoz/necoz-the-ufo-kingdom-python-loops-hd1) `#python` `#programming` `#beginners` · *by Sᴛᴀʀ⭐*
- [**Six Serving Engines on Four Accelerators: Gemma 4 E2B on an RTX 3050, a T4, an L4 and a TPU v5e**](https://dev.to/gde/six-serving-engines-on-four-accelerators-gemma-4-e2b-on-an-rtx-3050-a-t4-an-l4-and-a-tpu-v5e-1a0e) `#gemma` `#vllm` `#nvidia` · *by xbill*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $67,027.00 | 🔴 `-2.40%` |
| **Ethereum** | `ETH` | $1,896.56 | 🔴 `-1.56%` |
| **Solana** | `SOL` | $75.44 | 🔴 `-3.84%` |
| **BNB** | `BNB` | $616.21 | 🔴 `-2.52%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-11-04](digest/2026/11/2026-11-04.md)
- 📄 [2026-11-03](digest/2026/11/2026-11-03.md)
- 📄 [2026-11-02](digest/2026/11/2026-11-02.md)
- 📄 [2026-11-01](digest/2026/11/2026-11-01.md)
- 📄 [2026-10-31](digest/2026/10/2026-10-31.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
