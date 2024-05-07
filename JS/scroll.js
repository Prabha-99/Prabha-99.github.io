var navbar = document.getElementById("navbar");
var brand =document.getElementById("brand");
var navLinks = document.querySelectorAll(".nav-link"); // select all nav-link elements

  var navbarHeight = 144;

  window.onscroll = function() {
    if (window.pageYOffset > navbarHeight) {
      navbar.classList.remove("bg-transparent"); //Removing the Transparency when scrolling down
      navbar.style.backgroundColor = "#333B60"; //Setting background color of navbar when scrolling down
      brand.style.color="#ffffff"; //Change the nav-brand color when scrolling to down


      // Updating the color of all nav-links to white when scrolls down.
        for(var i=0; i<navLinks.length; i++) {
            navLinks[i].style.color = "#ffffff";
        }
      
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-transparent");
      brand.style.color="#ffffff";
      
      // Updating the color of all nav-links to their original color
        for(var i=0; i<navLinks.length; i++) {
            navLinks[i].style.color = "";
        }
      
    }
  };


  
      var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);

