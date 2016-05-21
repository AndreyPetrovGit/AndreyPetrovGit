requirejs.config({
paths: {
	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'

},
shim:{
	'jquery':{
		exports: 'jQuery'
	}
}
});
require(
	[
		'module1',
		'jquery',
		'module2'
	],
	function(module1,$,module2)
	{
        console.log('$',$);
		console.log('module1',module1);
		console.log('module2',module2);
		module1.sayHello();
		module2.someMethod();
	}

	);