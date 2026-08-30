import { menu, btn, toggleMenu } from "./Header.astro.0.mts";

// Ocultar al hacer clic fuera del menú
document.addEventListener('click', (e) => {
if (window.innerWidth < 768) {
const isClickInsideMenu = menu?.contains(e.target);
const isClickOnButton = btn?.contains(e.target);

// Si el clic es afuera y el menú está visible (opacidad 100)
if (!isClickInsideMenu && !isClickOnButton && menu?.classList.contains('opacity-100')) {
toggleMenu();
}
}
});
