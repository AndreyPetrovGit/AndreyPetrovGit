
(function($){
	
	$.fn.carousel=function(){

	var leftUIEl=$('.carousel-arrow-left');
    var rightUIEl=$('.carousel-arrow-right');

    //var currentLeftValue=-600;
    var elementsList=$('.carousel-list');
    var elementsCount= elementsList.find('li').length;
    var $wrapper=$('.carousel-hider');
  //c
    var iterator=0	;//сколько сейчас видно

    
    var position=new Array(-600,0,600);
	var $first=$('.carousel-hider .carousel-list:first-of-type'); 
	var $second=$('.carousel-hider .carousel-list:nth-of-type(2)');
	var $third=$('.carousel-hider .carousel-list:last-of-type');	

    leftUIEl.click(function(){
      --iterator;console.log(iterator);
     
      if(iterator===-6)//delete  x--  |create  --x   <--
      {
       $first.detach();
       $first=$second;
       position[2]=600;
       position[1]=0;
       position[0]=-600;
       $second=$third;
       $third=$('.carousel-hider .carousel-list:nth-of-type(2)').clone();
       $wrapper.prepend($third);
       //$first.addClass('del');
       iterator=0;
        //$('.carousel-hider .carousel-list:first-of-type').css({"left":"-600"});	
      }
       position[0]-=125;
       position[1]-=125;
       position[2]-=125;
	   $first.animate({left:position[0]+"px"},500);
	   $second.animate({left:position[1]+"px"},500);
	   $third.animate({left:position[2]+"px"},500);
    });
    rightUIEl.click(function(){

		 ++iterator;console.log(iterator);

	 
      if(iterator===6)//delete --x | create  x--  -->
      {
        $third.detach();
      	$third=$second;
      	 position[2]=600;
      	 position[1]=0;
      	 position[0]=-600;
      	$second=$first;
      	$first=$('.carousel-hider .carousel-list:nth-of-type(2)').clone();
      	$wrapper.prepend($first);
      	$first.css({"left":"-600"});	
        $('.carousel-hider').append($first);
       iterator=0;
      }
		
	   position[0]+=125;
       position[1]+=125;
       position[2]+=125;
	   $first.animate({left:position[0]+"px"},500);
	   $second.animate({left:position[1]+"px"},500);
	   $third.animate({left:position[2]+"px"},500);
    });


	

	return this;
    };
})(jQuery);

// if(iterator===+1)//create
// 		{
// 			 console.log(iterator);
			
// 		    $first = $('.carousel-hider .carousel-list:first-of-type').clone();//.carousel-list:first-of-type
// 		     $('.carousel-hider .carousel-list:first-of-type').addClass('del');
// 		   // $first.animate({left:0+"px"},0);//!
// 		    $first.appendTo('.carousel-hider');
		 
// 		}  

// 		 if(iterator===12){
// 		 $('.del').detach();
// 		 //currentLeftValue+=600;
// 		 $first.animate({left:currentLeftValue+"px"},0);
// 		   iterator=0;
// 		 }
// 	    	