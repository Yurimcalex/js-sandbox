let items = new Map();
items.set('1', 20);
items.set(true, 'baloon');
items.set(20, '200');
console.log(items.size, items.get('1'));

let visitors = new Map();
visitors
	.set({ id: 1 }, { name: 'Bob' })
	.set({ id: 2 }, { name: 'Dilan' });

for (let key of visitors.keys()) {
	console.log(key);
}

for (let name of visitors.values()) {
	console.log(name);
}

for (let visitor of visitors) {
	console.log(visitor);
}

visitors.forEach((value, key, map) => console.log(key.id));


let fruitCart = new Map([
	['banana', 19],
	['pear', 3]
]);

console.log(fruitCart.get('banana'));


let room = {
	id: 1,
	size: 2,
	price: 300
};

let roomMap = new Map(Object.entries(room));
console.log(roomMap);

let fruit = Object.fromEntries(fruitCart.entries());
console.log(fruit);


let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);

for (let user of set) {
	console.log(user.name);
}

set.delete(john);
console.log(set.size, set.has(john));

for (let item of set) {
	console.log(item);
}

set.forEach((value, valueAgain, s) => console.log(value.name));


// task 1
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
	return Array.from(new Set(arr));
}

console.log(unique(values));


// task 2
let anagrs = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
	let obj = {};
	arr.forEach(w => obj[w.toLowerCase().split('').sort()] = w);
	return Object.values(obj);
}

console.log(aclean(anagrs));


// task 3
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");