const FADE_TITLE = 25/100;  // percent of screen

$(window).scroll( function() {
    if ( $(window).scrollTop() < $( window ).height() * FADE_TITLE ) {
        $(".title").fadeIn();
    } else {
        $(".title").fadeOut();
    }
} );

