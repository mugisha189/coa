// script.js

// Get the modal
const modal = document.getElementById("modal");

// Get the image and insert it inside the modal
const fullImage = document.getElementById("fullImage");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Add click event listener to each gallery item
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    // Get the full-size image URL from the data-full attribute
    const fullImageUrl = this.getAttribute('data-full');
    
    // Display the modal
    modal.style.display = "block";
    
    // Set the src of the full-size image
    fullImage.src = fullImageUrl;
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
