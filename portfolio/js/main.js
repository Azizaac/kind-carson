// Main Portfolio Interactive Engine
document.addEventListener('DOMContentLoaded', () => {

    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    const preloaderBar = document.getElementById('preloader-bar');
    const preloaderText = document.getElementById('preloader-text');

    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 18) + 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            if (preloaderBar) preloaderBar.style.width = '100%';
            if (preloaderText) preloaderText.textContent = '100%';

            setTimeout(() => {
                if (preloader) preloader.classList.add('fade-out');
                // Trigger AOS animations once loaded
                if (window.AOS) {
                    window.AOS.init({
                        duration: 800,
                        easing: 'ease-out-cubic',
                        once: true,
                        offset: 50
                    });
                }
            }, 400);
        } else {
            if (preloaderBar) preloaderBar.style.width = progress + '%';
            if (preloaderText) preloaderText.textContent = progress + '%';
        }
    }, 70);

    // 2. Typing Text Effect
    const typingElement = document.getElementById('typing-text');
    const roles = [
        "Full-Stack Web Developer",
        "Creative UI/UX Engineer",
        "Backend & Cloud Enthusiast",
        "Automation & Bot Builder",
        "Open-Source Contributor"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        if (!typingElement) return;
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at end of word
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typingSpeed = 400; // Pause before typing new word
        }

        setTimeout(typeEffect, typingSpeed);
    }
    setTimeout(typeEffect, 1000);

    // 3. Stats Counter Animation
    const counters = document.querySelectorAll('.stat-counter');
    let hasAnimatedCounters = false;

    function animateCounters() {
        if (hasAnimatedCounters) return;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out expo
                const currentVal = Math.floor(progress * target);
                counter.textContent = currentVal + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + suffix;
                }
            }
            requestAnimationFrame(updateCounter);
        });
        hasAnimatedCounters = true;
    }

    // Observe stats section
    const statsSection = document.getElementById('about');
    if (statsSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
            }
        }, { threshold: 0.3 });
        observer.observe(statsSection);
    }

    // 4. Project Filter Tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
                b.classList.add('text-slate-400', 'border-white/10');
            });
            btn.classList.add('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
            btn.classList.remove('text-slate-400', 'border-white/10');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.35s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 5. Certificate & Image Modal
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModalBtn = document.getElementById('modal-close');

    document.querySelectorAll('.view-cert-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = btn.getAttribute('data-img');
            const title = btn.getAttribute('data-title');
            const desc = btn.getAttribute('data-desc');

            if (modalImg) modalImg.src = imgSrc;
            if (modalTitle) modalTitle.textContent = title;
            if (modalDesc) modalDesc.textContent = desc;

            if (modal) {
                modal.classList.remove('hidden');
                setTimeout(() => modal.classList.remove('opacity-0'), 20);
            }
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 6. Contact Form & Toast Alert
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message, isSuccess = true) {
        if (!toast) return;
        if (toastMessage) toastMessage.textContent = message;
        toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
        toast.classList.add('translate-y-0', 'opacity-100');

        setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
        }, 4000);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> Sending Message...
            `;
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
                showToast("✨ Pesan berhasil dikirim! Terima kasih sudah menghubungi.");
            }, 1200);
        });
    }

    // 7. Ambient Audio Synthesizer Toggle
    const soundToggle = document.getElementById('sound-toggle');
    const soundWave = document.getElementById('sound-wave');
    let audioCtx = null;
    let isPlaying = false;
    let oscillator = null;
    let gainNode = null;

    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            if (!audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AudioContext();
            }

            if (!isPlaying) {
                // Gentle ambient binaural pad drone
                oscillator = audioCtx.createOscillator();
                gainNode = audioCtx.createGain();

                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(144, audioCtx.currentTime); // Soft healing harmonic frequency

                gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 2);

                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                oscillator.start();

                isPlaying = true;
                if (soundWave) soundWave.classList.remove('opacity-30');
                soundToggle.classList.add('border-sky-500', 'text-sky-400');
            } else {
                if (gainNode) {
                    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
                    setTimeout(() => {
                        if (oscillator) oscillator.stop();
                    }, 500);
                }
                isPlaying = false;
                if (soundWave) soundWave.classList.add('opacity-30');
                soundToggle.classList.remove('border-sky-500', 'text-sky-400');
            }
        });
    }

    // 8. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 9. ScrollSpy for Active Navbar Indicator
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-sky-400', 'bg-white/10');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-sky-400', 'bg-white/10');
            }
        });
    });

    // 10. Smooth Back to Top
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.remove('opacity-100');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
