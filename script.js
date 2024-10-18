const texts = ['ballsyg', 'Discover Amazing Content', 'justice'];

let currentTextIndex = 0;

function changeText() {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    document.getElementById('changingText').textContent = texts[currentTextIndex];
}

// Change text every 20 seconds
setInterval(changeText, 20000);
