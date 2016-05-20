"use strict";

var script = {
	myPow: function myPow(num, power) {

		if (power === 0) return 1;
		if (power % 2 === 1) return this.myPow(num, power - 1) * num;else {
			var b = this.myPow(num, power / 2);
			return b * b;
		}
	}
};

try {
	module.exports = script;
} catch (e) {

	var num = prompt("Enter num x in \"x^y\":");
	var power = prompt("Enter power y in \"x^y\":");
	var newResult = script.myPow(num, power);
	console.log("result=" + newResult);
}

//# sourceMappingURL=script.js.map
//# sourceMappingURL=script.js.map
