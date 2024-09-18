let fruit = ['banana', 'apple', 'pear'];
let [fr1, fr2, fr3] = fruit;
console.log(fr1, fr2, fr3);

let centence = 'When I was young the things were better!';
let [word1, word2, ,word4] = centence.split(' ');
console.log(word1, word2, word4);

let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

let obj = {};
[obj.a, obj.b, obj.c] = 'abc';
console.log(obj);
// --------- block ---------


let user = {
  name: "John",
  age: 30
};
for (let [key, value] of Object.entries(user)) {
	console.log(key, value);
}

let user1 = new Map();
user1.set("name", "John");
user1.set("age", "30");
for (let [key, value] of user1) console.log(key, value);
// --------- block ---------


let v1 = 1;
let v2 = 10;
[v1, v2] = [v2, v1];
console.log(v1, v2);

let phraze = 'Do it Ok Buddy!';
let [w1, ...restWords] = phraze.split(' ');
console.log(w1, restWords);

let [fname, lastName = getLastName()] = ['Piter'];
function getLastName() {
	return 'Stoyankivich';
}
console.log(fname, lastName);
// --------- block ---------


let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width: w, height: h, count: co = 100} = options;
console.log(title, w, h, co);


let options1 = {
  title: "Menu",
  height: 200,
  width: 100
};
let {title: t1, ...restOpt1} = options1;
console.log(t1, restOpt1);

let va1, va2;
({va1, va2} = {va1: 10, va2: 100});
console.log(va1, va2);
// --------- block ---------


let options2 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let {
	size: { width: w2, height: h2 },
	items: [item1, item2],
	extra
} = options2;

console.log(w2, h2, item1, item2, extra);
// --------- block ---------


let options3 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function f({title = 'Title', width = 100, height = 100, item2 = []} = {}) {
	return;
}
// --------- block ---------


// task 1 - destructuring assignment
let visitor = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = visitor;
console.log(name, age, isAdmin);
// --------- block ---------


// task 2 - the maximal salary
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
	let result = null;
	let max = 0;
	for (let [name, value] of Object.entries(salaries)) {
		if (value > max) {
			max = value;
			result = name;
		}
	}
	return result;
}

console.log(topSalary(salaries));