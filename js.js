//baaack to Top

var btn = $('#top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
const nav = $("#down")
btn.on('click', function () {

    $('html, body').animate({
        scrollTop: $(nav).offset().top
    }, '1000');
});


//header

$('header,a').on('click', function () {
    const goToDown = "#" + $(this).attr('class');
    $('body,html').animate({
        scrollTop: $(goToDown).offset().top
    }, 500)
})

//nav 
$('nav, a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body,html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})