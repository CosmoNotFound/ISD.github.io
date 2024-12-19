// Scroll fade-in animations
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.classList.add("fade-in");
        }
    });
});
