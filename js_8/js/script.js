



function Toggles(active_default,common_tab_name,common_content_render_name,event){
	this.active=active_default;

 	this.showCorrespondContent= function (new_active_content){
 		if(new_active_content!==undefined){
			var $old_content=$(common_content_render_name+this.active);
			

			$old_content.fadeOut(0);
			this.active=new_active_content;

			var $contentX=$(common_content_render_name+this.active);
			//$contentX.css("float","none");
			$contentX.fadeIn(500);
			$contentX.css("display","inline-block");
		}
			
	}
	this.showCorrespondContent(this.active);//show defeult

	this.determineActive= function (){
	//var $tabs=$('.'+common_tab_name+' li');
	var $tabs=$('.'+common_tab_name).children();
	var th=this;
	$tabs.on(event,function(){
		//e.preventDefault();
		var correspondContent=1;
		if($(this).hasClass(common_tab_name+1)){
		console.log('1');
		correspondContent=1;
		}
		else
		if($(this).hasClass(common_tab_name+2)){
		console.log('2');
		correspondContent=2;
		}
		else
		if($(this).hasClass(common_tab_name+3)){
		console.log('3');
		correspondContent=3;
		}
		th.showCorrespondContent(correspondContent);// как использовать this.showCorrespondContent(correspondContent);
	});

   }
}
function show_all(e){

	e.preventDefault();
	var $all=$('.window2__content');
	for(var i=0;i<$all.length;++i){
		$($all[i]).show();
		$($all[i]).css("display","inline-block");
	    console.log($all);
	}
	
		

		
			
		
}

$(function(){
	var window_1=new Toggles(1,'tab','.content','click');
	window_1.determineActive();	
	var window_2=new Toggles(0,'input','.window2__content','mouseover');
	window_2.determineActive();
   var $submit=$('.submit');
   $submit.on('click',show_all);
});