<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-20-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Make it work, make it right, make it fast. "*  
> — **Kent Beck**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-20`)

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
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 563,987**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 500,364**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 470,327**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,366**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**openclaw/openclaw**](https://github.com/openclaw/openclaw) (`TypeScript` | **★ 394,859**)
  > The AI that really does things. Any OS. Any Platform. The lobster way. 🦞 


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)**](https://github.com/openssl/openssl/pull/33652) · `90 pts` · *by JacobHenner*
- [**GIMP now has UI tests**](https://www.gimp.org/news/2026/11/16/gimp-ui-tests/) · `31 pts` · *by qtqtqt*
- [**Postgres 19 Repack: Faster, Built-In Table Bloat Cleanup**](https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/) · `37 pts` · *by craigkerstiens*
- [**Vint Cerf on why TCP/IP was never patented**](https://seremot.com/p/vint-cerf-on-why-tcpip-was-never) · `68 pts` · *by emot*

#### ✍️ Dev.to Trending Community Reads
- [**My First GitHub Issue & My First Forem (DEV.to) Issue 🚀**](https://dev.to/necoz/my-first-github-issue-my-first-forem-devto-issue-5eap) `#discuss` `#github` `#opensource` · *by Sᴛᴀʀ⭐*
- [**What team-wide AI adoption actually takes**](https://dev.to/peter/what-team-wide-ai-adoption-actually-takes-1gbh) `#ai` `#productivity` `#discuss` · *by Peter Kim Frank*
- [**Adopt Pre-Existing Docker Containers with Zero Downtime: Reverse-Engineering docker-compose.yml in Gubernator v4.0**](https://dev.to/gde/adopt-pre-existing-docker-containers-with-zero-downtime-reverse-engineering-docker-composeyml-in-3cic) `#devops` `#docker` `#opensource` · *by Mario Ezquerro*
- [**Maintaining open source projects up to date with Renovate and Antigravity**](https://dev.to/gde/maintaining-open-source-projects-up-to-date-with-renovate-and-antigravity-3haj) `#antigravity` `#renovate` `#development` · *by Jean-Phi Baconnais*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $61,619.00 | 🔴 `-2.63%` |
| **Ethereum** | `ETH` | $1,728.28 | 🔴 `-3.83%` |
| **Solana** | `SOL` | $72.29 | 🔴 `-2.93%` |
| **BNB** | `BNB` | $567.91 | 🔴 `-3.10%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-11-07](digest/2026/11/2026-11-07.md)
- 📄 [2026-11-06](digest/2026/11/2026-11-06.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
