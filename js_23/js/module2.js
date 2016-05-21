define(
'module2',
['jquery'],
function(){
	var test=123;
	return {
		someMethod:function(){
			console.log('someMethod!');
		}
	};
}
);