document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById("para");
    
    const texts = [
      "From Sweet Cake to Crunchy Snacks",
      "From icy cold ice-cream to hot Biriyani",
      "From Chinese to Bengali"
    ];
    
    let currentIndex = 0;
    
    function changeText() {
      paragraph.textContent = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
      
      setTimeout(changeText, 3000);
    }
    
    // Start the cycle
    changeText();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("myElement");
    
    const images = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg"
    ];
    
    let currentIndex = 0;
    
    function changeBackground() {
      element.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
      
      setTimeout(changeBackground, 2000); // Change every 5 seconds
    }
    
    // Start the cycle
    changeBackground();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const imageList = document.querySelectorAll(".item");
    const popupImage = document.getElementById("popupImage");
    const popup = document.querySelector(".popup");
    
    imageList.forEach(function(li) {
      li.addEventListener("click", function() {
        const imagePath = li.getAttribute("data-image");
        const price = li.getAttribute("data-price");
        
        popupImage.src = imagePath;
        popupPrice.textContent = price;
        
        popup.style.display = "flex";
      });
    });
    
    popup.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });

  
  
  
  