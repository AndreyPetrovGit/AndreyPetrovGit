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
			success:  function(data)
			{ 
				localStorage.setItem('token', data.token);
				location.href='Panel.html';
			}
		});		
	});
});