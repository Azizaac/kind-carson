<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-25-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Simplicity is prerequisite for reliability. "*  
> — **Edsger W. Dijkstra**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-25`)

### 💡 Today I Learned: Python Optimization
#### Use `__slots__` to Slash Memory Usage in Class Instances

When creating millions of lightweight objects, Python dictionaries (`__dict__`) add massive memory overhead. Define `__slots__`:
```python
class Coordinate:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y
```
This prevents dynamic attribute creation and can reduce memory footprint by up to **60-70%**.

---

### 🔥 GitHub Trending Spotlight
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 565,364**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 501,278**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 477,519**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,595**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 402,238**)
  > :books: Freely available programming books


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Matrix Multiplication is Θ(n^2.25) [pdf]**](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) · `467 pts` · *by E-Reverance*
- [**Button Sounds – collection of professionally-recorded button clicks and presses**](https://buttons.joshwcomeau.com/) · `192 pts` · *by gaurang_tandon*
- [**Models Can Communicate via Inference Servers Despite Being Sandboxed**](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being) · `156 pts` · *by gmays*
- [**Show HN: Old Nvidia and ATI tech demos, running again in the browser**](https://gpu-demo-gallery.pages.dev/) · `45 pts` · *by arkits*

#### ✍️ Dev.to Trending Community Reads
- [**The Third Cup: After Everything Has a Name**](https://dev.to/thethirdcup/the-third-cup-after-everything-has-a-name-2b14) `#discuss` `#career` `#programming` · *by xulingfeng*
- [**Why Your Android App Drops Frames: The Jetpack Compose Architecture Guide That Fixes Recomposition Forever**](https://dev.to/smtahosin/why-your-android-app-drops-frames-the-jetpack-compose-architecture-guide-that-fixes-recomposition-3oh3) `#android` `#kotlin` `#mobile` · *by S M Tahosin*
- [**Why Your AI Release Notes Hallucinate: The "Why vs What" Problem in Git History**](https://dev.to/necoz/why-your-ai-release-notes-hallucinate-the-why-vs-what-problem-in-git-history-5ch0) `#ai` `#devops` `#github` · *by 𝗝𝗼𝗵𝗻*
- [**I Let Claude Code Create My AWS Account**](https://dev.to/aws/i-let-claude-code-create-my-aws-account-12gb) `#aws` `#ai` `#mcp` · *by Rohini Gaonkar*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $59,098.00 | 🔴 `-2.26%` |
| **Ethereum** | `ETH` | $1,656.06 | 🔴 `-2.58%` |
| **Solana** | `SOL` | $68.72 | 🔴 `-4.37%` |
| **BNB** | `BNB` | $542.41 | 🔴 `-1.90%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-11-12](digest/2026/11/2026-11-12.md)
- 📄 [2026-11-11](digest/2026/11/2026-11-11.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
