 $('#main-nav').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 700)
     {
        $('#main-nav').fadeIn();
     }
    else
     {
      $('#main-nav').fadeOut();
     }
 });