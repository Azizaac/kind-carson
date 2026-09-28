#!/usr/bin/env bash
# ==============================================================================
# Script Cron Runner untuk VPS Linux / aaPanel
# ==============================================================================

# Ganti path berikut sesuai lokasi folder project di VPS aaPanel kamu
# Contoh: /www/wwwroot/github-daily-digest atau /root/github-daily-digest
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$APP_DIR/cron.log"

echo "--------------------------------------------------------" >> "$LOG_FILE"
echo "[CRON] Starting Daily Sync at $(date '+%Y-%m-%d %H:%M:%S')" >> "$LOG_FILE"

cd "$APP_DIR" || exit 1

# Cari binary python3
PYTHON_BIN=$(command -v python3 || command -v python)

if [ -z "$PYTHON_BIN" ]; then
    echo "[ERROR] Python3 tidak ditemukan di sistem!" >> "$LOG_FILE"
    exit 1
fi

# Eksekusi main.py dan log outputnya
"$PYTHON_BIN" main.py >> "$LOG_FILE" 2>&1

EXIT_CODE=$?
echo "[CRON] Finished with exit code $EXIT_CODE at $(date '+%Y-%m-%d %H:%M:%S')" >> "$LOG_FILE"
echo "--------------------------------------------------------" >> "$LOG_FILE"
