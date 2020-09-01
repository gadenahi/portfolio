$(document).ready(function () {
    var DELAY_SPEED = 100;
    var FADE_SPEED = 500;
    var str = [];
    $('#welcome-section > span').each(function (i) {
        $(this).css('opacity', '1');
        str[i] = $(this).text();
        $(this).text('');
        var no = i;
        var self = this;
        var interval = setInterval(function () {
            if (no == 0 || $('#welcome-section > span').eq(no - 1).children('span:last').css('opacity') == 1) {
                clearInterval(interval);
                for (var j = 0; j < str[no].length; j++) {
                    $(self).append('<span>' + str[no].substr(j, 1) + '</span>');
                    $(self).children('span:last').delay(DELAY_SPEED * j).animate({ opacity: '1' }, FADE_SPEED);
                }
                $(self).append('</br></br>');
            }
        }, 50);
    });

    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    })

});

var animation = {
    delay: 200,
    distance: '200px',
    origin: 'bottom'
};
$(function () {
    ScrollReveal({ reset: true, moblie: true }).reveal('.fadeIn', animation);
})


