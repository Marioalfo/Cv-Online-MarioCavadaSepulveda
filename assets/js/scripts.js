document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    const setTheme = (isDark) => {
        if (isDark) {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
            localStorage.theme = 'dark';
            themeIcon.textContent = 'light_mode';
            themeIcon.style.transform = 'rotate(180deg)';
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            localStorage.theme = 'light';
            themeIcon.textContent = 'dark_mode';
            themeIcon.style.transform = 'rotate(0deg)';
        }
    };

    // Check initial theme preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Toggle theme on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            setTheme(!htmlElement.classList.contains('dark'));
        });
    }

    // Navbar hide/show on scroll
    const mainNav = document.getElementById('main-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 64) {
            // Scrolling down - hide navbar
            mainNav.classList.add('-translate-y-full');
        } else {
            // Scrolling up - show navbar
            mainNav.classList.remove('-translate-y-full');
        }
        lastScrollY = currentScrollY;
    });

    // Mouse tracking spotlight effect
    const pointerGlow = document.getElementById('pointer-glow');
    document.addEventListener('mousemove', (e) => {
        if (!pointerGlow) return;
        const x = e.clientX;
        const y = e.clientY;
        const isDark = document.documentElement.classList.contains('dark');
        const color = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';
        pointerGlow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, ${color}, transparent 40%)`;
    });

    // Volunteering carousels (multiple photos per job)
    document.querySelectorAll('[data-carousel]').forEach((carousel) => {
        const track = carousel.querySelector('.carousel-track');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const total = slides.length;
        let index = 0;

        const update = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('opacity-100', i === index);
                dot.classList.toggle('opacity-40', i !== index);
            });
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                index = (index - 1 + total) % total;
                update();
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                index = (index + 1) % total;
                update();
            });
        }
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                index = i;
                update();
            });
        });
    });
});