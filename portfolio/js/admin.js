// Admin Dashboard & CMS Management Engine for Portfolio
(function() {
    const ADMIN_PIN = "1234";

    // Default initial projects data
    const DEFAULT_PROJECTS = [
        {
            id: 1,
            title: "Daily Tech Radar & Digest Engine",
            category: "bot",
            categoryLabel: "Automation",
            year: "2026",
            icon: "📡",
            desc: "Mesin kurasi harian otomatis yang mengagregasi trending repository GitHub, diskusi Hacker News, tips TIL (Today I Learned), dan sinkronisasi commit otomatis ke GitHub.",
            tags: ["Python", "GitHub API", "aaPanel Cron"],
            github: "https://github.com/Azizaac/kind-carson",
            demo: "#"
        },
        {
            id: 2,
            title: "Cosmic Glassmorphism Portfolio",
            category: "web",
            categoryLabel: "Web Application",
            year: "2026",
            icon: "⚡",
            desc: "Website portofolio berdesain futuristik dengan canvas bintang interaktif, kilatan petir cerdas, audio synthesizer ambien, serta navigasi glassmorphism yang mulus.",
            tags: ["HTML5 Canvas", "Tailwind CSS", "JavaScript ES6"],
            github: "https://github.com/Azizaac/kind-carson",
            demo: "#home"
        },
        {
            id: 3,
            title: "Telegram AI Assistant",
            category: "bot",
            categoryLabel: "AI & Automation",
            year: "2026",
            icon: "🤖",
            desc: "Bot Telegram 24/7 di VPS yang terintegrasi dengan Google Gemini AI untuk analisis gambar, tanya-jawab pemrograman, dan downloader media otomatis.",
            tags: ["Python", "Gemini API", "Telegram Bot API"],
            github: "https://github.com/Azizaac",
            demo: "#"
        },
        {
            id: 4,
            title: "aaPanel VPS Deployment Engine",
            category: "backend",
            categoryLabel: "Cloud Infrastructure",
            year: "2026",
            icon: "🖥️",
            desc: "Konfigurasi server Ubuntu VPS mandiri dengan Nginx reverse proxy, isolasi proses Node & Python, cron scheduler, dan keamanan firewall terpusat.",
            tags: ["Ubuntu Server", "Nginx", "aaPanel"],
            github: "https://github.com/Azizaac",
            demo: "#"
        }
    ];

    // LocalStorage helper functions
    function getStoredProjects() {
        const stored = localStorage.getItem('azizaac_portfolio_projects');
        if (!stored) {
            localStorage.setItem('azizaac_portfolio_projects', JSON.stringify(DEFAULT_PROJECTS));
            return DEFAULT_PROJECTS;
        }
        try {
            return JSON.parse(stored);
        } catch {
            return DEFAULT_PROJECTS;
        }
    }

    function saveProjects(projects) {
        localStorage.setItem('azizaac_portfolio_projects', JSON.stringify(projects));
        renderLiveProjects();
    }

    function getMessages() {
        const stored = localStorage.getItem('azizaac_portfolio_messages');
        return stored ? JSON.parse(stored) : [];
    }

    function saveMessage(msg) {
        const msgs = getMessages();
        msgs.unshift({
            id: Date.now(),
            date: new Date().toLocaleString('id-ID'),
            ...msg
        });
        localStorage.setItem('azizaac_portfolio_messages', JSON.stringify(msgs));
    }

    // Render projects on the public page
    function renderLiveProjects() {
        const container = document.querySelector('#projects .grid');
        if (!container) return;

        const projects = getStoredProjects();
        container.innerHTML = '';

        projects.forEach((proj, idx) => {
            const card = document.createElement('div');
            card.className = "project-card glass-card overflow-hidden group";
            card.setAttribute('data-category', proj.category);
            card.setAttribute('data-aos', 'fade-up');
            if (idx > 0) card.setAttribute('data-aos-delay', (idx * 50).toString());

            const tagsHtml = proj.tags.map(t => 
                `<span class="text-[11px] font-mono bg-slate-800 text-sky-400 px-2.5 py-0.5 rounded-md border border-white/5">${t}</span>`
            ).join('');

            card.innerHTML = `
                <div class="h-48 bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-900 p-6 flex flex-col justify-between relative overflow-hidden">
                    <div class="absolute -right-8 -bottom-8 w-40 h-40 bg-sky-500/20 rounded-full filter blur-2xl group-hover:scale-150 transition-transform"></div>
                    <div class="flex items-center justify-between z-10">
                        <span class="text-xs font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2.5 py-1 rounded-full">${proj.categoryLabel || proj.category}</span>
                        <span class="text-xs text-slate-400 font-mono">${proj.year || '2026'}</span>
                    </div>
                    <div class="z-10">
                        <div class="text-4xl mb-2">${proj.icon || '🚀'}</div>
                        <h3 class="text-xl font-bold text-white font-heading">${proj.title}</h3>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-slate-300 text-sm leading-relaxed mb-4">${proj.desc}</p>
                    <div class="flex flex-wrap gap-2 mb-6">${tagsHtml}</div>
                    <div class="flex items-center gap-3">
                        ${proj.github && proj.github !== '#' ? `
                            <a href="${proj.github}" target="_blank" rel="noopener noreferrer" 
                               class="px-4 py-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-semibold border border-sky-500/40 flex items-center gap-2 transition-all">
                                <i class="devicon-github-original"></i>
                                <span>Repository</span>
                            </a>
                        ` : ''}
                        ${proj.demo && proj.demo !== '#' ? `
                            <a href="${proj.demo}" class="px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-xs font-semibold border border-purple-500/40 flex items-center gap-2 transition-all">
                                <span>Live Demo</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Intercept contact form to save into Admin inbox
    window.addEventListener('load', () => {
        renderLiveProjects();

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', () => {
                const inputs = contactForm.querySelectorAll('input, textarea');
                const name = inputs[0]?.value || 'Anonymous';
                const email = inputs[1]?.value || '';
                const subject = inputs[2]?.value || 'General Inquiry';
                const message = inputs[3]?.value || '';

                saveMessage({ name, email, subject, message });
            });
        }
    });

    // Create Admin UI Elements (Login Modal & Dashboard Modal)
    function createAdminModals() {
        const adminWrapper = document.createElement('div');
        adminWrapper.id = 'admin-cms-wrapper';
        adminWrapper.innerHTML = `
            <!-- Admin Login Modal -->
            <div id="admin-login-modal" class="fixed inset-0 z-[100000] modal-backdrop flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300">
                <div class="glass-card max-w-sm w-full p-8 text-center bg-slate-950/95 border border-sky-500/30 shadow-2xl relative">
                    <button id="admin-login-close" class="absolute top-4 right-4 text-slate-400 hover:text-white p-1">✕</button>
                    <div class="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mx-auto mb-4 text-2xl shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                        🔐
                    </div>
                    <h3 class="text-xl font-bold font-heading text-white mb-1">Admin Portal</h3>
                    <p class="text-xs text-slate-400 mb-6 font-mono">Enter PIN to access Portfolio CMS (Default: 1234)</p>
                    
                    <form id="admin-login-form" class="space-y-4">
                        <input type="password" id="admin-pin-input" placeholder="Enter PIN..." maxlength="8" required 
                               class="w-full text-center tracking-widest text-lg px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-sky-500 font-mono" />
                        <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-300 hover:to-indigo-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all">
                            Unlock Dashboard
                        </button>
                    </form>
                    <p id="admin-pin-error" class="text-xs text-rose-400 font-mono mt-3 hidden">Incorrect PIN! Try 1234.</p>
                </div>
            </div>

            <!-- Full Admin Dashboard Modal -->
            <div id="admin-dashboard-modal" class="fixed inset-0 z-[100000] modal-backdrop flex items-center justify-center p-4 hidden opacity-0 transition-opacity duration-300">
                <div class="glass-card max-w-4xl w-full h-[90vh] bg-slate-950/95 border border-sky-500/30 shadow-2xl flex flex-col overflow-hidden">
                    
                    <!-- Dashboard Header -->
                    <div class="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center font-bold">⚡</span>
                            <div>
                                <h2 class="text-lg font-bold font-heading text-white">Azizaac Portfolio Admin CMS</h2>
                                <p class="text-xs text-slate-400 font-mono">Live Content & Project Management</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-3">
                            <button id="admin-logout-btn" class="px-3.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-mono transition-all">
                                Logout
                            </button>
                            <button id="admin-dashboard-close" class="text-slate-400 hover:text-white p-2">✕</button>
                        </div>
                    </div>

                    <!-- Dashboard Nav Tabs -->
                    <div class="px-6 pt-4 border-b border-white/10 flex gap-4 text-xs font-mono shrink-0">
                        <button class="admin-tab-btn pb-3 text-sky-400 border-b-2 border-sky-400 font-bold" data-tab="tab-overview">Overview</button>
                        <button class="admin-tab-btn pb-3 text-slate-400 hover:text-white transition-colors" data-tab="tab-projects">Manage Projects</button>
                        <button class="admin-tab-btn pb-3 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" data-tab="tab-messages">
                            <span>Inbox Messages</span>
                            <span id="inbox-badge" class="px-1.5 py-0.2 rounded-full bg-sky-500 text-slate-950 font-bold text-[10px]">0</span>
                        </button>
                    </div>

                    <!-- Dashboard Content Body -->
                    <div class="p-6 overflow-y-auto flex-1 space-y-6">
                        
                        <!-- TAB 1: OVERVIEW -->
                        <div id="tab-overview" class="admin-tab-pane space-y-6">
                            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <div class="p-4 rounded-xl bg-slate-900 border border-white/10">
                                    <span class="text-xs text-slate-400 font-mono">Total Projects</span>
                                    <div id="overview-proj-count" class="text-2xl font-bold font-heading text-sky-400 mt-1">4</div>
                                </div>
                                <div class="p-4 rounded-xl bg-slate-900 border border-white/10">
                                    <span class="text-xs text-slate-400 font-mono">Inbox Messages</span>
                                    <div id="overview-msg-count" class="text-2xl font-bold font-heading text-indigo-400 mt-1">0</div>
                                </div>
                                <div class="p-4 rounded-xl bg-slate-900 border border-white/10">
                                    <span class="text-xs text-slate-400 font-mono">Server Status</span>
                                    <div class="text-2xl font-bold font-heading text-emerald-400 mt-1">Online</div>
                                </div>
                                <div class="p-4 rounded-xl bg-slate-900 border border-white/10">
                                    <span class="text-xs text-slate-400 font-mono">Hosting</span>
                                    <div class="text-2xl font-bold font-heading text-purple-400 mt-1">aaPanel</div>
                                </div>
                            </div>

                            <div class="p-5 rounded-2xl bg-sky-500/10 border border-sky-500/20">
                                <h4 class="text-sm font-bold text-sky-300 font-heading mb-1">💡 Quick Tip for aaPanel</h4>
                                <p class="text-xs text-slate-300 leading-relaxed">
                                    Kamu bisa menambahkan atau mengedit data proyek langsung dari dashboard ini. Semua data tersimpan aman di browser kamu dan akan langsung tampil di halaman depan portofolio!
                                </p>
                            </div>
                        </div>

                        <!-- TAB 2: MANAGE PROJECTS -->
                        <div id="tab-projects" class="admin-tab-pane hidden space-y-6">
                            <!-- Add Project Form Accordion -->
                            <div class="p-5 rounded-2xl bg-slate-900 border border-white/10">
                                <h4 class="text-sm font-bold text-white font-heading mb-4 flex items-center gap-2">
                                    <span>➕ Add New Project</span>
                                </h4>
                                <form id="add-project-form" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-[11px] font-mono text-slate-400 mb-1">Project Title</label>
                                        <input type="text" id="new-proj-title" placeholder="e.g. Crypto Tracker Web" required 
                                               class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-sky-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-mono text-slate-400 mb-1">Category</label>
                                        <select id="new-proj-cat" class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-sky-500 focus:outline-none">
                                            <option value="web">Web Application</option>
                                            <option value="bot">Automation & Bot</option>
                                            <option value="backend">Cloud & System</option>
                                        </select>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label class="block text-[11px] font-mono text-slate-400 mb-1">Description</label>
                                        <textarea id="new-proj-desc" rows="2" placeholder="Brief explanation of what the project does..." required 
                                                  class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-sky-500 focus:outline-none resize-none"></textarea>
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-mono text-slate-400 mb-1">Tech Stack (comma separated)</label>
                                        <input type="text" id="new-proj-tags" placeholder="React, Node.js, Tailwind" required 
                                               class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-sky-500 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label class="block text-[11px] font-mono text-slate-400 mb-1">GitHub Repo URL</label>
                                        <input type="url" id="new-proj-github" placeholder="https://github.com/..." 
                                               class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-sky-500 focus:outline-none" />
                                    </div>
                                    <div class="sm:col-span-2 flex justify-end">
                                        <button type="submit" class="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                                            Save Project
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <!-- Projects List Table -->
                            <div>
                                <h4 class="text-sm font-bold text-white font-heading mb-3">Current Projects</h4>
                                <div id="admin-projects-list" class="space-y-3">
                                    <!-- Rendered dynamically -->
                                </div>
                            </div>
                        </div>

                        <!-- TAB 3: INBOX MESSAGES -->
                        <div id="tab-messages" class="admin-tab-pane hidden space-y-4">
                            <div class="flex items-center justify-between">
                                <h4 class="text-sm font-bold text-white font-heading">Incoming Contact Messages</h4>
                                <button id="clear-messages-btn" class="text-xs text-rose-400 hover:text-rose-300 font-mono">Clear All</button>
                            </div>
                            <div id="admin-messages-list" class="space-y-3">
                                <!-- Messages rendered dynamically -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(adminWrapper);
        bindAdminEvents();
    }

    function bindAdminEvents() {
        const loginModal = document.getElementById('admin-login-modal');
        const dashModal = document.getElementById('admin-dashboard-modal');
        const loginClose = document.getElementById('admin-login-close');
        const dashClose = document.getElementById('admin-dashboard-close');
        const loginForm = document.getElementById('admin-login-form');
        const pinInput = document.getElementById('admin-pin-input');
        const pinError = document.getElementById('admin-pin-error');
        const logoutBtn = document.getElementById('admin-logout-btn');

        // Open login
        window.openAdminLogin = function() {
            if (loginModal) {
                loginModal.classList.remove('hidden');
                setTimeout(() => loginModal.classList.remove('opacity-0'), 20);
                if (pinInput) pinInput.focus();
            }
        };

        function closeLogin() {
            if (loginModal) {
                loginModal.classList.add('opacity-0');
                setTimeout(() => loginModal.classList.add('hidden'), 300);
            }
        }

        function closeDash() {
            if (dashModal) {
                dashModal.classList.add('opacity-0');
                setTimeout(() => dashModal.classList.add('hidden'), 300);
            }
        }

        if (loginClose) loginClose.addEventListener('click', closeLogin);
        if (dashClose) dashClose.addEventListener('click', closeDash);

        // Login check
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (pinInput.value === ADMIN_PIN) {
                    closeLogin();
                    pinError.classList.add('hidden');
                    pinInput.value = '';

                    // Open dashboard
                    dashModal.classList.remove('hidden');
                    setTimeout(() => dashModal.classList.remove('opacity-0'), 20);
                    refreshAdminDashboard();
                } else {
                    pinError.classList.remove('hidden');
                }
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', closeDash);
        }

        // Tabs switching
        const tabBtns = document.querySelectorAll('.admin-tab-btn');
        const tabPanes = document.querySelectorAll('.admin-tab-pane');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => {
                    b.classList.remove('text-sky-400', 'border-b-2', 'border-sky-400', 'font-bold');
                    b.classList.add('text-slate-400');
                });
                btn.classList.add('text-sky-400', 'border-b-2', 'border-sky-400', 'font-bold');
                btn.classList.remove('text-slate-400');

                const targetTab = btn.getAttribute('data-tab');
                tabPanes.forEach(pane => {
                    if (pane.id === targetTab) {
                        pane.classList.remove('hidden');
                    } else {
                        pane.classList.add('hidden');
                    }
                });
            });
        });

        // Add Project Form
        const addProjForm = document.getElementById('add-project-form');
        if (addProjForm) {
            addProjForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const title = document.getElementById('new-proj-title').value;
                const category = document.getElementById('new-proj-cat').value;
                const desc = document.getElementById('new-proj-desc').value;
                const tags = document.getElementById('new-proj-tags').value.split(',').map(t => t.trim()).filter(Boolean);
                const github = document.getElementById('new-proj-github').value || '#';

                const catLabels = { web: 'Web Application', bot: 'Automation & Bot', backend: 'Cloud & System' };

                const newProj = {
                    id: Date.now(),
                    title,
                    category,
                    categoryLabel: catLabels[category] || 'Project',
                    year: '2026',
                    icon: '🚀',
                    desc,
                    tags,
                    github,
                    demo: '#'
                };

                const currentProjs = getStoredProjects();
                currentProjs.unshift(newProj);
                saveProjects(currentProjs);

                addProjForm.reset();
                refreshAdminDashboard();

                alert("✨ Project berhasil ditambahkan dan langsung tampil di halaman depan!");
            });
        }

        // Clear messages
        const clearMsgBtn = document.getElementById('clear-messages-btn');
        if (clearMsgBtn) {
            clearMsgBtn.addEventListener('click', () => {
                if (confirm("Hapus semua pesan di inbox?")) {
                    localStorage.removeItem('azizaac_portfolio_messages');
                    refreshAdminDashboard();
                }
            });
        }

        // Keyboard Shortcut: Ctrl + Shift + A to open Admin
        window.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                window.openAdminLogin();
            }
        });
    }

    function refreshAdminDashboard() {
        const projects = getStoredProjects();
        const messages = getMessages();

        // Update counts
        const projCount = document.getElementById('overview-proj-count');
        const msgCount = document.getElementById('overview-msg-count');
        const inboxBadge = document.getElementById('inbox-badge');

        if (projCount) projCount.textContent = projects.length;
        if (msgCount) msgCount.textContent = messages.length;
        if (inboxBadge) inboxBadge.textContent = messages.length;

        // Render project rows
        const projList = document.getElementById('admin-projects-list');
        if (projList) {
            projList.innerHTML = '';
            projects.forEach(p => {
                const row = document.createElement('div');
                row.className = "p-3 rounded-xl bg-slate-900/80 border border-white/5 flex items-center justify-between gap-4";
                row.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-xl">${p.icon || '🚀'}</span>
                        <div>
                            <h5 class="text-xs font-bold text-white">${p.title}</h5>
                            <span class="text-[10px] text-slate-400 font-mono">${p.category} · ${p.tags.join(', ')}</span>
                        </div>
                    </div>
                    <button class="delete-proj-btn text-xs text-rose-400 hover:text-rose-300 p-2 font-mono" data-id="${p.id}">
                        Delete
                    </button>
                `;
                projList.appendChild(row);
            });

            // Delete project handlers
            projList.querySelectorAll('.delete-proj-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = +btn.getAttribute('data-id');
                    if (confirm("Hapus proyek ini?")) {
                        const updated = getStoredProjects().filter(p => p.id !== id);
                        saveProjects(updated);
                        refreshAdminDashboard();
                    }
                });
            });
        }

        // Render message rows
        const msgList = document.getElementById('admin-messages-list');
        if (msgList) {
            msgList.innerHTML = '';
            if (messages.length === 0) {
                msgList.innerHTML = `<p class="text-xs text-slate-500 font-mono text-center py-8">Belum ada pesan masuk di contact form.</p>`;
            } else {
                messages.forEach(m => {
                    const mCard = document.createElement('div');
                    mCard.className = "p-4 rounded-xl bg-slate-900 border border-white/10 space-y-1.5";
                    mCard.innerHTML = `
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-sky-400">${m.name} (${m.email})</span>
                            <span class="text-[10px] text-slate-500 font-mono">${m.date}</span>
                        </div>
                        <h6 class="text-xs font-semibold text-white">${m.subject}</h6>
                        <p class="text-xs text-slate-300 leading-relaxed">${m.message}</p>
                    `;
                    msgList.appendChild(mCard);
                });
            }
        }
    }

    // Initialize when DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
        createAdminModals();
    });
})();
