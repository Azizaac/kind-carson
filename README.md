<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-06-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Software is a great combination between artistry and engineering. "*  
> — **Bill Gates**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-06`)

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
- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 496,467**)
  > A collective list of free APIs

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 458,622**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 435,067**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 401,003**)
  > :books: Freely available programming books

- ⭐ [**openclaw/openclaw**](https://github.com/openclaw/openclaw) (`TypeScript` | **★ 394,001**)
  > The AI that really does things. Any OS. Any Platform. The lobster way. 🦞 


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Claude Code sends your email address to websites**](https://github.com/anthropics/claude-code/issues/107757) · `760 pts` · *by motoroco*
- [**sshole**](https://sshhole.com) · `2469 pts` · *by josemrb*
- [**MS Paint Remote Code Execution Vulnerability**](https://www.cve.org/CVERecord?id=CVE-2026-83844) · `399 pts` · *by kuberwastaken*
- [**Pwn.college**](https://pwn.college/) · `32 pts` · *by tripdout*

#### ✍️ Dev.to Trending Community Reads
- [**Congrats to the Kaggle Benchmarking Challenge Winners!**](https://dev.to/devteam/congrats-to-the-kaggle-benchmarking-challenge-winners-2moh) `#devchallenge` `#kagglechallenge` `#ai` · *by Jem*
- [**Don't Write Markdown Files for Your Coding Agent. Write Scripts.**](https://dev.to/dannwaneri/dont-write-markdown-files-for-your-coding-agent-write-scripts-j00) `#ai` `#programming` `#devops` · *by Daniel Nwaneri*
- [**Plan Stamping, for Software**](https://dev.to/kenwalger/plan-stamping-for-software-4ein) `#ai` `#career` `#discuss` · *by Ken W Alger*
- [**WebMCP Attack Lab: Can an E-Shop Hijack Your AI Agent?**](https://dev.to/gramli/webmcp-attack-lab-can-an-e-shop-hijack-your-ai-agent-4oe5) `#ai` `#webmcp` `#angular` · *by Daniel Balcarek*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $75,644.00 | 🔴 `-5.95%` |
| **Ethereum** | `ETH` | $2,228.22 | 🔴 `-8.05%` |
| **Solana** | `SOL` | $89.25 | 🔴 `-6.97%` |
| **BNB** | `BNB` | $691.42 | 🔴 `-3.15%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-10-27](digest/2026/10/2026-10-27.md)
- 📄 [2026-10-26](digest/2026/10/2026-10-26.md)
- 📄 [2026-10-25](digest/2026/10/2026-10-25.md)
- 📄 [2026-10-24](digest/2026/10/2026-10-24.md)
- 📄 [2026-10-23](digest/2026/10/2026-10-23.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
