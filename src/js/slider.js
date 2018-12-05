var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin: 30,
    center: true,
    autoWidth: true,
    autoHeight: true,
    responsiveClass: true,
    dots: true,
    pagination: false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    responsive:{
        480:{
            items:1
        },
        650:{
            items:1
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});