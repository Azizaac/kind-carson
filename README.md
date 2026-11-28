<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-28-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Make it work, make it right, make it fast. "*  
> — **Kent Beck**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-28`)

### 💡 Today I Learned: Docker Best Practices
#### Use Multi-Stage Builds to Minimize Image Attack Surface

Never ship compilers, build tools, or source code caches into production containers:
```dockerfile
# Stage 1: Build
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY . .
RUN go build -ldflags="-s -w" -o server .

# Stage 2: Minimal Runtime
FROM scratch
COPY --from=builder /app/server /server
ENTRYPOINT ["/server"]
```
Result: Image shrinks from 800MB+ to under 15MB with minimal CVE vulnerabilities.

---

### 🔥 GitHub Trending Spotlight
- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 501,855**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 481,366**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,684**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 402,385**)
  > :books: Freely available programming books

- ⭐ [**openclaw/openclaw**](https://github.com/openclaw/openclaw) (`TypeScript` | **★ 395,365**)
  > The AI that really does things. Any OS. Any Platform. The lobster way. 🦞 


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Unkernel: Real Linux kernel, compiled to WebAssembly**](https://unkernel.dev) · `117 pts` · *by nreece*
- [**Google's DeepCrossAttention achieves comparable model quality up to 3x faster**](https://research.google/blog/supercharging-transformer-residual-connections/) · `280 pts` · *by ComputedCamp995*
- [**The Balatro Timeline**](https://localthunk.com/blog/balatro-timeline-3aarh) · `226 pts` · *by sheepscreek*
- [**GPT 6.2 Astra Solves a Historical Mystery**](https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical) · `396 pts` · *by dr_red_dog*

#### ✍️ Dev.to Trending Community Reads
- [**What was your win this week!?**](https://dev.to/devteam/what-was-your-win-this-week-h3d) `#weeklyretro` · *by Jess Lee*
- [**How I built my own OS**](https://dev.to/cloudwerx/how-i-built-my-own-os-942) `#ai` `#linux` `#programming` · *by CLOUDWERX LAB*
- [**Writing Is Really Fun, But My Luck Had Other Plans 🐿**](https://dev.to/thethirdcup/writing-is-really-fun-but-my-luck-had-other-plans-493m) `#writing` `#discuss` `#cafe` · *by Sᴛᴀʀ⭐*
- [**Thinking on Constrained Deployments: Gemma E4B on 4GB 1650**](https://dev.to/gde/thinking-on-constrained-deployments-gemma-e4b-on-4gb-1650-2cc6) `#gemma` `#llm` `#benchmark` · *by xbill*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $59,716.00 | 🔴 `-3.41%` |
| **Ethereum** | `ETH` | $1,656.62 | 🔴 `-4.74%` |
| **Solana** | `SOL` | $71.31 | 🔴 `-2.53%` |
| **BNB** | `BNB` | $551.63 | 🔴 `-2.71%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

- 📄 [2026-11-28](digest/2026/11/2026-11-28.md)
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

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
