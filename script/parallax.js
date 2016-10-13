const FADE_TITLE = 25/100;  // percent of screen
const CHANGE_MENU = 62/100;

$(window).scroll(
    function() {
        var scrollTop = $( window ).scrollTop()
        var windowHeight = $( window ).height()

        if ( scrollTop < windowHeight * FADE_TITLE ) {
            $(".title").fadeIn(100);
        } else {
            $(".title").fadeOut(500);
        }

        if ( scrollTop < windowHeight * CHANGE_MENU ) {
            $(".menu").css("background-color","rgba(0, 0, 0, .25)");
        } else {
            $(".menu").css("background-color","#3E4040");
        }
    }
);
