// Get the button element
var button = document.getElementById('changeColorButton');

// Add event listener for button click
button.addEventListener('click', function() {
  // Generate random RGB color values
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Set the random color as the background color of the page
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});
