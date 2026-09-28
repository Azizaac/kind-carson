import json
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
CONFIG_PATH = BASE_DIR / "config.json"

DEFAULT_CONFIG = {
    "author_name": "Developer",
    "github_username": "",
    "features": {
        "github_trending": True,
        "tech_news": True,
        "crypto_market": True,
        "daily_til": True,
        "daily_quote": True
    },
    "git": {
        "auto_push": True,
        "remote": "origin",
        "branch": "main",
        "author_name": "Daily Digest Bot",
        "author_email": "bot@users.noreply.github.com"
    }
}


def load_config() -> dict:
    """Load configuration from config.json with fallback defaults."""
    if not CONFIG_PATH.exists():
        return DEFAULT_CONFIG

    try:
        with open(CONFIG_PATH, "r", encoding="utf-8") as f:
            user_config = json.load(f)
            # Merge with defaults
            config = DEFAULT_CONFIG.copy()
            config.update(user_config)
            return config
    except Exception as e:
        print(f"[WARN] Failed to read config.json, using defaults: {e}")
        return DEFAULT_CONFIG
