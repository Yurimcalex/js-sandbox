// var has no block scope
if (true) {
	var x = 1;
}
console.log(x);

for (var i = 0; i < 10; i += 1) {}
console.log(i);

function f() {
	var y = 2;
}
console.log(y);
// --------- block ---------


// var tolerates redeclaretions
var leaf = 'big';
var leaf = 'small';
console.log(leaf);

function g() {
	console.log(y);
	if (false) {
		var y;
	}
	y = 10;
}

g();
// --------- block ---------


// IIFE
(function () {
	var someValue;
})();
//console.log(someValue);