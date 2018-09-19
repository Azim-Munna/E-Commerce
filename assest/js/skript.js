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
        responsive: {
            0: {
                items: 1,
                // autoplay:true
            },
            480: {
                items: 2,
                autoplay: true
            },
            768: {
                items: 3,
                autoplay: true
            },
            992: {
                items: 3,
                autoplay: true
            },
            1200: {
                items: 5,
                autoplay:true
            }
        }
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
        navText:['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],

         responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
     });
// blog slide 
$(".blog_section .bog_content_area:first-child").attr("id","blog_one");
$("#blog_one").owlCarousel({
         center: false,
         items: 3,
         loop: true,
         autoplay:false,
         margin: 20,
        nav: false,
         responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
     });
$(".blog_section .bog_content_area:nth-child(2)").attr("id","blog_two");
$("#blog_two").owlCarousel({
         center: false,
         items: 3,
         loop: true,
         autoplay:false,
         margin: 20,
        nav: false,
         responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            768: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
     });
$(".blog_section .bog_content_area:nth-child(3)").attr("id","blog_three");
$("#blog_three").owlCarousel({
         center: false,
         items: 3,
         loop: true,
         autoplay:false,
         margin: 20,
        nav: false,
         responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            768: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
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
    // navbar collapse activation
         $(".navbar-collapse ul li a").on('click', function() {
        $(".navbar-collapse").removeClass("in");
    });
         // mobile menu fixeng
            let i;
            let nym="list";
            for(i=0;i<15;i++){
                var df_nm =nym+i;

                console.log(df_nm);
            }
         var m_win = $(window).width();
         if(m_win<=767){
            // alert(m_win);
            $(".header-area .nav.menu").addClass("h_menu");
            /*(".icon_pl").on("click",function(){
                $(this).toggleClass("mainus");
            });
           */
            // for one 
            var li_nth_on  = $(".h_menu li:first-child");
            var li_nth_on_drop  = $(".h_menu li:first-child ul");

          var mob_nth_one = $(li_nth_on).append("<a class='icon_pl' href='#'></a>");
          $(".icon_pl").on("click",function(){
           
            // $(".icon_pl_one").addClass("icon_pl");
             $(this).toggleClass("mainus");
            $(li_nth_on_drop).toggleClass("s_s_w");
            // end one
            // test
            // $(".s_s_w li").addClass("d_me").siblings("li").removeClass("d_me");
            // test
            // $(".menu ul").removeClass("s_s_w");
             // $(".menu ul").addClass("s_s_w");

         })
         // end one 
          // for two
            var li_nth_two  = $(".h_menu li:nth-child(3)");
            var li_nth_two_drop  = $(".h_menu li:nth-child(3) ul");
          var mob_nth_two = $(li_nth_two).append("<a class='icon_pl_one' href='#'></a>");
          $(".icon_pl_one").on("click",function(){
             $(this).toggleClass("mainus");
            $(li_nth_two_drop).toggleClass("s_s_w");
            
         })
         // end two
          // for three
            var li_nth_three  = $(".h_menu li:nth-child(4)");
            var li_nth_three_drop  = $(".h_menu li:nth-child(4) ul");
          var mob_nth_three = $(li_nth_three).append("<a class='icon_pl_three' href='#'></a>");
          $(".icon_pl_three").on("click",function(){
             $(this).toggleClass("mainus");
            $(li_nth_three_drop).toggleClass("s_s_w");
            
         })
         // end three
          // for four
            var li_nth_four  = $(".h_menu li:nth-child(5)");
            var li_nth_four_drop  = $(".h_menu li:nth-child(5) ul");
          var mob_nth_four = $(li_nth_four).append("<a class='icon_pl_four' href='#'></a>");
          $(".icon_pl_four").on("click",function(){
             $(this).toggleClass("mainus");
            $(li_nth_four_drop).toggleClass("s_s_w");
            
         })
         // end four
          
      }
          // copy
          /*var windoww = $(window).width()
     if(windoww <=767 ){
         var click_hide = $(".menu li a");
         click_hide.on("click",function(){
             $(".menu").css("display","none")
              return false;
         });
          // copy
          
          /*$(".icon_pl").on("click",function(){
             $(".menu ul").css({"opacity":"1","visibility":"visible"});
         })*/
          
        
     // // pre
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