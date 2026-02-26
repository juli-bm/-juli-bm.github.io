// Sélectionne les éléments
const burgerMenu = document.getElementById("burger-menu");
const menuPrincipal = document.querySelector(".menu-principal");

// Ouvrir/Fermer le menu lorsque le bouton burger est cliqué
burgerMenu.addEventListener("click", () => {
    menuPrincipal.classList.toggle("active");
});

// Fermer le menu lorsque la souris quitte le menu
menuPrincipal.addEventListener("mouseleave", () => {
    menuPrincipal.classList.remove("active");
});
