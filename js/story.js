// Story : 5 actes en boucle (le CSS pilote tout via data-act)
(function story() {
    const root = document.getElementById('story');
    if (!root) return;
    const dots = root.querySelectorAll('.story-dot');
    const DUR = [5200, 6600, 6200, 5600, 8200];
    let act = 0, timer = null, visible = false;
    const mark = n => dots.forEach(d => d.classList.toggle('active', +d.dataset.act === n));
    function set(n) { act = n; root.dataset.act = n; mark(n) }
    function snapTo(n) {
        // repart d'un état neutre (client hors-champ, robot démonté) sans transition
        root.classList.add('reset');
        root.dataset.act = 0;
        void root.offsetWidth;
        root.classList.remove('reset');
        requestAnimationFrame(() => set(n));
    }
    function schedule() { clearTimeout(timer); if (visible) timer = setTimeout(advance, DUR[act - 1]) }
    function advance() { act === 5 ? snapTo(1) : set(act + 1); schedule() }
    dots.forEach(d => d.addEventListener('click', () => {
        const n = +d.dataset.act;
        n < act ? snapTo(n) : set(n);
        schedule();
    }));
    if (reduceMotion) { root.classList.add('static'); set(5); return }
    new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible && !act) snapTo(1);
        schedule();
    }, { threshold: 0.25 }).observe(root);
})();
