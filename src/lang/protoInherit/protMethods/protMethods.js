let animal = {
	eats: true
};

let rabbit = Object.create(animal);
console.log(Object.getPrototypeOf(rabbit) === animal);
Object.setPrototypeOf(rabbit, {});
console.log(rabbit.eats);

let rabb1 = Object.create(animal, {
	jumps: {
		value: true
	}
});

console.log(rabb1.jumps);

let rabbitClone = Object.create(
	Object.getPrototypeOf(rabbit),
	Object.getOwnPropertyDescriptors(rabbit)
);

console.log(rabbitClone);


let obj = Object.create(null);
obj['__proto__'] = 'some value';
console.log(obj);
// --------- block ---------


// Task 1 - add toString to the dictionary
let dict = Object.create(null);
dict.apple = 'Apple';
dict['__proto__'] = 'test';
Object.defineProperty(dict, 'toString', {
	value: function () {
		return Object.keys(this).join();
	}
});

console.log(dict.toString());
for (let key in dict) {
	console.log(key);
}
// --------- block ---------


// Task 2 - the difference between calls
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit1 = new Rabbit("Rabbit");
rabbit1.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit1).sayHi();
rabbit1['__proto__'].sayHi();