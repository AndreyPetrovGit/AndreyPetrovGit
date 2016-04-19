//     !!!!!ВОПОРС №0!!!!!
// function menu(Sub_deep,item_count,Class_Name)
// {
//      if(Sub_deep===0){return;}
//      for(var i=0;i<item_count;i++)
//      {
//      	//console.log(Class_Name+i);
// 			$(Class_Name+'>li:nth-of-type('+(i+1)+')').hover(  
// 		        function () {
// 		            //показать подменю
// 		            $(Class_Name+i).slideDown(300);  
// 		            console.log(Class_Name+i);
// 		        },
// 		        function () {
// 		            //скрыть подменю
// 		            $(Class_Name+i).slideUp(10);
// 		            console.log(Class_Name+i);
// 		        }
		   
// 		     ); 
	      
// 	      menu((Sub_deep-1),item_count,(Class_Name+i));
//      }
// }	
var a=0;
$(function() {
	//------------------------------ Slider---------------------------------------
    $('.jcarousel').jcarousel({
     
    });
    $('.prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
    a--;
    if(a==-1){
    	a=2;
    	$('.jcarousel').jcarousel('scroll', '+=2');
    }
	});

	$('.next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
    a++;
    if(a==3){
    	a=0;
    	$('.jcarousel').jcarousel('scroll', '-=2');
    }
	});
    //---------------------------------Menu	-------------------------------------------
   // menu(3,5,'.sub_menu');
   	$('.sub_menu>li:last-of-type').hover(  //,.sub_menu4,.sub_menu44,.sub_menu444
        function () {
            $('.sub_menu4').slideDown(300);  
          
        },
        function () {
            $('.sub_menu4').slideUp(0);
           
        }
   
     ); 
   	$('.sub_menu4>li:last-of-type').hover( 
        function () {
            $('.sub_menu44').slideDown(300);  
        },
        function () {
            $('.sub_menu44').slideUp(0);
        }
   
     ); 
   	$('.sub_menu44>li:last-of-type').hover(  //,.sub_menu444
        function () {
            $('.sub_menu444').slideDown(300);  
    
        },
        function () {
            //скрыть подменю
            $('.sub_menu444').slideUp(0);
          
        }
   
     ); 
   	// -----------------------------------SELECT---------------------------------------
   	$(function () {
			$("#country_id").selectbox();
		});





});
