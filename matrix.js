// Initializing the canvas
var canvas = document.querySelector('canvas'); // Select the canvas element
var ctx = canvas.getContext('2d');             // Get 2D drawing context

// Setting canvas dimensions based on window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters to display (feel free to customize)
var letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
letters = letters.split('');

// Number of character columns
var columns = Math.floor(canvas.width / fontSize); // Dynamically calculate columns

// Array to store character drop positions
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;  // Initialize all drops near the top (y-coordinate)
}

// Font size (adjust for desired character size)
var fontSize = 14;

// Animation function
function draw() {
  // Clear the canvas with a semi-transparent black background
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Loop through each character column
  for (var i = 0; i < drops.length; i++) {
    // Choose a random character from the letters array
    var text = letters[Math.floor(Math.random() * letters.length)];

    // Set drawing style (color, font)
    ctx.fillStyle = '#0f0';  // Green color (adjust for preference)
    ctx.font = fontSize + 'px Arial';

    // Draw the character at the current column and drop position
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Update the drop position (simulate falling)
    drops[i]++;

    // Reset the drop position if it goes off-screen and randomly trigger a new drop
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

// Call the draw function repeatedly to create the animation
setInterval(draw, 33); // Update every 33 milliseconds (adjust for speed)
