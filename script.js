const faqEl = document.querySelectorAll('.question');

faqEl.forEach(faqEl => {
    faqEl.addEventListener("click", () => {
        faqEl.classList.toggle("active")
    })
})