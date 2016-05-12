



$(function(){
	

$.getJSON("data.json").done(function(data){
if(data)console.log(_.head(data));
	else
		console.log('hello world');
});		
});
