const FADE_TITLE = 30/100;  // percent of screen
const CHANGE_MENU = 60/100;

const default_color = .35;

const header_height = 70/100;
const header_height_absolute = 90/100;



$( window ).scroll(function() {

        var scrollTop = $( window ).scrollTop();
        var windowHeight = $( window ).height();

        $('.title').css({'opacity': ( windowHeight * FADE_TITLE - scrollTop ) / 100});

        $('.menu').css({'background-color': 'rgba(62,64,64, ' + (Math.max((scrollTop - windowHeight * CHANGE_MENU)/100*2, 0) + default_color)  +')'});

        var bottom = -(header_height_absolute*windowHeight - header_height*windowHeight);

        var pageOffsetMax = header_height*windowHeight;
        var pageOffsetPercent = scrollTop/(pageOffsetMax - 0);

        $('img').css({'top': (0 - windowHeight - bottom) * pageOffsetPercent});

});