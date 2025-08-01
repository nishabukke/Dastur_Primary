// Lightbox modalGallery
const body = document.body;
const items = document.querySelectorAll(".gallery__item");
const modalGallery = document.createElement("section");
const modalImg = document.createElement("img");
const modalPrev = createButton(prevItem);
const modalNext = createButton(nextItem);
const modalClose = createButton(closeModal);
let currentItem = 0;

modalGallery.classList.add("gallery__modal");
modalPrev.classList.add("gallery__navigation--prev");
modalNext.classList.add("gallery__navigation--next");
modalClose.classList.add("gallery__navigation--close");

function createButton(action) {
    const button = document.createElement("button");
    button.addEventListener("click", action);
    return button;
}

function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    showModal();
}

function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showModal();
}

function closeModal() {
    modalGallery.remove();
    body.classList.remove('noscroll'); // Ensure scrolling is enabled
}

function showModal() {
    const clickedImage = items[currentItem].querySelector("img");
    modalImg.src = clickedImage.src;
    modalImg.alt = clickedImage.alt;
    modalGallery.innerHTML = ''; // Clear the modalGallery content
    modalGallery.append(modalImg, modalPrev, modalNext, modalClose);
    body.appendChild(modalGallery);
}

// Attach click event to each gallery item
items.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentItem = index; // Set the clicked image index
        showModal();
        body.classList.add('noscroll'); // Disable scrolling when modalGallery is open
    });
});

// Close modalGallery with Escape key
document.body.addEventListener('keyup', (ev) => {
    if (ev.key === "Escape" && body.contains(modalGallery)) {
        closeModal();
    }
});

// Hover functionality for image captions
items.forEach((item) => {
    const img = item.querySelector("img");
    const caption = item.querySelector(".gallery__image__caption");

    item.addEventListener("mouseenter", () => {
        caption.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
        caption.style.opacity = "0";
    });
});
