// Array of texts to display
const texts = [
    'BallsyG!',
    'BallsyG for justice!',
    'A dozen a dime',
    'BallsyG, the newest concrete type!',
    'GitHub is unblocked on FortiGuard I think',
    'BallsyG is unblocke',
    'BallsyG can kill 2 stones with 1 bird',
    'Promote BallsyG to your friends and people you know',
    'Become a pupil of BallsyG',
    'BallsyG is going to take over the world',
    'Insurance fraud',
    'When BallsyG wants an egg he usually cracks open a chicken.',
    'Communism'
];

// Initial index for rotating text
let index = 0;

// Function to change text every 2.5 seconds (faster than before)
function changeText() {
    document.getElementById('text-display').innerText = texts[index];
    index = (index + 1) % texts.length; // Loop back to start when the end is reached
}

// Call the function every 2.5 seconds (2500 milliseconds)
changeText(); // Initial call to show the first text immediately
setInterval(changeText, 2500); // Change every 2.5 seconds

