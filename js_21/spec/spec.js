var app=require('../js/app.js');
describe("app", function() //xdescribe
{

  xit("it shoule call sayHello method", function() {
  	//prepare
  	var result;
  	//act
  	result=app.sayHello('Vasya');
  	//assert
  	//expect(result).not.toBeUndefined('Hello, Vasya');//===
//expect(result).toNull('Hello, Vasya');//===
    //expect(result).toBe('Hello, Vasya');//===
    expect(result).toEqual('Hello, Vasya');//==
  });

   it("sum()", function() {
  	//prepare
  	var result;
  	//act
  	result=app.sum(1,2);
  	//assert

    //expect(result).toBe('Hello, Vasya');//===
    expect(result).toEqual(3);//==
  });
});