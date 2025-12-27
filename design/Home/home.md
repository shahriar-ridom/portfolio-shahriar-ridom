<!DOCTYPE html>
<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shahriar Ridom - Fullstack Web Developer</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#3c83f6",
                        "deep-space": "#050505",
                        "text-main": "#EDEDED",
                        "background-light": "#f5f7f8",
                        "background-dark": "#050505",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"],
                        "mono": ["JetBrains Mono", "monospace"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal',
                    },
                    keyframes: {
                        typewriter: {
                            'from': { width: '0' },
                            'to': { width: '100%' }
                        },
                        blinkTextCursor: {
                            'from': { borderRightColor: 'rgba(60, 131, 246, 0.75)' },
                            'to': { borderRightColor: 'transparent' }
                        }
                    }
                },
            },
        }
    </script>
<style>
        .bg-noise {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 50;
            opacity: 0.05;
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhvy0LQOn5qr07r0tPM1XjKW50oxuRW7YHK7-AnwH3Kqx9gy_fwbnTzhHkarKAS3OtDt0SAItN7hfBDEQyzxFAXwnPygbnbXZgQj9SFvIjD3cIwUJBRUpPZeH-e8WrdM91N4Iu5LQzvQGqOSJiEtnm9u2i-TG-GrNr1eWGk-O36qnfovb2RDHy6ZKIMNYw_yvxPHJJzQ-bbe9TIn5zDLMfLcZSo9_Hc9X4xUVdN3gfREjwLdcqugEEQR-3bgehejqzitGz_NrPzJ5f');
        }
        .hero-glow {
            background: radial-gradient(circle at 50% 50%, rgba(60, 131, 246, 0.15), transparent 60%);
            position: absolute;
            width: 100vw;
            height: 100vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            pointer-events: none;
        }
        .typewriter-text {
            overflow: hidden;
            border-right: 0.15em solid #3c83f6;
            white-space: nowrap;
            margin: 0;
            animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing {
            from { width: 0 }
            to { width: 100% }
        }
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #3c83f6; }
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-x-hidden transition-colors duration-300">
<div class="bg-noise"></div>
<div class="relative flex h-screen min-h-[700px] w-full flex-col p-6 md:p-10 z-10">
<div class="hero-glow"></div>
<nav class="relative w-full max-w-[1400px] mx-auto flex items-center justify-between z-20 mb-8 md:mb-12">
<div class="flex items-center gap-2 select-none group cursor-pointer">
<div class="flex items-center justify-center size-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-primary/50 transition-colors">
<span class="font-bold text-white tracking-tighter">SR</span>
</div>
</div>
<div class="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
<a class="px-5 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#">Work</a>
<a class="px-5 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#">About</a>
<a class="px-5 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#">Contact</a>
</div>
<div class="w-10 flex items-center justify-end">
<button class="md:hidden text-white/70 hover:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<main class="relative flex flex-col md:flex-row items-center justify-center flex-1 w-full max-w-[1400px] mx-auto z-20 gap-8 lg:gap-16">
<div class="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative group rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-white/5">
<div class="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent z-10 opacity-60"></div>
<img alt="Shahriar Ridom" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBaQGw1e5sPQqEGKdgPAUOJhZnCZb2AOnBUh7yHcGDbAH-QZYCnIPjljyvVDhgPy55sW5_KPyNmArlZSB00-3KsLt3w3BvOifdBgyfUjrDK7YNWV0zKmEc0Jjjkd06S7k1dcchu9hEPrvvFNMEJeXw6kS43JGafck6xesXghzZMGiADKVrzxJuQUJz3Ci6_ugh5Jt32OLzPldStDMcetvMP8R7dh8GmkUrnOUso9WzXjLC79I_0UjWQq260ZcDLS9uKKiQYEY_RBZe"/>
<div class="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span class="text-xs font-mono text-white/90">Available for hire</span>
</div>
</div>
<div class="w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 md:pl-4">
<div class="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-2">
<span class="w-8 h-[1px] bg-primary"></span>
<span>Portfolio 2024</span>
</div>
<h1 class="font-display font-extrabold text-text-main leading-[0.9] tracking-tighter text-[clamp(3rem,6vw,6rem)]">
                    SHAHRIAR<br/> RIDOM
                </h1>
<div class="h-8 md:h-10 flex items-center">
<div class="typewriter-text font-mono text-primary text-lg md:text-2xl tracking-wide">
                        FULLSTACK WEB DEVELOPER
                    </div>
</div>
<p class="max-w-md text-base text-white/50 font-light tracking-wide leading-relaxed">
                    Crafting immersive digital experiences in deep space. I build robust, scalable applications that merge aesthetic precision with powerful functionality.
                </p>
<div class="flex flex-wrap gap-4 pt-4">
<a class="group relative px-8 py-3 bg-primary text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(60,131,246,0.4)]" href="#">
<span class="relative z-10 flex items-center gap-2">
                            See My Work
                            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
<div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<a class="px-8 py-3 border border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-colors" href="#">
                        Contact Me
                    </a>
</div>
<div class="pt-8 flex items-center gap-6">
<div class="flex -space-x-3">
<div class="w-10 h-10 rounded-full bg-white/10 border border-deep-space flex items-center justify-center text-xs">JS</div>
<div class="w-10 h-10 rounded-full bg-white/10 border border-deep-space flex items-center justify-center text-xs">TS</div>
<div class="w-10 h-10 rounded-full bg-white/10 border border-deep-space flex items-center justify-center text-xs">RC</div>
</div>
<div class="h-px w-12 bg-white/10"></div>
<span class="text-xs text-white/30 font-mono">TECH STACK</span>
</div>
</div>
</main>
<div class="relative z-20 w-full flex justify-center pb-4 pt-8 md:pt-0">
<div class="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
<span class="text-[10px] uppercase tracking-[0.2em] text-white/50 group-hover:text-primary transition-colors">Scroll to Explore</span>
<div class="flex items-center justify-center w-6 h-10 border-2 border-white/20 rounded-full group-hover:border-primary/50 transition-colors">
<div class="w-1 h-2 bg-primary rounded-full animate-bounce mt-1"></div>
</div>
</div>
</div>
</div>
<script>
        document.addEventListener('mousemove', (e) => {
            const glow = document.querySelector('.hero-glow');
            const x = e.clientX;
            const y = e.clientY;
            // Subtle parallax effect on the glow
            const moveX = (x - window.innerWidth / 2) * 0.05;
            const moveY = (y - window.innerHeight / 2) * 0.05;
            glow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });
    </script>

</body></html>
