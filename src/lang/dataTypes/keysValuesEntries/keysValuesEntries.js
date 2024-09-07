let id = Symbol('id');
let user = {
	name: 'Bob',
	age: 29,
	[id]: 1
};

let uKeys = Object.keys(user);
let uValues = Object.values(user);
let uEntries = Object.entries(user);

console.log(uKeys, uValues, uEntries);

for (let v of Object.values(user)) {
	console.log(v);
}

let uSymbols = Object.getOwnPropertySymbols(user);
console.log(uSymbols);

let uOwnKeys = Reflect.ownKeys(user);
console.log(uOwnKeys);


let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doubledPrices = Object.fromEntries(
	Object.entries(prices).map(p => [p[0], p[1] * 2])
);

console.log(doubledPrices);


// task 1 - sum the properties
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
	let sum = 0;
	for (let value of Object.values(salaries)) {
		sum += value;
	}
	return sum;
}

console.log(sumSalaries(salaries));


// task 2 - count properties
let user1 = {
  name: 'John',
  age: 30
};

function count(obj) {
	return Object.keys(obj).length;
}

console.log(count(user1));