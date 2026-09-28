import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent


def run_cmd(cmd: list, cwd=BASE_DIR) -> tuple[int, str, str]:
    """Run a system command and return (code, stdout, stderr)."""
    try:
        proc = subprocess.run(
            cmd,
            cwd=str(cwd),
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=False
        )
        return proc.returncode, proc.stdout.strip(), proc.stderr.strip()
    except Exception as e:
        return 1, "", str(e)


def has_changes() -> bool:
    """Check if git working tree has any unstaged or staged changes."""
    code, out, _ = run_cmd(["git", "status", "--porcelain"])
    return code == 0 and len(out) > 0


def commit_and_push(date_str: str, config: dict) -> bool:
    """Stage, commit, and optionally push changes."""
    git_cfg = config.get("git", {})
    remote = git_cfg.get("remote", "origin")
    branch = git_cfg.get("branch", "main")
    auto_push = git_cfg.get("auto_push", True)
    author_name = git_cfg.get("author_name", "Daily Digest Bot")
    author_email = git_cfg.get("author_email", "bot@users.noreply.github.com")

    # 1. Stage changes
    print("[GIT] Staging changes...")
    code, out, err = run_cmd(["git", "add", "."])
    if code != 0:
        print(f"[ERROR] git add failed: {err}")
        return False

    # Check if anything changed
    if not has_changes():
        print("[INFO] No file changes detected. Nothing to commit.")
        return True

    # Configure local git user if not globally set
    run_cmd(["git", "config", "user.name", author_name])
    run_cmd(["git", "config", "user.email", author_email])

    # 2. Commit with meaningful conventional commit message
    commit_msg = f"docs(digest): daily tech radar & dev TIL updates [{date_str}]\n\n- Updated GitHub trending spotlight\n- Curated latest tech discussions\n- Synchronized TIL engineering notes\n- Logged market snapshot"
    print(f"[GIT] Committing: docs(digest): daily tech radar & dev TIL updates [{date_str}]")
    code, out, err = run_cmd(["git", "commit", "-m", commit_msg])
    if code != 0:
        print(f"[WARN] Commit output: {err or out}")
        return False

    # 3. Push if enabled
    if auto_push:
        print(f"[GIT] Pushing to {remote} {branch}...")
        # Check if remote exists
        code, remotes, _ = run_cmd(["git", "remote"])
        if remote not in remotes.split():
            print(f"[WARN] Remote '{remote}' is not configured yet. Skipping git push.")
            print("[TIP] Set your remote with: git remote add origin <your-repo-url>")
            return True

        code, out, err = run_cmd(["git", "push", remote, branch])
        if code != 0:
            # Maybe local branch name is different (e.g. master vs main)
            # Try pushing current HEAD to remote branch
            code, out, err = run_cmd(["git", "push", remote, f"HEAD:{branch}"])
            if code != 0:
                print(f"[ERROR] git push failed:\n{err or out}")
                print("[TIP] If pushing for the first time, make sure your SSH key or Personal Access Token is configured.")
                return False

        print(f"[OK] Successfully pushed to {remote}/{branch}!")

    return True
