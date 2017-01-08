$(function(){
	var label= document.getElementById("status");
	var password= document.getElementById("password");
	var login= document.getElementById("login");
	var request = 'http://www.cyberlms.somee.com/webapi';
	$("#submit").bind('click', function(event)
	{
		
			event.preventDefault(); 
	        var login=$('#login').val();
	        var password=$('#password').val();
			$.ajax(
			{
				url: request,
				// data:{
				// 	login:login,
	   			//	password:password
				// },
				method:'Get',
				dataType:'json',  
				success:  function(data)
				{      
				    console.log(data); 

					//window.location.href='monitoring.html';
				 }
			
			});        
		
	});
});