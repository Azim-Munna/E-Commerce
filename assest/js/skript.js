var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js');
document.head.appendChild(jQueryScript);
 /*document.write(
      unescape("%3Cscript src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js")
    );*/
(function ($) {
    "use Strict";

 
$(".product_img_slide_area").owlCarousel({
         center: false,
         items: 5,
         loop: false,
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
$(".sing_page_pr_slide").owlCarousel({
         center: false,
         items: 4,
         loop: false,
         autoplay:false,
         margin: 20,
        nav: true,
        // slideTransition:6000,
        smartSpeed:1000,
        navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>']

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
    // france box 
    $('.single_page_img').on('click',function(){


    $(".single_thumb").fancybox({
        'transitionIn'  :   'elastic',
        'transitionOut' :   'elastic',
        'speedIn'       :   600, 
        'speedOut'      :   200, 
        'overlayShow'   :   true,
        // 'showNavArrows' :true,
        // 'hideOnContentClick ':true,

         // parent.$.fancybox.close();

    });
    });


    /*
$(".fancybox-button").fancybox({
        prevEffect      : 'none',
        nextEffect      : 'none',
        closeBtn        : false,
        helpers     : {
            title   : { type : 'inside' },
            buttons : {}
        }
    });
    */
// $.fancybox.close;
    // active wow

    new WOW().init();
    // css 
     $(".navbar-collapse ul li a").on('click', function() {
        $(".navbar-collapse").removeClass("in");
    });
// shop page horizontal and vertical view js
$(".grid_v").on('click',function(){
    $(".horizontal_view").addClass("shop_hide").removeClass("shop_show");
    $(".grid_view").addClass("shop_show").removeClass("shop_hide");
});

$(".hor_v").on('click',function(){
    $(".grid_view").addClass("shop_hide").removeClass("shop_show");
    $(".horizontal_view").addClass("shop_show").removeClass("shop_hide");
});
// checkout page css js 
$('#check_ch').on('click',function(){
 $('#dif_ship_area').slideToggle(1000);
})
// single page img changing 
var big_img=$(".single_page_img img");
var small_img=$(".single_thumb");
$(small_img).on('click',function(){
    var chng_img = $(this).children("img").attr('src');
    $(big_img).attr("src",chng_img);
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
    $(".pagen li").on("click", function() {
         $(this).addClass("active-pr").siblings("li").removeClass("active-pr");
     })
     // pre
     // down to top
      $(window).scroll(function(){
        var top_sc = $(window).scrollTop();
        if(top_sc>250){
            $(".top_d").css({"opacity":"1","visibility":"visible;","transition":"0.4s ease-in"});
        }else{
            $(".top_d").css({"opacity":"0","visibility":"hidden;","transition":"0.4s ease-in"});
        }
     })
     var click_U = $(".top_d");
     $(click_U).click(upfunctionn);
      function upfunctionn() {
        $('html,body').animate({ scrollTop: 0 }, 415);
        return false;
    }
    // $('body').jpreLoader();
// staller
 // $('#stttt').stellar();

// filter by price area


/*
$("#slider-range").slider({
        range: true,
        min: 0,
        max: 80,
        values: [20, 55],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + "  $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        "  $" + $("#slider-range").slider("values", 1));

*/


// final 
$("#sl_pri").slider({
    range:true,
    min:0,
    max:90,
    values:[20,80],
    slide: function(event,ui){
        $("#amount").val("$"+ui.values[0]+" $"+ui.values[1]);

    }
});
$("#amount").val("$" + $("#sl_pri").slider("values", 0)+" $" + $("#sl_pri").slider("values",1));
// final  end
})(jQuery);

// test filter price 
var details={
    "pen":35,
    "tea":5,
    "glass":20,
    "cable":30,
    "sound_box":50,
    "pendrive":80,
    "style pen":10,
    "gift box":20,
    "knife":55,
    "chair":40,
}

$( document ).ready(function() {
$("#slider_price").slider({
min:0,
max:80,
range:true,
values:[0,80],
change:function(event,ui){
    getDetails(ui.values[0],ui.values[1]);
}
});
var carnt= $("#slider_price").slider("option","values");
getDetails(carnt[0],carnt[1]);
});
function getDetails(minimum,maximum){
    $("#range").text("$" + minimum+ " - $" + maximum);
    var result = "<table><tr><th class='th_pr'>product name &nbsp;</th><th class='th_pr'> price<th></tr>";
    for(var item in details){
        if(details[item] >= minimum && details[item]<= maximum){
            result += "<tr><td class='th_item'>"+item+"</td><td class='th_item'>"+details[item]+"$"+"</td></tr>";
        }
    }
    result += "</table>";
    // var sort_d= result.sort();
    $("#output").html(result);
}
// end filter by price 
// sort 
let dk= ["azim","munna",'babu',"baby"];
console.log(dk.sort());
let y;
let text_y=" ";
for(y in details){
    text_y +=details[y]+" "+"\n";
    console.log(y);
    console.log(y);
}
console.log(text_y);

// my 
let person = { a: " am azim", b: " am student" };
let tex_t = " ";
let x;
for (x in person) {
    tex_t += "i" + person[x] + " ";
    console.log(x + "<br>");
}
console.log(tex_t);

// sort