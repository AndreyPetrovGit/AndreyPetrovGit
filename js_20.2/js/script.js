



$(function(){
	

// $.getJSON("data.json").done(function(data){
// 	//var data = require('data.json');
// if(data)console.log(_.head(data));
// 	else
// 		console.log('hello world');
// });	

$.ajax({
     url:"data.json",
     dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
     success:function(json){
         // do stuff with json (in this case an array)
         alert("Success");
     },
     error:function(){
         alert("Error");
     }      
});
});
