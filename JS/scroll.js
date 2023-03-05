var navbar = document.getElementById("navbar");
var brand =document.getElementById("brand");
var navLinks = document.querySelectorAll(".nav-link"); // select all nav-link elements

  var navbarHeight = 644;

  window.onscroll = function() {
    if (window.pageYOffset > navbarHeight) {
      navbar.classList.remove("bg-transparent"); //Removing the Transparency when scrolling down
      navbar.style.backgroundColor = "#332D2D"; //Setting background color of navbar when scrolling down
      brand.style.color="#9754CB"; //Change the nav-brand color when scrolling to down

      // Updating the color of all nav-links to white when scrolls down.
        for(var i=0; i<navLinks.length; i++) {
            navLinks[i].style.color = "#9754CB";
        }
      
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-transparent");
      brand.style.color="#9754CB";
      
      // Updating the color of all nav-links to their original color
        for(var i=0; i<navLinks.length; i++) {
            navLinks[i].style.color = "";
        }
      
    }
  };
