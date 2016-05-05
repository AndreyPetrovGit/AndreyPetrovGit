
(function($){





	function left_carusel($carusel,time){
		   var block_width = $carusel.find('.carousel__block').outerWidth();
		   $carusel.find(".carousel__items .carousel__block").eq(-1).clone().prependTo($carusel.find(".carousel__items")); 
			   $carusel.find(".carousel__items").css({"left":"-"+block_width+"px"});
			   $carusel.find(".carousel__items .carousel__block").eq(-1).remove();    
			   $carusel.find(".carousel__items").animate({left: "0px"}, time); 
			   
		}

			function right_carusel($carusel,time){
		   var block_width = $carusel.find('.carousel__block').outerWidth();
		   $carusel.find(".carousel__items").animate({left: "-"+ block_width +"px"}, time, function(){
			   $carusel.find(".carousel__items .carousel__block").eq(0).clone().appendTo($carusel.find(".carousel__items")); 
			   $carusel.find(".carousel__items .carousel__block").eq(0).remove(); 
			   $carusel.find(".carousel__items").css({"left":"0px"}); 
		   }); 
		}


	$.fn.carousel=function(options){
		var defaults={
			backgroubdColor:'black',
			time:100
		};
		var settings=$.extend(defaults,options);
		this.css({'background-color':settings.backgroubdColor});
	    $(document).on('click', ".carousel-button-right",function(){ 
		var $carusel = $(this).parents('.carousel');
		right_carusel($carusel,settings.time);
		return false;
		});
		$(document).on('click',".carousel-button-left",function(){ 
			var $carusel = $(this).parents('.carousel');
			left_carusel($carusel,settings.time);
			return false;
		});
		
	
		
			
	    return this;
    };
	$.fn.auto_right=function(){
		
		setInterval(function(){
					
					right_carusel($('.carousel'),1000);
					}, 20000);
	}
	$.fn.r=function(){
			
		right_carusel($('.carousel'),1500);
	}
	$.fn.l=function(){

		left_carusel($('.carousel'),1500);
	}
})(jQuery);
    	



