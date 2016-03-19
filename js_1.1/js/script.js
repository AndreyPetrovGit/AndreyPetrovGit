var num=prompt("Enter num x in \"x^y\":");                               
var pover=prompt("Enter pover y in \"x^y\":");

function myPow (num,pover){

	if (pover == 0)
		return 1;
	if (pover % 2 == 1)
		return myPow (num, pover-1) * num;
	else {
		var b = myPow (num, pover/2);
		return b * b;
	}
}

var newResult=myPow(num,pover);
console.log("result="+newResult);
