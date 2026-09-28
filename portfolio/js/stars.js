// Interactive Cosmic Starfield & Meteor Engine
(function() {
    const canvas = document.getElementById('cosmic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initStars();
    });

    const stars = [];
    const meteors = [];
    const STAR_COUNT = Math.floor((width * height) / 8000);

    let mouse = { x: width / 2, y: height / 2, active: false };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
    });

    window.addEventListener('mouseleave', () => {
        mouse.active = false;
    });

    class Star {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.8 + 0.4;
            this.baseAlpha = Math.random() * 0.7 + 0.3;
            this.alpha = this.baseAlpha;
            this.twinkleSpeed = Math.random() * 0.03 + 0.008;
            this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
            // Star color palette (white, ice blue, violet)
            const colors = ['#ffffff', '#bae6fd', '#e0e7ff', '#c7d2fe', '#67e8f9'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.alpha += this.twinkleSpeed * this.twinkleDir;
            if (this.alpha > 1) {
                this.alpha = 1;
                this.twinkleDir = -1;
            } else if (this.alpha < 0.2) {
                this.alpha = 0.2;
                this.twinkleDir = 1;
            }

            // Mouse parallax effect
            if (mouse.active) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * 0.8;
                    this.y -= Math.sin(angle) * 0.8;
                }
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = this.size * 3;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    class Meteor {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width + 200;
            this.y = Math.random() * (height * 0.5);
            this.length = Math.random() * 80 + 50;
            this.speed = Math.random() * 8 + 6;
            this.size = Math.random() * 1.5 + 1;
            this.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1); // ~45 degrees
            this.opacity = 1;
            this.dead = false;
        }

        update() {
            this.x -= this.speed * Math.cos(this.angle);
            this.y += this.speed * Math.sin(this.angle);
            this.opacity -= 0.015;
            if (this.opacity <= 0 || this.x < -100 || this.y > height + 100) {
                this.dead = true;
            }
        }

        draw() {
            if (this.dead) return;
            ctx.save();
            ctx.globalAlpha = Math.max(0, this.opacity);
            const tailX = this.x + this.length * Math.cos(this.angle);
            const tailY = this.y - this.length * Math.sin(this.angle);

            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(0.3, '#38bdf8');
            gradient.addColorStop(1, 'transparent');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.size;
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#38bdf8';

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();
            ctx.restore();
        }
    }

    function initStars() {
        stars.length = 0;
        const count = Math.min(STAR_COUNT, 220);
        for (let i = 0; i < count; i++) {
            stars.push(new Star());
        }
    }

    initStars();

    // Spawn meteor periodically
    setInterval(() => {
        if (meteors.length < 3 && Math.random() > 0.3) {
            meteors.push(new Meteor());
        }
    }, 2800);

    // Occasional subtle lightning aurora pulse
    let lightningFlash = 0;
    function triggerLightning() {
        lightningFlash = 0.15;
        setTimeout(() => { lightningFlash = 0.05; }, 80);
        setTimeout(() => { lightningFlash = 0.25; }, 140);
        setTimeout(() => { lightningFlash = 0; }, 260);

        // Schedule next random lightning between 8s and 20s
        setTimeout(triggerLightning, Math.random() * 12000 + 8000);
    }
    setTimeout(triggerLightning, 5000);

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Lightning ambient flash
        if (lightningFlash > 0) {
            ctx.save();
            ctx.fillStyle = `rgba(56, 189, 248, ${lightningFlash})`;
            ctx.fillRect(0, 0, width, height);
            ctx.restore();
        }

        // Draw and update stars
        for (let star of stars) {
            star.update();
            star.draw();
        }

        // Draw and update meteors
        for (let i = meteors.length - 1; i >= 0; i--) {
            meteors[i].update();
            meteors[i].draw();
            if (meteors[i].dead) {
                meteors.splice(i, 1);
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
