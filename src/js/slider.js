var owl1 = $('.owl-carousel-first');
var owl2 = $('.owl-carousel-second');
owl1.owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    loop:true,
    pagination : true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
});


owl2.owlCarousel({
    loop:true,
    margin: 100,
    center: true,
    autoWidth: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    responsive:{
        480:{
            items:3
        },
        650:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:5
        }
    }
});