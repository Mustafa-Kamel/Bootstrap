$(document).ready(function() {
    // Nice Scroll
    $('html').niceScroll(
        /*{
                cursorcolor: "aquamarine",
                cursorwidth: "16px"
            }*/
    );

    // Carousel Interval Edit
    $('.carousel').carousel({
        interval: 2000
    });

    // Color Option Box
    $('.option-box').hover(function() {
        $('.color-option').fadeToggle();
    });
    var colorSel = $('.color-option ul li')
    colorSel
        .eq(0).css('background-color', '#51E27E').end()
        .eq(1).css('background-color', '#0895D1').end()
        .eq(2).css('background-color', '#E41B17').end()
        .eq(3).css('background-color', '#E253B4')

    colorSel.click(function() {
        $("link[href *= 'theme']").attr('href', $(this).attr('data-value'));
    });
});

$(window).on('load', function() {
    // Loading Spinner
    $('.spinner .loader').fadeOut(1000, function() {
        $(this).parent().fadeOut(100, function() {
            // $('body').css('overflow', 'auto');
            $(this).remove();
        });
    });
});

// Back To Top Button
var scrollTopBtn = $('#top-btn');
$(window).scroll(function() {
    $(this).scrollTop() > 700 ? scrollTopBtn.show() : scrollTopBtn.hide();
});
scrollTopBtn.click(function() {
    $('body, html').animate({ scrollTop: 0 }, 500);
});