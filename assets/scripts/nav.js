document.addEventListener('DOMContentLoaded', function() {
    // Select both the mobile and desktop request demo buttons
    const demoButtons = document.querySelectorAll('.request-demo');
  
    demoButtons.forEach(function(button) {
      // When hover starts (mouseenter), change the background color to turquoise and text color to black
      button.addEventListener('mouseenter', function() {
        button.style.backgroundColor = 'turquoise'; // Set background to turquoise
        button.style.color = 'black'; // Set text color to black
      });
  
      // When hover ends (mouseleave), revert the background and text color back to its original state
      button.addEventListener('mouseleave', function() {
        button.style.backgroundColor = ''; // Reset background to the original color defined in CSS
        button.style.color = ''; // Reset text color to the original state
      });
    });
});
  