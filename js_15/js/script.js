function GoogleCallback(jqueryObj,data){
	console.log('data',data);

}
$(function(){

$.ajax({
	url: '',
	data:{
		abc:123
	},
	method:'POST',
	dataType:'jsonp',
	sucess:function(){},
	error:function(){}
});

	        // $.post(
	        // 	'http://localhost/frontend/test_server.php',
	        //     {
	        //     	login:login,
	        //     	password:password
	        //     },
	        //     function(data){
	        //     	$('#verif_txt').html(data);
	        //     }
	        // );


});
