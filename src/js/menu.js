$(document).ready(function(){

  var menu = $('.ontop');


    // if ($(window).width() < 767){
    // 	menu.addClass('fullbg');
    // }

  $(window).scroll(function () {
    var y = $(this).scrollTop();
    var z = $('.scrolltrigger').offset().top - 72;

    if (y > z) {
        menu.removeClass('opbg').addClass('fullbg');
    }
    else{
        menu.removeClass('fullbg').addClass('opbg');
    }
  });

  function scrollToElement(link,dest){
    $(link).click(function() {
      $('html, body').animate({
          scrollTop: $(dest).offset().top - 70
      }, 750);
    });
  }

  scrollToElement("#portfoliolink", "#portfolio");
  scrollToElement("#aboutlink","#about");
  scrollToElement("#logolink","#header");
  scrollToElement("#whatwedolink","#whatwedo");
  scrollToElement("#contactlink","#contact");




});
