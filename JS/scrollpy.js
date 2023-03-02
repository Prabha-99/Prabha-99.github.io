$(document).ready(function() {
    // Activate scrollspy on body element
    $('body').scrollspy({
      target: '.navbar',
      offset: 100
    });
  
    // Add smooth scrolling on all links inside the navbar
    $('.navbar a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
  
    // Change navbar color on scroll
    $(window).scroll(function() {
      if ($('.navbar').offset().top > 100) {
        $('.navbar').addClass('scroll');
      } else {
        $('.navbar').removeClass('scroll');
      }
    });
  });
  