// Efeito de diminuir logo ao rolar a página
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
