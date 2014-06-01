$(function() {
    // new WOW().init();

    var heartDisplayed, bookDisplayed, creativityDisplayed = false,
        heartOptions = {
            duration: 1000,
            toValue: 30,
            onStep: function(now, fx) {
                $('.js-heartNumbers.animated').find('.js-number').append('%');
                $('.js-heartNumbers.animated').find('.js-indicator').css({
                    'height': now + '%'
                });
            }
        },
        bookOptions = {
            duration: 1000,
            toValue: 48,
            onStep: function(now, fx) {
                $('.js-bookNumbers.animated').find('.js-number').append('%');
                $('.js-bookNumbers.animated').find('.js-indicator').css({
                    'height': now + '%'
                });
            }
        },
        creativityOptions = {
            duration: 1000,
            toValue: 75,
            onStep: function(now, fx) {
                $('.js-creativityNumbers.animated').find('.js-number').append('%');
                $('.js-creativityNumbers.animated').find('.js-indicator').css({
                    'height': now + '%'
                });
            }
        };
    $(document).on('scroll', function(event) {
        // heart
        if ($('.js-heartNumbers.animated').length !== 0 && !heartDisplayed) {
            heartDisplayed = true;
            setTimeout(function() {
                $('.js-heartNumbers.animated').find('.js-number').numerator(heartOptions);
            }, 300);
        }
        // book
        if ($('.js-bookNumbers.animated').length !== 0 && !bookDisplayed) {
            bookDisplayed = true;
            setTimeout(function() {
                $('.js-bookNumbers.animated').find('.js-number').numerator(bookOptions);
            }, 1000);
        }
        // creativity
        if ($('.js-creativityNumbers.animated').length !== 0 && !creativityDisplayed) {
            creativityDisplayed = true;
            setTimeout(function() {
                $('.js-creativityNumbers.animated').find('.js-number').numerator(creativityOptions);
            }, 1500);
        }
    });

    setTimeout(function() {
        $(window).scrollTop(0);
        new WOW().init();
        heartDisplayed = false;
        bookDisplayed = false;
        creativityDisplayed = false;
    }, 500);
});