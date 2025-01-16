//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega
//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega

document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".animate-title");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("animate");
                    void entry.target.offsetWidth;
                    entry.target.classList.add("animate");
                }
            });
        },
        {
            threshold: 0.5, 
        }
    );

    titles.forEach((title) => {
        observer.observe(title);
    });
});