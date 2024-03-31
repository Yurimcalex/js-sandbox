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