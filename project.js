document.querySelectorAll(".slider").forEach((slider) => {
    const slides = slider.querySelector(".slides");
    const slideItems = slider.querySelectorAll(".slide");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
    const dotsContainer = slider.querySelector(".dots");

    if (!slides || slideItems.length === 0 || !prevBtn || !nextBtn || !dotsContainer) {
        return;
    }

    let index = 0;

    slideItems.forEach((_, dotIndex) => {
        const dot = document.createElement("button");
        dot.type = "button";
        if (dotIndex === 0) dot.classList.add("active");
        dot.addEventListener("click", () => showSlide(dotIndex));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("button");

    function showSlide(nextIndex) {
        if (nextIndex >= slideItems.length) index = 0;
        else if (nextIndex < 0) index = slideItems.length - 1;
        else index = nextIndex;

        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => showSlide(index + 1));
    prevBtn.addEventListener("click", () => showSlide(index - 1));
    setInterval(() => showSlide(index + 1), 4500);
});
