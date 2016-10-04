

$(function(){

	var state=
	{
		page:1

	}
	var bookPages=[
		{
			id:0,
			theme:'Intoduction',
			src:['img/pages/0_1.png','img/pages/0_2.png']
		},
		{
			id:1,
			theme:'Задача распределения заказа',
			src:['img/pages/1_1.png','img/pages/1_2.png','img/pages/1_3.png','img/pages/1_4.png','img/pages/1_5.png']
		},
				{
			id:2,
			theme:'Распределение заказа методом \"честной игры\"',
			src:['img/pages/2_1.png','img/pages/2_2.png','img/pages/2_3.png','img/pages/2_4.png']
		},
				{
			id:3,
			theme:'Простейшие механизмы налогообложения',
			src:['img/pages/3_1.png','img/pages/3_2.png','img/pages/3_3.png','img/pages/3_4.png']
		},
				{
			id:4,
			theme:'Противозатратные механизмы',
			src:['img/pages/4_1.png','img/pages/4_2.png','img/pages/4_3.png','img/pages/4_4.png']
		},
				{
			id:5,
			theme:'Задача распределения прибыли',
			src:['img/pages/5_1.png','img/pages/5_2.png','img/pages/5_3.png']
		},
				{
			id:6,
			theme:'Игры деловых людей',
			src:['img/pages/6_1.png','img/pages/6_2.png']
		},
				{
			id:7,
			theme:'Комплексный пример',
			src:['img/pages/7_1.png','img/pages/7_2.png']
		}
	];
	
	 var Template=$('#Template').html();
	 var Nav=$('#Nav').html();
	
	 var templateFunction=  _.template(Template);
	  var navFunction=  _.template(Nav);
	
	 var infoObject=
	 {
	 	page: bookPages[state.page],
	 	
	 	pages:bookPages

	 };		
      var nav=navFunction(infoObject);
	 	$('.wrapper').append(nav);
	function init(){
		$('.nav_item:nth-of-type(1)').on('click',function(){infoObject.page=bookPages[0];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(2)').on('click',function(){infoObject.page=bookPages[1];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(3)').on('click',function(){infoObject.page=bookPages[2];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(4)').on('click',function(){infoObject.page=bookPages[3];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(5)').on('click',function(){infoObject.page=bookPages[4];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(6)').on('click',function(){infoObject.page=bookPages[5];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(7)').on('click',function(){infoObject.page=bookPages[6];$('.imgContainer').children().remove();render();});
		$('.nav_item:nth-of-type(8)').on('click',function(){infoObject.page=bookPages[7];$('.imgContainer').children().remove();render();});
		
	}
 function render()
	 {
		var result=templateFunction(infoObject);
	 	$('.wrapper').append(result);
	 	
	}
	
	
	render();
init();


	
	


});
