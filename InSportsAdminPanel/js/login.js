$(function(){
	var BaseUrl = "http://46.101.208.201:8080";
	$("#submit").bind('click', function(event)
	{
		event.preventDefault(); 
		var login = $('#login').val();
		var password = $('#password').val();
		$.ajax(
		{
			url: BaseUrl + '/admin/auth?login='+login+'&password='+password,
			method:'GET',
			// headers: {
				// 'Access-Control-Allow-Origin': '*',
				// 'Access-Control-Allow-Credentials': true,
				// 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
				// 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
			// },
			//dataType : 'jsonp',
			// async:true,
			// crossDomain: true,
			success:  function(data)
			{ 
				localStorage.setItem('token', data.token);
				location.href='Panel.html';
			}
		});		
	});
});