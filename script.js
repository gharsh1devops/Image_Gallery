const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

let currentIndex = 0;

galleryItems.forEach((item, index) => {

    item.addEventListener("click", function () {

        const image = item.querySelector("img");

        lightboxImg.src = image.src;

        currentIndex = index;

        lightbox.classList.add("show");
    });

});
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(index) {
    const image = galleryItems[index].querySelector("img");
    lightboxImg.src = image.src;
    currentIndex = index;
}

closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("show");
});

nextBtn.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
});

prevBtn.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    }

    showImage(currentIndex);
});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        galleryItems.forEach(item => {

            const category = item.dataset.category;

            if (filter === "all" || category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextBtn.click();
    }

    if (event.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (event.key === "Escape") {
        closeBtn.click();
    }

});