let animal = 'cat';
let critter = animal;
console.log(critter);

let user = {
	name: 'Piter'
};

let person = user;
console.log(person.name);

person.age = 20;
console.log(user.age);

let employee = {
	name: 'Piter'
};
console.log(person === user, employee === user);

let clone = {};
for (let prop in user) clone[prop] = user[prop];
console.log(clone);


let player = {
	name: 'Castilia',
	age: 30,
};

let feature1 = { canSwim: true };
let feature2 = { canPlayTennis: true };

Object.assign(player, feature1, feature2);
console.log(player);

let playerClone = Object.assign({}, player);
console.log(playerClone);


let door = {
	type: 'inner',
	sizes: {
		height: 300,
		width: 100
	}
};

//let doorDeepClone = structuredClone(door);