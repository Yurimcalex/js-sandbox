// Rerst parameters
function sum(...args) {
	let sum = 0;
	for (let n of args) sum += n;
	return sum;
}

console.log(sum(1, 3, 5));


function showName(fname, lname, ...titles) {
	console.log(`full name: ${fname} ${lname}, ${titles.join(' * ')}`);
}

showName('Bob', 'Kilisha', 'Cool guy', 'Dancer');


// The arguments variable
function f() {
	let innerF = () => console.log(arguments);
	innerF(3, 4);
}

f(1, 2);


// Spread syntax
let numbs = [1, 3, 5, 2, 1, 3];
console.log(Math.max(...numbs));

let moreNumbs = [...numbs, 3, 5, 7, 1, 6];
console.log(sum(...moreNumbs));


let str = 'Some string';
let chars1 = [...str];
let chars2 = Array.from(str);

console.log(chars1, chars2);


// Copy an array/object
let fruit = ['apple', 'banana'];
let fruitCopy = [...fruit];
console.log(fruit === fruitCopy);


let point = {x: 1, y: 1};
let pointCopy = {...point};

console.log(pointCopy);