document.addEventListener('DOMContentLoaded', () => {
    const operationCards = document.querySelectorAll('.operation-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        },
        { threshold: 0.1 }
    );
    operationCards.forEach(card => observer.observe(card));
});
