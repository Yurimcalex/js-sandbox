let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2));

let sayHello = new Function('name', 'console.log("Hello " + name)');
sayHello('Jusmine');

let x = 100;
function f() {
	let x = 1;
	let g = new Function('console.log(x)');
	return g;
}

f()();

