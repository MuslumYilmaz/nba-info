const links = document.querySelectorAll('.scroll-to');

links.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveState();
        item.classList.add("active");
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});

function removeActiveState() {
    links.forEach(l => l.classList.remove("active"));
}