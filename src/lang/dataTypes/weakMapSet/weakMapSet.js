let weakMap = new WeakMap();

let item = {
	name: 'ball'
};

weakMap.set(item, 'football');
console.log(weakMap.get(item));
item = null;
console.log(weakMap.get(item));


let visitCountMap = new WeakMap();
function countUser(user) {
	let count = visitCountMap.get(user) || 0;
	visitCountMap.set(user, count + 1);
}

let user1 = { name: 'Bob' };
let user2 = { name: 'Sonia' };
countUser(user1);
countUser(user2);
countUser(user1);
console.log(visitCountMap.get(user1));
user1 = null;


let cache = new WeakMap();
function process(f, arg) {
	if (cache.has(arg)) return cache.get(arg);
	let res = f(arg);
	cache.set(arg, res);
	return res;
}

function fn(o) {
	return o;
}

let o1 = { x: 1 }, o2 = { x: 2 };

process(fn, o1);
console.log(cache.get(o1));


let visitedSet = new WeakSet();
let user3 = { name: 'Mary' };
let user4 = { name: 'Victor' };
visitedSet.add(user3);

console.log(visitedSet.has(user3), visitedSet.has(user4));


// task 1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));


// task 2
let messages1 = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMsgs = new WeakMap();
function readMsg(msg) {
	readMsgs.set(msg, new Date());
}

let m = messages1[0];
readMsg(m);
console.log(readMsgs.get(m));