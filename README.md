<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-12-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Make it work, make it right, make it fast. "*  
> — **Kent Beck**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-12`)

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
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 561,929**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 498,319**)
  > A collective list of free APIs

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,010**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 453,297**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 401,444**)
  > :books: Freely available programming books


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**93% of paint splatters are valid Perl programs (2019)**](https://www.mcmillen.dev/sigbovik/) · `301 pts` · *by zenincognito*
- [**Tim Peters has died**](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) · `1025 pts` · *by ayhanfuat*
- [**AWS emulator**](https://github.com/aws/aws-emulator) · `765 pts` · *by super_linear*
- [**Critical RCE Vulnerability in Apache HTTP Server**](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) · `82 pts` · *by soheilpro*

#### ✍️ Dev.to Trending Community Reads
- [**We Keep Hearing About AI Productivity. The QA Group Chat Told a Different Story.**](https://dev.to/xulingfeng/we-keep-hearing-about-ai-productivity-the-qa-group-chat-told-a-different-story-2nma) `#ai` `#discuss` `#career` · *by xulingfeng*
- [**One Year on DEV.to, 109 Articles Later**](https://dev.to/dannwaneri/one-year-on-devto-109-articles-later-p31) `#devto` `#community` · *by Daniel Nwaneri*
- [**Meet type-tune! 🦀 Give Your TypeScript Types a Better Home! 😸**](https://dev.to/necoz/meet-type-tune-give-your-typescript-types-a-better-home-1p6l) `#rust` `#typescript` `#showdev` · *by nyaomaru*
- [**AI can write code, but the magic of a first project is unmatched! 🗽**](https://dev.to/necoz/ai-can-write-code-but-the-magic-of-a-first-project-is-unmatched-30c4) `#html` `#programming` `#javascript` · *by Sᴛᴀʀ⭐*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $73,476.00 | 🔴 `-0.39%` |
| **Ethereum** | `ETH` | $2,043.09 | 🔴 `-1.13%` |
| **Solana** | `SOL` | $82.86 | 🔴 `-0.32%` |
| **BNB** | `BNB` | $673.79 | 🔴 `-1.00%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-10-30](digest/2026/10/2026-10-30.md)
- 📄 [2026-10-29](digest/2026/10/2026-10-29.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
