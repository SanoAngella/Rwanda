 const slides = document.querySelector(".slides");
        const slideItems = document.querySelectorAll(".slide");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const dotsContainer = document.querySelector(".dots");

        let index = 0;
        const totalSlides = slideItems.length;

        // Create dots dynamically
        slideItems.forEach((_, i) => {
            const dot = document.createElement("button");
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        });
        const dots = dotsContainer.querySelectorAll("button");

        function showSlide(i) {
            if (i >= totalSlides) index = 0;
            else if (i < 0) index = totalSlides - 1;
            else index = i;

            slides.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        }

        nextBtn.addEventListener("click", () => showSlide(index + 1));
        prevBtn.addEventListener("click", () => showSlide(index - 1));

        // Auto slide every 4 seconds
        setInterval(() => showSlide(index + 1), 4000);