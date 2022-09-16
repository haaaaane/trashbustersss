$('.swiper').slick({
    dots:true,
    autoplaySpeed:2500,
    autoplay:true,
    prevArrow:'<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i></button>',
    slideToshow:5,
    slideToScroll: 1,
})

var article5Near = $('.article5').offset().top - $(window).height()/2

$(window).on('scroll', function() {
    var sct = $(this).scrollTop()
    if (sct > article5Near) {
        $('.article5').addClass('on')
    } else {
        $('.article5').removeClass('on')
    }
    
})

