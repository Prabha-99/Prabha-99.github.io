var navbar = document.getElementById("navbar");
var brand =document.getElementById("brand");
  var navbarHeight = 644;

  window.onscroll = function() {
    if (window.pageYOffset > navbarHeight) {
      navbar.classList.remove("bg-transparent");
      navbar.style.backgroundColor = "#322c23";
      // navbar.classList.add("bg-dark");
      brand.style.color="#ffd900";
      
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-transparent");
      brand.style.color="#322c23";
      
    }
  };