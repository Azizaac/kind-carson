# 📘 Panduan Lengkap: Menjalankan GitHub Daily Digest Engine

Aplikasi ini dirancang agar aktivitas commit GitHub kamu tetap aktif, rapi, dan bermanfaat (**bukan commit spam / random string**, melainkan kurasi harian seputar dunia software engineering).

Setiap kali dijalankan, engine ini akan:
1. 🔥 **Scrape Repositori GitHub Trending** terbaru dengan bintang terbanyak.
2. 📰 **Mengambil diskusi teratas dari Hacker News & Dev.to**.
3. 💡 **Memilih catatan "Today I Learned" (TIL)** & tips pro dev (Git, Python, Docker, Database, Linux).
4. 📊 **Snapshot pasar crypto & tech pulse** (Bitcoin, Ethereum, Solana, BNB).
5. 📜 **Quote inspiratif seputar software engineering**.
6. 📝 Menyimpan arsip harian di `digest/YYYY/MM/YYYY-MM-DD.md` dan memperbarui `README.md`.
7. 📦 Melakukan `git commit` dengan pesan conventional commit yang rapi dan melakukan `git push`.

---

## 🛠️ Langkah 1: Hubungkan ke GitHub Kamu

Sebelum dijalankan di VPS atau Local, buat repository baru di GitHub kamu:
1. Buka [GitHub New Repository](https://github.com/new).
2. Beri nama repo (contoh: `daily-tech-digest` atau `dev-radar`). Set ke **Public** (agar grafik kontribusi hijau terlihat di profil GitHub kamu).
3. Di terminal folder ini pada komputer lokal kamu, hubungkan remote repo:
   ```bash
   git remote add origin https://github.com/USERNAME_KAMU/NAMA_REPO.git
   git branch -M main
   git push -u origin main
   ```

---

## 🖥️ Langkah 2: Setup di VPS (aaPanel) — *Rekomendasi Utama*

aaPanel sangat praktis karena memiliki menu **Cron** bawaan dengan UI yang mudah dikelola.

### A. Clone Repo ke VPS aaPanel
1. Buka Terminal VPS (bisa via menu **Terminal** di aaPanel atau via SSH PuTTY/Terminal).
2. Clone repository kamu ke direktori yang diinginkan (misal di `/www/wwwroot/daily-digest`):
   ```bash
   cd /www/wwwroot
   git clone git@github.com:USERNAME_KAMU/NAMA_REPO.git daily-digest
   cd daily-digest
   ```

### B. Setup SSH Key di VPS agar Bisa Auto-Push ke GitHub
Agar script di VPS bisa melakukan `git push` tanpa meminta username/password:
1. Cek apakah VPS sudah punya SSH key:
   ```bash
   cat ~/.ssh/id_rsa.pub || cat ~/.ssh/id_ed25519.pub
   ```
2. Jika belum ada, buat SSH key baru di VPS:
   ```bash
   ssh-keygen -t ed25519 -C "vps-aapanel-cron"
   # Tekan Enter sampai selesai
   cat ~/.ssh/id_ed25519.pub
   ```
3. Copy output key tersebut, lalu buka **GitHub** -> **Settings** -> **SSH and GPG keys** -> **New SSH key** -> Paste -> Save.
4. Tes koneksi dari terminal VPS:
   ```bash
   ssh -T git@github.com
   # Jika muncul "Hi USERNAME! You've successfully authenticated", berarti sukses!
   ```
5. Pastikan remote repo di VPS menggunakan URL SSH:
   ```bash
   cd /www/wwwroot/daily-digest
   git remote set-url origin git@github.com:USERNAME_KAMU/NAMA_REPO.git
   ```

### C. Tambahkan Task di Cron aaPanel
1. Login ke dashboard **aaPanel**.
2. Klik menu **Cron** di sidebar sebelah kiri.
3. Isi form task baru:
   - **Type of Task**: `Shell Script`
   - **Name of Task**: `GitHub Daily Digest Sync`
   - **Period**: Pilih `Day` (misal setiap jam `08:00` atau `07:30` pagi).
   - **Script Content**: Masukkan perintah berikut:
     ```bash
     bash /www/wwwroot/daily-digest/run_cron.sh
     ```
4. Klik tombol **Add Task**.
5. Untuk mengetes, klik tombol **Execute** pada task tersebut, lalu klik **Log** untuk memastikan proses berjalan sukses.

---

## 💻 Langkah 3: Menjalankan di Komputer Local (Windows)

Jika ingin dijalankan di komputer local:
1. **Manual / Sekali Klik**:
   - Cukup double-click file [run_local.bat](file:///c:/Users/Legaxyy/Documents/antigravity/kind-carson/run_local.bat) atau jalankan `python main.py` di terminal.
2. **Otomatis via Windows Task Scheduler**:
   - Buka `Task Scheduler` di Windows.
   - Buat `Basic Task` -> Trigger: `Daily` (jam 08:00).
   - Action: `Start a Program` -> pilih file `run_local.bat`.

---

## ☁️ Opsi Cadangan: GitHub Actions (Tanpa VPS / Serverless)

File workflow `.github/workflows/daily-digest.yml` sudah disediakan di dalam repo ini.
- Setelah repo di-push ke GitHub, buka tab **Settings** -> **Actions** -> **General** -> scroll ke **Workflow permissions** -> pilih **Read and write permissions** -> Save.
- GitHub Actions akan otomatis berjalan setiap jam 07:00 WIB (00:00 UTC) langsung dari server GitHub secara gratis, jadi meskipun komputer lokal dan VPS kamu mati, commit harian tetap berjalan!

---

## ⚙️ Kustomisasi Fitur

Kamu bisa mengaktifkan atau menonaktifkan modul tertentu dengan mengedit file [config.json](file:///c:/Users/Legaxyy/Documents/antigravity/kind-carson/config.json):
```json
{
  "author_name": "Azizaac",
  "github_username": "Azizaac",
  "features": {
    "github_trending": true,
    "tech_news": true,
    "crypto_market": true,
    "daily_til": true,
    "daily_quote": true
  }
}
```
Jika tidak ingin menampilkan harga crypto misalnya, ubah `"crypto_market": false`.
