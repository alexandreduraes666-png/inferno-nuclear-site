// LOGO SHRINK EFFECT
window.addEventListener("scroll", function() {
    let header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
