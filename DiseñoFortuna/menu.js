        // Menú lateral responsive para móviles
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

if (menuBtn && sideNav) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sideNav.classList.toggle('open');
    });
    // Cierra el menú al hacer click en un enlace
    sideNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('open');
        });
    });
    // Cierra el menú al hacer click fuera de él
    document.addEventListener('click', (e) => {
        if (sideNav.classList.contains('open')) {
            if (!sideNav.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
                sideNav.classList.remove('open');
            }
        }
    });
    }

    function toggleFilter(id) {
        const el = document.getElementById(id);
        el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }