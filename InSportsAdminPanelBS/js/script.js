$(function(){
	var BaseUrl = "http://46.101.208.201:8080";
	function Get(url, requestuestBody) {
		return new Promise(function(succeed, fail) {
			var result = null;
			$.ajax(
			{
				url: url + "/" + requestuestBody,
				headers:{
					'Authorization': localStorage.getItem('token')
				},
				method:'GET',
				dataType:'json',
				success:  function(data){
					succeed(data);
				},
				fail: function(data){
					console.log(data);
					fail(new Error(data));
				}
			});
		});
	}
	function Post(url, requestuestBody, pushData) {
		return new Promise(function(succeed, fail) {
			var result = null;
			$.ajax(
			{
				url: url + "/" + requestuestBody,
				headers:{
					'Authorization': localStorage.getItem('token')
				},
				data:{
					push: pushData 
				},
				method:'POST',
				dataType:'json',
				success:  function(data){
					console.log(data);
					succeed(data);
				},
				fail: function(data){
					console.log(data);
					fail(new Error(data));
				}
			});
		});
	}
	function distinct(value, index, self){
		return self.indexOf(value) === index;
	}
	var state = 
	{
		page:0
	}
	var pages = [
		{
			theme:'OFFERS'
		},
		{
			theme:'USERS'
		},
		{
			theme:'SPORTS'
		},
		{
			theme:'BUG REPORTS'
		},
		{
			theme:'PUSH'
		},
		{
			theme:'LOG OUT'
		}
	];
	
	var OfferTemplate = $('#OfferTemplate').html();
	var Nav = $('#Nav').html();
	var PushTemplate = $('#PushTemplate').html();
	var PanelUserTemplate = $('#PanelUserTemplate').html();
	var UserTemplate = $('#UserTemplate').html();
	var SportTemplate = $('#SportTemplate').html();
	var NewSportTemplate = $('#NewSportTemplate').html();
	var BugReportTemplate = $('#BugReportTemplate').html();

	var OfferTemplateFunction = _.template(OfferTemplate);
	var navFunction = _.template(Nav);
	var PushTemplateFunction = _.template(PushTemplate);
	var PanelUserTemplateFunction = _.template(PanelUserTemplate);
	var UserTemplateFunction = _.template(UserTemplate);
	var SportTemplateFunction = _.template(SportTemplate);
	var NewSportTemplateFunction = _.template(NewSportTemplate);
	var BugReportTemplateFunction = _.template(BugReportTemplate);

	var infoObject =
	{
		page: pages[state.page],
		items: [], 		
		pages: pages
	};	

	var nav = navFunction(infoObject);
	$('.wrapper').append(nav);
	//$('.nav_item_active').hide();
	$('.nav_item').on('click', function(){
		$('.nav_item').removeClass('nav_item_active');
		$(this).addClass('nav_item_active');
	});
	function init(){
		$('.nav_item:nth-of-type(1)').on('click',function(){
			infoObject.page = pages[0];
			$('.deletable').remove();
			var newItems;
			Get(BaseUrl,"admin/offers").then(function(items){
				
				Get(BaseUrl,"sport").then(function(sports){
					newItems = items.map(function(offer){
						var sportAsociated = sports.filter(function(sport){

							return sport.id == offer.sportId;
						});
						offer.sport = sportAsociated[0].name;
						return offer;
					});
					infoObject.items = newItems;
					// <prepare headers>
					var fields = [];
					newItems.forEach(function(iUser){ fields = fields.concat(Object.keys(iUser));});
					var offerFields = fields.filter(distinct);
					infoObject.offerFields = offerFields;
					// </prepare headers> 
					var result = OfferTemplateFunction(infoObject);
					$('.wrapper').append('<div class="imgContainer deletable">		<ul class="breadcrumb">\
			<li>\
				<i class="icon-home"></i>\
				<a href="Panel.html">Home</a> \
				<i class="icon-angle-right"></i>\
			</li>\
			<li><a href="#">Offers</a></li>\
		</ul><br><br> \
						<span>Filter by sport:</span><input type="text" name="sportFilter" id="sportFilter"><br></div>')
						.append(result);

					$('.additionInfo').hide();
					$('.personToggle').on('click', function(){
						$(this).find('.additionInfo').toggle();
					});

					
					var sportFilter = document.getElementById('sportFilter');
					sportFilter.oninput = function(){
						var filtredArray = newItems.filter(function(el){
							return el.sport.toLowerCase().indexOf(sportFilter.value.toLowerCase()) != -1;
						});
						$(".OfferTemplateClass").remove();
						infoObject.items = filtredArray;

						var result = OfferTemplateFunction(infoObject);
						$('.wrapper')
						.append(result);

						
						$('.additionInfo').hide();
						$('.personToggle').on('click', function(){
							$(this).find('.additionInfo').toggle();
						});

					};

					
				}, function(error){console.log(error);});



				
			}, function(error){console.log(error);});
		});
		$('.nav_item:nth-of-type(2)').on('click',function(){
			infoObject.page = pages[1];
			$('.deletable').remove();
			Get(BaseUrl,"user").then(function(items){

					var fields = [];
					items.forEach(function(iUser){ fields = fields.concat(Object.keys(iUser));});
					var userFields = fields.filter(distinct);
					infoObject.items = items;
					infoObject.userFields = userFields;
					var panel = PanelUserTemplateFunction();
					var result = UserTemplateFunction(infoObject);
					// $('.wrapper').append(result);

					$('.wrapper').append('<div class="imgContainer deletable"><ul class="breadcrumb">\
						<li>\
							<i class="icon-home"></i>\
							<a href="Panel.html">Home</a> \
							<i class="icon-angle-right"></i>\
						</li>\
						<li><a href="#">Users</a></li>\
					</ul><br>\
					<span>Filter by name:</span><input type="text" name="filter" id="NameFilter"><br></div>')
					.append(result);
					// $('.search').append(panel);

					var nameFilter = document.getElementById('NameFilter');
					nameFilter.oninput = function(){
						var filtredArray = items.filter(function(el){
							return el.name.toLowerCase().indexOf(nameFilter.value.toLowerCase()) != -1;
						});
						$(".userList").remove();
						infoObject.items = filtredArray;
						var result = UserTemplateFunction(infoObject);
						$('.wrapper').append(result);
					};
				}, 
				function(error){console.log(error);});
		});
		$('.nav_item:nth-of-type(3)').on('click', function(){
			infoObject.page = pages[2];
			$('.deletable').remove();
			$('.wrapper').append('	<div class="imgContainer deletable">	<ul class="breadcrumb">\
				<li>\
					<i class="icon-home"></i>\
					<a href="Panel.html">Home</a> \
					<i class="icon-angle-right"></i>\
				</li>\
				<li><a href="#">Sports</a></li>\
				</ul><br></div>');//<p class="right80 deletable">Manage panel.<b>Sports</b></p>

			$('.imgContainer').append('<div class="Container NewSportContainer"></div><div class="Container SportContainer"></div>');
			Get(BaseUrl,"admin/sports/new").then(function(items){
				infoObject.items = items;
				var newSportList = NewSportTemplateFunction(infoObject);
				var col = $(newSportList);
				$('.NewSportContainer').prepend("<p><h4>NEW SPORTS</h4></p>").append(col);
				$('.addToDb').each(function(){
					var This = $(this);
					var id = $(this).attr('id');
					This.on('click', function(){
						Get(BaseUrl, "admin/sports/accept?sportId=" + id).then(function(response){
							// console.log(response);
						},function(error){
							console.log(error);
						});	
						This.parent().remove();					
					});
				});
				$('.Decline').each(function(){
					var This = $(this);
					var name = $(this).attr('name');
					This.on('click', function(){
						console.log('delete');
						Get(BaseUrl, "admin/sports/decline?sportId=" + name).then(function(response){
							// console.log(response);
						},function(error){
							console.log(error);
						});	
						This.parent().remove();					
					});
				});
			}, function(error){console.log(error);});

			Get(BaseUrl,"sport").then(function(items){
				infoObject.items = items;
				var sportList = SportTemplateFunction(infoObject);
				var col = $(sportList);
				$('.SportContainer').prepend("<p><h4>SPORTS</h4></p>").append(col);
			}, function(error){console.log(error);});
		});
		$('.nav_item:nth-of-type(4)').on('click',function(){
			infoObject.page = pages[3];
			$('.deletable').remove();

			Get(BaseUrl,"admin/bugs/all").then(function(items){
				infoObject.items = items;
				var result = BugReportTemplateFunction(infoObject);
				$('.wrapper').append(result);

				$('.Complete').each(function(){
					var This = $(this);
					console.log(this);
					var name = $(this).attr('name');
					console.log(name);
					This.on('click', function(){
						console.log('delete');
						Get(BaseUrl, "admin/bugs/complete?bugId=" + name).then(function(response){
							console.log(response);
						},function(error){
							console.log(error);
						});	
						This.parent().find('bug-status').text('Completed');
						This.remove();					
					});
				});
				
			}, function(error){console.log(error);});
		});
		$('.nav_item:nth-of-type(5)').on('click',function(){
			infoObject.page = pages[4];
			$('.deletable').remove();
			var pushCard = PushTemplateFunction();
			$('.wrapper').append(pushCard);
			 $('form[name=sendPush]').submit(function(){
	
			    var formData = $(this).serializeArray();
				var pushData = 
				{
					type: formData[1].value,
					text: formData[0].value
				};
			 	Post(BaseUrl, "admin/push", pushData)
						.then(function(response){console.log(response);}, function(error){console.log(error);});
			    return false;
			  });

		});
		$('.nav_item:nth-of-type(6)').on('click',function(){
			infoObject.page=pages[5];
			$('.deletable').remove();
			localStorage.setItem('token', undefined);
			window.location.href='index.html';
		});
	}


	init();
});
