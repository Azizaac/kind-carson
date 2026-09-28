from datetime import datetime

QUOTES = [
    {
        "quote": "Talk is cheap. Show me the code.",
        "author": "Linus Torvalds"
    },
    {
        "quote": "Simplicity is prerequisite for reliability.",
        "author": "Edsger W. Dijkstra"
    },
    {
        "quote": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "author": "Martin Fowler"
    },
    {
        "quote": "First, solve the problem. Then, write the code.",
        "author": "John Johnson"
    },
    {
        "quote": "Make it work, make it right, make it fast.",
        "author": "Kent Beck"
    },
    {
        "quote": "Premature optimization is the root of all evil.",
        "author": "Donald Knuth"
    },
    {
        "quote": "Software is a great combination between artistry and engineering.",
        "author": "Bill Gates"
    },
    {
        "quote": "The best code is no code at all.",
        "author": "Jeff Atwood"
    }
]


def get_daily_quote() -> dict:
    """Return daily rotated engineering quote."""
    day_of_year = datetime.now().timetuple().tm_yday
    return QUOTES[day_of_year % len(QUOTES)]
