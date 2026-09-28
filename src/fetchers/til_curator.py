from datetime import datetime

CURATED_TIPS = [
    {
        "category": "Git Pro Tip",
        "title": "Git Worktree: Work on Multiple Branches Without Stashing",
        "content": """Instead of stashing uncommitted changes or cloning the repo multiple times when an urgent bugfix arrives, use `git worktree`:
```bash
git worktree add ../hotfix-branch hotfix
# Now you have an isolated directory linked to the hotfix branch!
# When done:
git worktree remove ../hotfix-branch
```
This saves tons of context switching and avoids messing up your working tree."""
    },
    {
        "category": "Python Optimization",
        "title": "Use `__slots__` to Slash Memory Usage in Class Instances",
        "content": """When creating millions of lightweight objects, Python dictionaries (`__dict__`) add massive memory overhead. Define `__slots__`:
```python
class Coordinate:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y
```
This prevents dynamic attribute creation and can reduce memory footprint by up to **60-70%**."""
    },
    {
        "category": "Linux & DevOps",
        "title": "Inspect Open Network Ports Without Installing `netstat`",
        "content": """On modern Linux distributions, `ss` is the modern replacement for deprecated `netstat`:
```bash
# -t (TCP), -u (UDP), -l (Listening), -p (Process), -n (Numeric ports)
sudo ss -tulpn
```
It is much faster than `netstat` because it reads socket stats directly from kernel space via netlink."""
    },
    {
        "category": "Database & SQL",
        "title": "Avoid `OFFSET` for Large Pagination (Keyset / Cursor Pagination)",
        "content": """`LIMIT 20 OFFSET 100000` forces the database engine to scan 100,020 rows and discard the first 100,000, causing severe I/O bottlenecks.
Instead, use **Keyset Pagination (Seek method)**:
```sql
SELECT id, title, created_at 
FROM posts 
WHERE id > 100000 
ORDER BY id ASC 
LIMIT 20;
```
This utilizes the B-Tree primary index directly in O(log N) lookup time."""
    },
    {
        "category": "Docker Best Practices",
        "title": "Use Multi-Stage Builds to Minimize Image Attack Surface",
        "content": """Never ship compilers, build tools, or source code caches into production containers:
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
Result: Image shrinks from 800MB+ to under 15MB with minimal CVE vulnerabilities."""
    },
    {
        "category": "Architecture & API",
        "title": "Design Idempotent APIs with `Idempotency-Key`",
        "content": """Payment gateways and state-mutating POST endpoints must prevent duplicate execution due to client retries or network drops.
Accept a client-generated UUID in the `Idempotency-Key` header:
1. Cache the request status in Redis: `SET key uuid NX EX 86400`.
2. If key exists, return the cached previous response immediately.
3. If new, process the request, store the response in Redis, and return."""
    },
    {
        "category": "Security Engineering",
        "title": "Timing Attacks & Safe String Comparison",
        "content": """Comparing secret hashes or API tokens using standard `==` is vulnerable to timing attacks (it exits early on the first mismatched byte).
In Python, always use `hmac.compare_digest`:
```python
import hmac
is_valid = hmac.compare_digest(user_token, secret_token)
```
This runs in constant time, preventing attackers from measuring response latency to deduce tokens."""
    },
    {
        "category": "Terminal Productivity",
        "title": "Quick File Backup & Directory Jumping in Bash",
        "content": """Use brace expansion for quick file backups without retyping:
```bash
cp /etc/nginx/nginx.conf{,.backup}
# Expands to: cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
```
And use `cd -` to instantly flip between your current directory and the previous one."""
    }
]


def get_daily_til() -> dict:
    """Get today's curated tip based on day of year."""
    day_of_year = datetime.now().timetuple().tm_yday
    index = day_of_year % len(CURATED_TIPS)
    return CURATED_TIPS[index]
