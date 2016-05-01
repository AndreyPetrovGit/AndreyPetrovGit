function GoogleCallback(jqueryObj,data){
    var template=$('#results').html();
	template=_.template(template);
	template=template(data);
	$('.search_result').detach();
	$('body').append(template);

}
$(function(){
	$('#submit').click(function(e){
		        e.preventDefault();
				var search_query=$('#search_query').val();
				$.ajax({
				        type: 'GET',
				        url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + search_query + '&callback=GoogleCallback&context=?',
				        dataType: 'jsonp'
				    });			 
	}); 
});