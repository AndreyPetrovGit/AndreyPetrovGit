
$(function(){
	

var API_KEY = '2612184-7d3c53808f49251d4c3b415f2';

$('#submit').click(function(e)
{
	e.preventDefault();
	var search_query=$('#search_query').val();
	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(search_query);

	$.getJSON(URL, function(data)
	{
	    if (parseInt(data.totalHits) > 0)
	    {
		      //data.hits[0].pageURL
		      console.log(data);
		    var template=$('#results').html();
			template=_.template(template);
			template=template({data:data});
			$('.search_result').detach();
			$('body').append(template);
	    }
	    else
	        console.log('No hits');
	});
}); 




});