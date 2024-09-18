let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2);
console.log(id1.toString(), id1.description);


let id = Symbol('id');
let user = {
	name: 'John',
	[id]: 1
};

console.log(user);

for (let key in user) {
	console.log(user[key]);
}


let clone = Object.assign({}, user);
console.log(clone);


let entity = Symbol.for('spyder');
let sameEntity = Symbol.for('spyder');

console.log(entity === sameEntity);
console.log(Symbol.keyFor(entity));