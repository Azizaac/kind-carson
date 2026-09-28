// Spiderman Interactive Easter Egg
function initSpiderman() {
    const container = document.createElement('div');
    container.id = 'spiderman-container';
    container.className = 'fixed top-0 right-8 z-40 pointer-events-auto cursor-pointer group select-none';
    container.innerHTML = `
        <!-- Spider Web Thread -->
        <div class="w-[2px] h-24 sm:h-32 bg-gradient-to-b from-white/40 via-white/80 to-white mx-auto shadow-[0_0_8px_#ffffff] origin-top animate-webSwing"></div>
        
        <!-- Spiderman Upside-Down Body -->
        <div id="spiderman-body" class="relative -mt-1 origin-top transition-transform duration-300 group-hover:scale-110">
            <!-- Speech Bubble -->
            <div id="spidey-dialogue" class="absolute -left-48 top-12 opacity-0 pointer-events-none transition-all duration-300 scale-90 origin-right bg-slate-900/95 border border-red-500/50 text-white text-xs font-mono py-2 px-3 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.4)] whitespace-nowrap">
                <span class="text-red-400 font-bold">Spidey:</span> <span id="spidey-text">With great code comes great responsibility! 🕷️</span>
                <div class="absolute -right-2 top-3 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-slate-900"></div>
            </div>

            <!-- Crisp Upside Down Spiderman Vector -->
            <svg class="w-14 h-18 sm:w-16 sm:h-20 drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Torso / Suit -->
                <path d="M35 15 C30 35, 25 55, 30 75 C35 90, 65 90, 70 75 C75 55, 70 35, 65 15 Z" fill="#E11D48"/>
                <path d="M38 30 C30 45, 30 65, 36 78 C42 60, 42 45, 38 30 Z" fill="#2563EB"/>
                <path d="M62 30 C70 45, 70 65, 64 78 C58 60, 58 45, 62 30 Z" fill="#2563EB"/>

                <!-- Web Patterns on Chest -->
                <path d="M50 15 L50 78 M35 35 Q50 45 65 35 M30 55 Q50 65 70 55" stroke="#1E293B" stroke-width="2"/>
                <!-- Spider Chest Emblem -->
                <ellipse cx="50" cy="50" rx="3" ry="5" fill="#0F172A"/>
                <path d="M48 48 Q40 40 38 35 M52 48 Q60 40 62 35 M48 52 Q40 60 36 68 M52 52 Q60 60 64 68" stroke="#0F172A" stroke-width="2" stroke-linecap="round"/>

                <!-- Head (Upside Down, so chin is upwards, crown is downwards) -->
                <ellipse cx="50" cy="98" rx="22" ry="25" fill="#E11D48"/>
                <!-- Head Web Grid -->
                <path d="M50 75 L50 120 M32 90 Q50 98 68 90 M30 105 Q50 115 70 105 M38 80 Q50 88 62 80" stroke="#1E293B" stroke-width="1.8"/>
                
                <!-- Expressive White Eyes with Thick Black Outline -->
                <!-- Left Eye -->
                <path d="M34 94 Q40 85 46 95 Q42 108 34 94 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
                <!-- Right Eye -->
                <path d="M66 94 Q60 85 54 95 Q58 108 66 94 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>

                <!-- Upside Down Hanging Hands Holding Web -->
                <ellipse cx="42" cy="12" rx="5" ry="6" fill="#E11D48"/>
                <ellipse cx="58" cy="12" rx="5" ry="6" fill="#E11D48"/>
            </svg>
        </div>
    `;

    document.body.appendChild(container);

    const spideyBody = container.querySelector('#spiderman-body');
    const dialogue = container.querySelector('#spidey-dialogue');
    const dialogueText = container.querySelector('#spidey-text');

    const quotes = [
        "With great code comes great responsibility! 🕸️",
        "Hey Azizaac! Your cosmic portfolio looks sick! 🔥",
        "Watch out! Bug detected... just kidding, clean code! 🐞",
        "Ready to swing into the next big project? 🚀",
        "Full-Stack spider senses are tingling! ⚡",
        "Need a hero developer? You're looking at his site! 😎"
    ];

    let qIdx = 0;
    let isSwinging = false;

    container.addEventListener('click', () => {
        // Trigger swing bounce animation
        if (!isSwinging) {
            isSwinging = true;
            spideyBody.classList.add('animate-spideySwing');
            setTimeout(() => {
                spideyBody.classList.remove('animate-spideySwing');
                isSwinging = false;
            }, 1200);
        }

        // Cycle quote
        qIdx = (qIdx + 1) % quotes.length;
        dialogueText.textContent = quotes[qIdx];

        // Show dialogue
        dialogue.classList.remove('opacity-0', 'pointer-events-none', 'scale-90');
        dialogue.classList.add('opacity-100', 'scale-100');

        setTimeout(() => {
            dialogue.classList.remove('opacity-100', 'scale-100');
            dialogue.classList.add('opacity-0', 'pointer-events-none', 'scale-90');
        }, 3500);
    });

    container.addEventListener('mouseenter', () => {
        dialogue.classList.remove('opacity-0', 'pointer-events-none', 'scale-90');
        dialogue.classList.add('opacity-100', 'scale-100');
    });

    container.addEventListener('mouseleave', () => {
        dialogue.classList.remove('opacity-100', 'scale-100');
        dialogue.classList.add('opacity-0', 'pointer-events-none', 'scale-90');
    });
}
