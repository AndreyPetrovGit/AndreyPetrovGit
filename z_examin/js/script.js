
	function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

$(function(){
	$('.carousel').carousel({backgroubdColor:'transparent'});


search();
masonryCreation();

	
});
function search(){
	var API_KEY = '2612184-7d3c53808f49251d4c3b415f2';
	$('#submit').click(function(e)
	{
		e.preventDefault();
		var search_query=$('#search_query').val();
		var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(search_query);
        console.log('click detected');
		$.getJSON(URL, function(data)
		{
		    if (parseInt(data.totalHits) > 0)
		    {
			      //data.hits[0].pageURL
			      console.log(data);
			    var template=$('#results').html();
				template=_.template(template);
				template=template({data:data});
				$('.masonry .item').detach();
				$('.masonry').append(template);
				setTimeout(masonryCreation(),100);
				masonryCreation()
		    }
		    else
		        console.log('No hits');
		});
	}); 

}
function masonryCreation(){
	var $container = $('.masonry');
	 $container.imagesLoaded( function()
	 {
	 	$container.masonry({ columnWidth: 100, itemSelector: '.item'});
	 });

}