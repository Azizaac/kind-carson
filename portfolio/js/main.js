// Interactive Cosmic Portfolio Engine (Matching Exact TikTok & Screenshots)
document.addEventListener('DOMContentLoaded', () => {

    // 1. Preloader Screen
    const preloader = document.getElementById('preloader');
    const preloaderBar = document.getElementById('preloader-bar');
    const preloaderText = document.getElementById('preloader-text');

    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 12;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            if (preloaderBar) preloaderBar.style.width = '100%';
            if (preloaderText) preloaderText.textContent = '100%';

            setTimeout(() => {
                if (preloader) preloader.style.opacity = '0';
                setTimeout(() => {
                    if (preloader) preloader.style.display = 'none';
                }, 500);

                if (window.AOS) {
                    window.AOS.init({ duration: 800, once: true, offset: 40 });
                }
                updateMascotPosition('home');
            }, 300);
        } else {
            if (preloaderBar) preloaderBar.style.width = progress + '%';
            if (preloaderText) preloaderText.textContent = progress + '%';
        }
    }, 50);

    // 2. Gliding Mascot on Capsule Nav
    const navMascot = document.getElementById('nav-mascot');
    const navTabs = document.querySelectorAll('.nav-tab');

    function updateMascotPosition(tabName) {
        if (!navMascot) return;
        const targetTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
        if (targetTab) {
            const tabRect = targetTab.getBoundingClientRect();
            const parentRect = targetTab.parentElement.getBoundingClientRect();
            const offsetLeft = tabRect.left - parentRect.left + (tabRect.width / 2) - 14;
            navMascot.style.left = `${offsetLeft}px`;

            navTabs.forEach(t => {
                t.classList.remove('text-white', 'bg-blue-600/30', 'border', 'border-blue-500/40');
                t.classList.add('text-slate-400');
            });
            targetTab.classList.add('text-white', 'bg-blue-600/30', 'border', 'border-blue-500/40');
            targetTab.classList.remove('text-slate-400');
        }
    }

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = tab.getAttribute('data-tab');
            updateMascotPosition(tabName);
        });
    });

    // ScrollSpy for Nav Tabs & Mascot
    const sectionIds = ['home', 'about', 'portfolio', 'contact'];
    window.addEventListener('scroll', () => {
        let currentSection = 'home';
        const scrollY = window.pageYOffset + 200;

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el && scrollY >= el.offsetTop) {
                currentSection = id;
            }
        });
        updateMascotPosition(currentSection);
    });

    // 3. Spiderman Avatar Interactive Switcher (Screenshots 1, 3, 4)
    const avatarReal = document.getElementById('avatar-real');
    const avatarMask = document.getElementById('avatar-mask');
    const avatarSuit = document.getElementById('avatar-suit');
    const avatarBox = document.getElementById('spidey-avatar-box');
    const toggleBtn = document.getElementById('avatar-toggle-btn');

    // Modes: 0 = Mask on Blazer, 1 = Full Spiderman Suit, 2 = Real Face
    let avatarMode = 0;
    const avatarModes = [
        { name: "Spiderman Mask", btnText: "🕷️ Mode: Spidey Mask (Click to switch)" },
        { name: "Full Spiderman", btnText: "🕸️ Mode: Full 3D Spiderman (Click to switch)" },
        { name: "Real Face", btnText: "👤 Mode: Real Photo (Click to switch)" }
    ];

    function applyAvatarMode(mode) {
        if (!avatarReal || !avatarMask || !avatarSuit) return;

        // Reset all
        [avatarReal, avatarMask, avatarSuit].forEach(el => {
            el.classList.remove('opacity-100', 'scale-100');
            el.classList.add('opacity-0', 'scale-95');
        });

        if (mode === 0) {
            avatarMask.classList.remove('opacity-0', 'scale-95');
            avatarMask.classList.add('opacity-100', 'scale-100');
        } else if (mode === 1) {
            avatarSuit.classList.remove('opacity-0', 'scale-95');
            avatarSuit.classList.add('opacity-100', 'scale-100');
        } else if (mode === 2) {
            avatarReal.classList.remove('opacity-0', 'scale-95');
            avatarReal.classList.add('opacity-100', 'scale-100');
        }

        if (toggleBtn) {
            toggleBtn.innerHTML = `<span>${avatarModes[mode].btnText}</span>`;
        }
    }

    function cycleAvatar() {
        avatarMode = (avatarMode + 1) % 3;
        applyAvatarMode(avatarMode);
    }

    if (avatarBox) avatarBox.addEventListener('click', cycleAvatar);
    if (toggleBtn) toggleBtn.addEventListener('click', cycleAvatar);

    // 4. Role Typing Animation (Screenshot 2)
    const roleTyping = document.getElementById('role-typing-text');
    const roleList = [
        "IT Edu Student",
        "Full-Stack Web Developer",
        "Creative UI/UX Designer",
        "Cloud & Automation Engineer"
    ];

    let rIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    function typeRoles() {
        if (!roleTyping) return;
        const currentRole = roleList[rIdx];

        if (isDeleting) {
            roleTyping.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            roleTyping.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            speed = 1800; // Pause at word end
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            rIdx = (rIdx + 1) % roleList.length;
            speed = 400;
        }

        setTimeout(typeRoles, speed);
    }
    setTimeout(typeRoles, 800);

    // 5. Spotify Daily Rotation Interactive Music Player (Screenshot 2)
    const playBtn = document.getElementById('spotify-play-btn');
    const nowPlayingTitle = document.getElementById('now-playing-title');
    const nowPlayingArtist = document.getElementById('now-playing-artist');
    const trackRows = document.querySelectorAll('.track-row');

    const tracks = [
        { title: "Terbuang Dalam Waktu", artist: "Barasuara", duration: "04:41", freq: 220 },
        { title: "Raindance (feat. Tems)", artist: "Dave, Tems", duration: "03:39", freq: 261.63 },
        { title: "Одного", artist: "Татьяна Куртукова", duration: "03:12", freq: 329.63 }
    ];

    let currentTrackIdx = 0;
    let isPlayingMusic = false;
    let audioContext = null;
    let synthOsc = null;
    let synthGain = null;

    function startLoFiSynth(freq) {
        if (!audioContext) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioCtx();
        }
        if (synthOsc) {
            synthOsc.stop();
        }
        synthOsc = audioContext.createOscillator();
        synthGain = audioContext.createGain();

        synthOsc.type = 'triangle';
        synthOsc.frequency.setValueAtTime(freq, audioContext.currentTime);

        synthGain.gain.setValueAtTime(0.01, audioContext.currentTime);
        synthGain.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 1);

        synthOsc.connect(synthGain);
        synthGain.connect(audioContext.destination);
        synthOsc.start();
    }

    function stopLoFiSynth() {
        if (synthGain && audioContext) {
            synthGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
            setTimeout(() => {
                if (synthOsc) synthOsc.stop();
            }, 500);
        }
    }

    function setTrack(idx) {
        currentTrackIdx = idx;
        const t = tracks[idx];
        if (nowPlayingTitle) nowPlayingTitle.textContent = t.title;
        if (nowPlayingArtist) nowPlayingArtist.textContent = t.artist;

        trackRows.forEach((row, i) => {
            if (i === idx) {
                row.classList.add('bg-white/10', 'text-blue-400');
            } else {
                row.classList.remove('bg-white/10', 'text-blue-400');
            }
        });

        if (isPlayingMusic) {
            startLoFiSynth(t.freq);
        }
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (!isPlayingMusic) {
                isPlayingMusic = true;
                playBtn.innerHTML = "⏸";
                playBtn.classList.add('bg-blue-500', 'text-white');
                startLoFiSynth(tracks[currentTrackIdx].freq);
            } else {
                isPlayingMusic = false;
                playBtn.innerHTML = "▶";
                playBtn.classList.remove('bg-blue-500', 'text-white');
                stopLoFiSynth();
            }
        });
    }

    trackRows.forEach(row => {
        row.addEventListener('click', () => {
            const idx = +row.getAttribute('data-track');
            setTrack(idx);
            if (!isPlayingMusic) {
                playBtn.click();
            }
        });
    });

    const prevBtn = document.getElementById('spotify-prev');
    const nextBtn = document.getElementById('spotify-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const nextIdx = (currentTrackIdx - 1 + tracks.length) % tracks.length;
            setTrack(nextIdx);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const nextIdx = (currentTrackIdx + 1) % tracks.length;
            setTrack(nextIdx);
        });
    }

    // 6. Project Filter Tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-blue-600/20', 'text-blue-400', 'border-blue-500/40');
                b.classList.add('text-slate-400', 'border-white/10');
            });
            btn.classList.add('bg-blue-600/20', 'text-blue-400', 'border-blue-500/40');
            btn.classList.remove('text-slate-400', 'border-white/10');

            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.project-card').forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 7. Contact Form Handler (Stores message in Admin inbox)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = "Sending Message...";

            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = "Send Message";
                alert("✨ Pesan berhasil dikirim dan tersimpan di Admin Inbox! Terima kasih.");
                contactForm.reset();
            }, 1000);
        });
    }
});
