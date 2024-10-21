// Array of texts to display
const texts = [
    'BallsyG!',
    'BallsyG for justice!',
    'A dozen a dime',
    'BallsyG, the newest concrete type!',
    'GitHub is unblocked on FortiGuard I think',
    'BallsyG is unblocke'
];

// Initial index for rotating text
let index = 0;

// Function to change text every 3 seconds (faster than before)
function changeText() {
    document.getElementById('text-display').innerText = texts[index];
    index = (index + 1) % texts.length; // Loop back to start when the end is reached
}

// Call the function every 3 seconds (3000 milliseconds)
changeText(); // Initial call to show the first text immediately
setInterval(changeText, 3000); // Change every 3 seconds
