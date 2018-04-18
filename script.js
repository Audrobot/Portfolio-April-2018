$(document).ready(function(){  
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 0
          }, 650, function() {
        });
      }
    }
  });
});

$(document).ready(function(){

  $(window).scroll(function(){
      if ($(window).scrollTop() > 100) {
          $('#scroll').fadeIn('slow');
      } else {
          $('#scroll').fadeOut('slow');
      }
  });

  $('#scroll').click(function(){
      $("html, body").animate({scrollTop : 0},1);
      return false;
  });

});
 
  