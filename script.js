const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // List your images here
const texts = ['Welcome to the Website', 'Discover Amazing Content', 'Stay Tuned for More'];

let currentImageIndex = 0;
let currentTextIndex = 0;

function changeImageAndText() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    currentTextIndex = (currentTextIndex + 1) % texts.length;

    document.getElementById('backgroundImage').src = images[currentImageIndex];
    document.getElementById('changingText').textContent = texts[currentTextIndex];
}

// Change image and text every 20 seconds
setInterval(changeImageAndText, 20000);

