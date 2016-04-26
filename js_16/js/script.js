
// 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + search + '&callback=GoogleCallback&context=?',


$(function(){

		var search_resuly=
	{
		results:
		[
		{
		 name:'1',
	     text:'1q1q1q1q1q1'
		},
	    {
	     name:'2',
	     text:'1q1q1q1q1q1'
		},
	    {
	     name:'3',
	     text:'1q1q1q1q1q1'
		}

	    ] 
	};

	var template=$('#results').html();
	template=_.template(template);
	template=template(search_resuly);
	$('body').append(template);
});