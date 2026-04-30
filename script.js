function showMessage() {
    document.getElementById("msg").innerText =
        "Thanks for supporting the campaign!";
}

// smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// fade-in on scroll
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});
