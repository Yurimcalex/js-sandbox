let arr = ['one', 'two', 'three'];
console.log(arr.splice(1, 1), arr);

arr.splice(0, 1, 'one', 'two');
console.log(arr);

arr.splice(3, 0, 'four');
console.log(arr);

arr.splice(-1, 0, 'apple');
console.log(arr);

let arr1 = arr.slice(0, 3);
console.log(arr1);

let arr2 = arr1.concat(['four', 'five'], 'six');
console.log(arr2);

arr2.forEach((v, i, a) => {
	console.log(v, i);
});

console.log(arr2.indexOf('five', 2));
console.log(arr2.includes('six'));
console.log(arr2.lastIndexOf('two'));


let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find((o, i, a) => o.id === 1);
console.log(user);
console.log(users.findIndex(u => u.id === 2));


let someUsers = users.filter(u => u.id > 1);
console.log(someUsers);

let names = users.map(u => u.name);
console.log(names);

let numbs = [1, 10, 24, 6, 0, 2];
numbs.sort((a, b) => a - b);
console.log(numbs);

numbs.reverse();
console.log(numbs);

console.log('1, 2, 3'.split(', ').join('_'));

let chCount = arr2.reduce((acc, v) => acc + v.length, 0);
console.log(chCount);

console.log(Array.isArray(numbs));

let obj = {
	n: 5,
	f(arg) { return arg > this.n }
};

console.log(numbs.filter(obj.f, obj));


// task 1
function camelize(str) {
	return str
		.split('-')
		.map((s, i) => i > 0 ? s[0].toUpperCase() + s.slice(1) : s)
		.join('');
}

console.log(camelize("-webkit-transition"));


// task 2
function filterRange(arr, a, b) {
	return arr.filter(n => n >= a && n <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4));


// task 3
function filterRangeInPlace(arr, a, b) {
	arr.forEach((n, i, a) => {
		if (a <= n && n <= b) a.splice(i, 1);
	});
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));


// task 4
let a1 = [5, 2, 1, -10, 8];
a1.sort((a, b) => b - a);
console.log(a1);


// task 5
let arrStr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
	return arr.slice().sort();
}
console.log(copySorted(arrStr), '------> task 5');


// task 6
function Calculator() {
	this.calculate = function (str) {
		let parts = str.split(' ');
		return this[parts[1]](+parts[0], +parts[2]);
	};
	this['+'] = function (a, b) { return a + b; };
	this['-'] = function (a, b) { return a - b; };
	this.addMethod = function (name, func) {
		this[name] = func;
	};
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate('3 * 7'));


// task 7
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users1 = [ john, pete, mary ];

let names1 = users1.map(user => user.name);
console.log(names1);


// task 8
let users2 = [ { name: "John", surname: "Smith", id: 1 },
							 { name: "Pete", surname: "Hunt", id: 2 },
							 { name: "Mary", surname: "Key", id: 3 } ];

let usersMapped = users2.map(user => (
	{ id: user.id, fullName: user.name + ' ' + user.surname }
));

console.log(usersMapped);


// task 9
let arr3 = [
	{ name: "John", age: 25 },
	{ name: "Pete", age: 30 },
	{ name: "Mary", age: 28 }
];

function sortByAge(users) {
	users.sort((u1, u2) => u1.age - u2.age);
}

sortByAge(arr3);
console.log(arr3);


// task 10
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function shuffle(arr) {
	arr.sort((a, b) => {
		let r = randomInteger(1, 3);
		if (r === 1) return -1;
		else if (r === 2) return 0;
		else return 1;
	});
}

let arr4 = [1, 2, 3];
shuffle(arr4);
console.log(arr4);


// task 11
function getAverageAge(users) {
	return users.reduce((acc, u) => acc + u.age, 0) / users.length;
}

console.log(getAverageAge(arr3));


// task 12
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
	return arr.reduce((acc, item) => 
		acc.includes(item) 
			? acc
			: acc.concat(item) , []);
}

console.log(unique(strings));


// task 13
let users4 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
	return users.reduce((acc, u) => {
		acc[u.id] = u;
		return acc;
	}, {});
}

console.log(groupById(users4));