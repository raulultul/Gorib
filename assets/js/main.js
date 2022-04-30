/***************************************************

==================== JS INDEX ======================

****************************************************

01. Sticky Header Js

02. Info Bar Js

03. Mobile Menu Js

04.  img fancybox js

05. Album macy js

06. Scroll To Top Js

07. Testimonial Slider 2 Js

08. PreLoader Js





****************************************************/


(function ($) {

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

  "use strict";
  
     // 03. Sticky Header Js

     $(window).on('scroll', function () {

      var scroll = $(window).scrollTop();
  
      if (scroll < 100) {
  
        $("#sticky").removeClass("sticky");
  
      } else {
  
        $("#sticky").addClass("sticky");
  
      }
  
    });
  
 
	////////////////////////////////////////////////////

   
   $(document).ready(function() {
           
           $("#pageLoad").animateNumbers(4321, true, 2000);
           
           $("#clickEvent").on("click", function() {
               $(this).animateNumbers(1234, false);
           });
           
           $("#num_input").animateNumbers(570);
           $("#num_input2").animateNumbers(250, false, 2000, "linear");
           $("#num_input3").animateNumbers(321, true, 2000, "linear");
           $("#num_input4").animateNumbers(421, true, 2000, "linear");
       });

  	////////////////////////////////////////////////////

    // one page active li

    jQuery('.scroll').onePgaeNav({
			wrapper : '#onepage-nav'
		});
  // onle time slider| 
 

// fayncy box

var containerEl = document.querySelector('.vdo');

var containerEl = document.querySelector('.gallaxy');


jQuery('.scroll').onePgaeNav({
  wrapper : '#onepage-nav'
});

// preloader
 var loader = document.getElementById("preloader");

 window.addEventListener("load", function(){
   loader.style.display = "none";
 })
// ----------end

})(jQuery);