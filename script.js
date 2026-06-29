// Gallery Image Slider

const images = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg"
];

let currentImage = 0;

const slide = document.getElementById("slide");

function changeImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    slide.src = images[currentImage];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);