<div align="center">

# 🚀 Automated Dev Radar & Daily Digest

![Daily Updates](https://img.shields.io/badge/Daily_Update-Active-brightgreen?style=for-the-badge&logo=github-actions)
![Curated Content](https://img.shields.io/badge/Content-Tech_Radar_%26_TIL-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Last_Sync-2026-11-17-orange?style=for-the-badge)

<p align="center">
  <b>A curated daily engineering digest, open-source radar, and Today I Learned (TIL) knowledge base.</b><br>
  <i>Maintained automatically via aaPanel / VPS cron & local runner.</i>
</p>

> *" Simplicity is prerequisite for reliability. "*  
> — **Edsger W. Dijkstra**

</div>

---

## 📌 Latest Digest Snapshot (`2026-11-17`)

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
- ⭐ [**codecrafters-io/build-your-own-x**](https://github.com/codecrafters-io/build-your-own-x) (`Markdown` | **★ 563,237**)
  > Master programming by recreating your favorite technologies from scratch.

- ⭐ [**public-apis/public-apis**](https://github.com/public-apis/public-apis) (`Python` | **★ 499,675**)
  > A collective list of free APIs

- ⭐ [**morluto/rea**](https://github.com/morluto/rea) (`TypeScript` | **★ 464,679**)
  > Reverse engineer anything with agents, from app behavior down to native binaries.

- ⭐ [**freeCodeCamp/freeCodeCamp**](https://github.com/freeCodeCamp/freeCodeCamp) (`TypeScript` | **★ 459,234**)
  > freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.

- ⭐ [**EbookFoundation/free-programming-books**](https://github.com/EbookFoundation/free-programming-books) (`Python` | **★ 401,727**)
  > :books: Freely available programming books


---

### 📰 Tech Radar Highlights
#### 🌐 Hacker News Top Discussions
- [**Carnegie Mellon is putting computer science courses on YouTube for free**](https://www.cs.cmu.edu/learn/) · `1173 pts` · *by pcompeau*
- [**Windows 11 Is Collecting Data on Which Coding Agents and Developer Tools You Use**](https://xusheng.dev/posts/windows-coding-agent-telemetry/) · `454 pts` · *by cwaffles*
- [**BugMeNot has closed**](https://www.bugmenot.com/) · `451 pts` · *by lode*
- [**Optimizely compromised, served malware on Zoom, GitLab**](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) · `248 pts` · *by kristjansson*

#### ✍️ Dev.to Trending Community Reads
- [**What does DEV stand for?**](https://dev.to/devengers/what-does-dev-stand-for-2kg9) `#discuss` `#community` `#watercooler` · *by FrancisTRᴅᴇᴠ*
- [**Your 100% Lighthouse A11y Score Is a Lie: The Visual Architecture Guide to the Browser Accessibility Tree**](https://dev.to/smtahosin/your-100-lighthouse-a11y-score-is-a-lie-the-visual-architecture-guide-to-the-browser-50l7) `#a11y` `#webdev` `#frontend` · *by S M Tahosin*
- [**High or Low Thinking? Gemini 4 and Gemma 4 on Hard Math, Cost First**](https://dev.to/gde/high-or-low-thinking-gemini-4-and-gemma-4-on-hard-math-cost-first-3091) `#gemini` `#gemma` `#benchmark` · *by xbill*
- [**What are your goals for the week? #205**](https://dev.to/jarvisscript/what-are-your-goals-for-the-week-205-22pg) `#career` `#discuss` `#productivity` · *by Chris Jarvis*

---

### 📊 Crypto & Market Pulse
| Asset | Symbol | Price (USD) | 24h Trend |
| :--- | :--- | :--- | :--- |
| **Bitcoin** | `BTC` | $64,540.00 | 🔴 `-0.02%` |
| **Ethereum** | `ETH` | $1,827.17 | 🟢 `+0.84%` |
| **Solana** | `SOL` | $72.63 | 🟢 `+2.37%` |
| **BNB** | `BNB` | $591.20 | 🟢 `+0.24%` |

---

## 📚 Archive History (Last 15 Days)

<details>
<summary><b>Click to expand past digests</b></summary>

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
- 📄 [2026-11-04](digest/2026/11/2026-11-04.md)
- 📄 [2026-11-03](digest/2026/11/2026-11-03.md)

</details>

---

<div align="center">
<sub>Engineered with ❤️ by <b>Azizaac</b> · Automated Git Activity & Daily Tech Digest</sub>
</div>
