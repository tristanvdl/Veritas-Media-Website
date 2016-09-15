$(document).ready(function(){

    var menu = $('.ontop');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.portfolio_trigger').offset().top - 72;

        if (y > z) {
            menu.removeClass('opbg').addClass('fullbg');
        }
        else{
            menu.removeClass('fullbg').addClass('opbg');
        }

        function setClass(trigger, trigger2, menuitem) {
            var scroll = $(this).scrollTop();
            var elpos = $(trigger).offset().top - 72;
            var nextel = $(trigger2).offset().top - 80;
            var elmenu = $(menuitem);

            if (scroll > elpos && scroll < nextel) {
                elmenu.addClass('active_link');
            }else {
                elmenu.removeClass('active_link')
            }
        }

        setClass('.portfolio_trigger','.what_trigger','.portfolio_item');
        setClass('.what_trigger','.about_trigger','.what_item');
        setClass('.about_trigger','.contact_trigger','.about_item');
        setClass('.contact_trigger','.footer_trigger','.contact_item');

    });

    function scrollToElement(link,dest){
        $(link).click(function() {
            $('html, body').animate({
                scrollTop: $(dest).offset().top - 50
            }, 750);
        });
    }


    scrollToElement("#portfoliolink", "#portfolio");
    scrollToElement("#aboutlink","#about");
    scrollToElement("#logolink","#header");
    scrollToElement("#whatwedolink","#what");
    scrollToElement("#contactlink","#contact");




});
