(function ($) {
    "use Strict";

 
$(".product_img_slide_area").owlCarousel({
         center: false,
         items: 5,
         loop: true,
         autoplay:false,
         margin: 20,
        nav: false,
         //  responsive: {
         //     0: {
         //         items: 1,
         //         margin:0,
         //     },
         //     401: {
         //         items: 2,
         //         margin:10,
         //     },
         //     480: {
         //        items: 2,
               
         //     },
         //     767: {
         //         items: 2,

         //     },
         //     768: {
         //         items: 2,
         //     },
         //     1023: {
         //        items: 4,
         //     }

         // }
     });
// blog slide 
$(".bog_content_area").owlCarousel({
         center: false,
         items: 3,
         loop: true,
         autoplay:false,
         margin: 20,
        nav: false,
         //  responsive: {
         //     0: {
         //         items: 1,
         //         margin:0,
         //     },
         //     401: {
         //         items: 2,
         //         margin:10,
         //     },
         //     480: {
         //        items: 2,
               
         //     },
         //     767: {
         //         items: 2,

         //     },
         //     768: {
         //         items: 2,
         //     },
         //     1023: {
         //        items: 4,
         //     }

         // }
     });
 $(".owl-loaded ").addClass("owl-carousel");
// **********************isotop***********
$(".product_isotop_area").isotope({
            filter: '*'
        });
        $(".product_menu li").on('click', function() {
           var selector = $(this).attr('data-filter');
            $(".product_isotop_area").isotope({
                filter: selector
            });
        });

  // 3. NivoSlider Activation
  //   -----------------------------*/
    $('#slider').nivoSlider({
        effect: 'random',
        animSpeed: 300,
        pauseTime: 5000,
        directionNav: false,
        manualAdvance: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        controlNav: true,
        prevText: "<i class='zmdi zmdi-chevron-left'></i>",
        nextText: "<i class='zmdi zmdi-chevron-right'></i>"
    });
    // active wow

    new WOW().init();
    // css 
     $(".navbar-collapse ul li a").on('click', function() {
        $(".navbar-collapse").removeClass("in");
    });

     // menu fixed
     $(window).scroll(function() {
        var topscrool = $(window).scrollTop();
        if (topscrool > 100){
             $(".navbar.navbar-area").addClass("sticky");
        }else{
              $(".navbar.navbar-area").removeClass("sticky");
        }

     });
     // menu active

     $(".menu li").on("click", function() {
         $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
     })

})(jQuery);