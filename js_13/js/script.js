var dog={
  name:'Jack',
  age:12,
  color:'white'
};
var str=JSON.stringify(dog);
var obj=JSON.parse(str);
console.log(str);
console.log(obj);
localStorage.setItem('animal',str);
var test= localStorage.getItem('animal');
console.log(test);