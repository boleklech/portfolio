( function () {


$(document).ready(function(){
      $('.slider').bxSlider({

      	auto: true,
      	pause: 4000,

      });
   

    });



$(document).ready( function () {

	$(".trans").on("click", function(e) {
		var target = this.hash,
			$target =$(target);
			console.log($target);
				
			 function getPosition (){
			 		var $pos;

				if (window.innerWidth > 800) {
					$pos = 50;
				} else{
					$pos= 70;
				}
				  return $pos
				};
				
			$('html,body').stop().animate({
				'scrollTop':$target.offset().top - getPosition()

			},900,'swing', function(){

			});	

	});
});

		
$(document).ready( function () {

	var titles = $(".accordion_title"),
	texts = $(".accordion_text"),
	arrowDown= $(".fa-arrow-down"),
	arrowUp= $(".fa-arrow-up");

	arrowDown.addClass("active");
	texts.hide();
  /*$(".about").slideDown();*/

	

	titles.on("click", function () {

		var that = $(this);

		$(".box-accordion").addClass("transRot");
		console.log(that.find(arrowUp));

		 texts.stop().slideUp(300);
		 arrowUp.removeClass("active");
		 arrowDown.addClass("active");

	console.log(that.find("i").last());
		
		var	text = that.next();
		var	isVisible = text.is(":visible");

		that.find("i").last().addClass("active");
		that.parent().addClass("transRot", !isVisible);

		if(!isVisible){
			text.stop().slideDown(300);
			that.parent().removeClass("transRot");
			that.find("i").last().removeClass("active");
			that.find(arrowUp).addClass("active");

			
		} else {
			text.stop().slideUp(300);
			that.parent().addClass("transRot");
			that.find("i").last().addClass("active");
			that.find(arrowUp).removeClass("active");		
		}

	});	

	var header = $("header"),
		mobileMenu = $(".mobile-menu");


		$(window).scroll(function (e) {

		if ($(window).scrollTop() >= 0) {
			mobileMenu.addClass("active");
		} else{
			mobileMenu.removeClass("active");
		}

		
	});

		//nav_bars

			$(window).scroll(function (){
				var scroll = $(window).scrollTop();
				var windowWidth = window.innerWidth;

			if (scroll > 145 && windowWidth > 768  ) {
					$(".mobile-menu").addClass("active-nav");
				}else {
					$(".mobile-menu").removeClass("active-nav");
				}

			});

			$(window).scroll(function (){
					var scroll = $(window).scrollTop();
				if (scroll > 20) {
					$(".social-media").addClass("active-social");
				}else {
					$(".social-media").removeClass("active-social");
				}

			});

			$(window).resize(function(){
				var widthWindow = window.innerWidth;

				if (widthWindow < 768 ) {
					$(".mobile-menu").removeClass("active-nav");
				}


			});

			
		//form inputs

		

			$("input, textarea").change(function(e){
						var input = $("input");
						var that = $(this);
						var value = that.val();
						
					if(value !== '') {
						that.parent().addClass("not-empty-input");
					/*	that.parent().find("label").addClass("active");*/
					} else {
						that.parent().removeClass("not-empty-input");
					/*	that.parent().find("label").removeClass("active");*/
					}

				});

		 $('textarea').on('focus', function(){
                if(!$(this).data('placeholder')) /*&& $(this).val()!=="")*/{
                    $(this).data('placeholder', $(this).attr('placeholder'));
                    $(this).next().addClass("active");
                }
                $(this).attr('placeholder', "");
                 $(this).next().addClass("active");
            }).on('focusout', function(){
                if($(this).val()==""){
                    $(this).attr('placeholder', $(this).data('placeholder'));
                    $(this).next().removeClass("active");
                }
            });



            var error_fname = false;
            var error_email = false;
         	

            function check(){
            	if (check_fname() == true &&  check_email() == true && check_textarea() == true ) {
            		$(".button").addClass("active-button");
            	}else {
            		$(".button").removeClass("active-button");
            	}
            	
            } 	

            $("#form_fname").focusout(function(){
            		check_fname();
            		check();
            	
            
            	
            });

            $("#form_email").focusout(function(){
            	check_email();
            	check();
            		
            });

            $("#form_textarea").focusout(function(){
            	check_textarea();
            	check();
            		
            	
            });


            function check_fname(){
            	var pattern = /[a-zA-Z]*$/;
            	var fname = $("#form_fname").val();
            	if(pattern.test(fname) && fname !== '') {
     					return true;	

     		       	}	          
            	}

            function check_email(){
            	var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            	var email = $("#form_email").val();
            	if (pattern.test(email) && email !== '') {
            		return true;
            	}

            }

            function check_textarea(){
            	var text = $("#form_textarea").val();
            	if (text !== '') {
            		return true;
            	}
            }


});	
})();