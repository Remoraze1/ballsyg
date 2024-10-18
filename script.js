const images = ['egg.jpg', 'ussr.jpg', 'pumkin.jpeg']; // List your images here
const texts = ['ballsyg', 'Discover Amazing Content', 'justice'];

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


