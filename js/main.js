const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('hidden') === false;
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', false);
    menuBtn.querySelector('i').className = 'fas fa-bars';
}));

// Reveal on scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active nav link
const links = document.querySelectorAll('#navLinks .nav-link');
const spy = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(s => spy.observe(s));

// Typed role
(function typed() {
    const el = document.getElementById('typed');
    const roles = ['AI Engineer', 'LLMOps Engineer', 'Agent Builder', 'RAG & Kubernetes'];
    if (reduceMotion) { el.textContent = 'AI Engineer // LLMOps Engineer'; return }
    let r = 0, i = roles[0].length, del = true;
    setTimeout(function tick() {
        const word = roles[r];
        i += del ? -1 : 1;
        el.textContent = word.slice(0, i);
        let wait = del ? 45 : 85;
        if (!del && i === word.length) { del = true; wait = 2200 }
        else if (del && i === 0) { del = false; r = (r + 1) % roles.length; wait = 300 }
        setTimeout(tick, wait);
    }, 2200);
})();

// Project spotlight
document.querySelectorAll('.project').forEach(card => card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));

// Project filters
const filterBtns = document.querySelectorAll('#filters .filter-btn');
filterBtns.forEach(btn => btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('#projects .project').forEach(p => {
        p.classList.toggle('is-hidden', f !== 'all' && p.dataset.cat !== f);
        p.classList.add('in');
    });
}));

// Liens vers un projet masqué par le filtre : on réaffiche tout
document.querySelectorAll('a[href^="#p-"]').forEach(a => a.addEventListener('click', () => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target && target.classList.contains('is-hidden')) filterBtns[0].click();
}));

// Copy email
const copyBtn = document.getElementById('copyEmail');
copyBtn.addEventListener('click', async () => {
    const label = copyBtn.querySelector('span').firstChild;
    const L = (fr, en) => currentLang === 'en' ? en : fr;
    try {
        await navigator.clipboard.writeText('yvesloic58@gmail.com');
        label.nodeValue = L('Copié !', 'Copied!');
        copyBtn.querySelector('i').className = 'fas fa-check text-emerald-400';
    } catch (e) {
        label.nodeValue = 'yvesloic58@gmail.com';
    }
    setTimeout(() => {
        applyLang(currentLang);
        copyBtn.querySelector('i').className = 'far fa-copy';
    }, 2000);
});
