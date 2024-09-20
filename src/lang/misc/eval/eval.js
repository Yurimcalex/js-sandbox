// Eval: run a code string
let code = 'console.log("Hello!")';
eval(code);

let value1 = eval('1+1');
let value2 = eval('let i = 0; ++i');
console.log(value1, value2);


let a = 1;
function f() {
	let a = 3;
	eval('console.log(a)');
}
f();


let x = 10;
eval('x=20');
console.log(x);

eval('let y = 30; console.log(y)');
//console.log(y);


let n = 1000;
{
	let n = 3000;
	window.eval('console.log(n)');
}


let f1 = new Function('a', 'b', 'console.log(a + b)');
f1(10, 50);
// --------- block ---------


// Task 1 - Eval-calculator
class Calculator {
	calc() {
		let input = prompt('Expression', '');
		return eval(input);
	}
}

let calculator = new Calculator();
console.log(calculator.calc());