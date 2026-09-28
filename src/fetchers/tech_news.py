import json
import urllib.request


def fetch_hacker_news_top(limit: int = 4) -> list:
    """Fetch top stories from Hacker News using Firebase REST API."""
    stories = []
    top_ids_url = "https://hacker-news.firebaseio.com/v0/topstories.json"
    req = urllib.request.Request(top_ids_url, headers={"User-Agent": "Daily-Tech-Digest-Bot"})

    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            top_ids = json.loads(response.read().decode("utf-8"))[:limit]

        for item_id in top_ids:
            item_url = f"https://hacker-news.firebaseio.com/v0/item/{item_id}.json"
            item_req = urllib.request.Request(item_url, headers={"User-Agent": "Daily-Tech-Digest-Bot"})
            with urllib.request.urlopen(item_req, timeout=8) as item_res:
                item_data = json.loads(item_res.read().decode("utf-8"))
                if item_data:
                    url = item_data.get("url") or f"https://news.ycombinator.com/item?id={item_id}"
                    stories.append({
                        "title": item_data.get("title"),
                        "score": item_data.get("score", 0),
                        "by": item_data.get("by", "anonymous"),
                        "url": url,
                        "comments": item_data.get("descendants", 0),
                        "source": "Hacker News"
                    })
    except Exception as e:
        print(f"[WARN] Error fetching Hacker News: {e}")
    return stories


def fetch_devto_top(limit: int = 4) -> list:
    """Fetch top articles from Dev.to API."""
    articles = []
    url = f"https://dev.to/api/articles?top=1&per_page={limit}"
    req = urllib.request.Request(url, headers={"User-Agent": "Daily-Tech-Digest-Bot"})

    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode("utf-8"))
            for item in data[:limit]:
                articles.append({
                    "title": item.get("title"),
                    "score": item.get("public_reactions_count", 0),
                    "by": item.get("user", {}).get("name", "dev.to"),
                    "url": item.get("url"),
                    "comments": item.get("comments_count", 0),
                    "source": "Dev.to",
                    "tags": item.get("tag_list", [])
                })
    except Exception as e:
        print(f"[WARN] Error fetching Dev.to: {e}")
    return articles


def fetch_all_tech_news() -> dict:
    """Fetch aggregated tech news."""
    return {
        "hacker_news": fetch_hacker_news_top(limit=4),
        "dev_to": fetch_devto_top(limit=4)
    }
