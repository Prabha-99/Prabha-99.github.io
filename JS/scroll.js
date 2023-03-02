var navbar = document.getElementById("navbar");
  var navbarHeight = 700;

  window.onscroll = function() {
    if (window.pageYOffset > navbarHeight) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-dark");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.add("bg-transparent");
    }
  };