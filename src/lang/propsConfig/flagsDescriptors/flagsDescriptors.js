// Property flags
let device = {
	type: 'mobile'
};

let typeProp = Object.getOwnPropertyDescriptor(device, 'type');
console.log(JSON.stringify(typeProp, null, 4));

Object.defineProperty(device, 'screen', {
	value: 400
});

console.log(Object.getOwnPropertyDescriptor(device, 'screen'));

// Non-writable
Object.defineProperty(device, 'type', {
	writable: false
});

Object.defineProperty(device, 'weight', {
	value: 250,
	writable: false,
	enumerable: true,
	configurable: true
});

console.log(Object.getOwnPropertyDescriptor(device, 'weight'));
// --------- block ---------


// Non-enumerable
device.toString = function () {
	console.log(`I am a ${this.type}`);
};

for (let prop in device) {
	console.log(prop);
}

Object.defineProperty(device, 'toString', {
	enumerable: false
});

for (let prop in device) {
	console.log(prop);
}
// --------- block ---------


// Non-configurable
device.color = 'blue';
Object.defineProperty(device, 'color', {
	configurable: false
});

device.color = 'purple';
console.log(device);
Object.defineProperty(device, 'color', {
	writable: false
});
// --------- block ---------


// Object.defineProperties
let user = {};
Object.defineProperties(user, {
	name: { value: 'Bob' },
	age: { value: 38, writable: true }
});

console.log(Object.getOwnPropertyDescriptor(user, 'age'));

let id = Symbol('id');
user[id] = 1;
let userProps = Object.getOwnPropertyDescriptors(user);
console.log(JSON.stringify(userProps, null, 4));
console.log(userProps);


let userClone = Object.defineProperties(
	user,
	Object.getOwnPropertyDescriptors(user)
);

console.log(userClone);