// Function to fetch a random image
function fetchRandomImage() {
    const imgElement = document.getElementById("randomImage");
    
    // Use Unsplash random image API (this returns random image URLs)
    const imageUrl = "https://picsum.photos/300";
    
    // Set the image source to the fetched URL
    imgElement.src = imageUrl;
  }
  
  // Run the function when the popup is opened
  document.addEventListener('DOMContentLoaded', fetchRandomImage);
  