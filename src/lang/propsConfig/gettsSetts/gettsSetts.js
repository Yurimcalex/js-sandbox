// Getters and setters
let user = {
	fname: 'Buba',
	lname:'Smith',
	get fullname() {
		console.log(`I'm ${this.fname} ${this.lname}`);
	},

	set fullname(value) {
		[this.fname, this.lname] = value.split(' ');
	}
};

user.fullname = 'Hiley Smith';
console.log(user.fullname);
// --------- block ---------


// Accessor descriptors
user.items = [];
Object.defineProperty(user, 'pocket', {
	get() {
		return this.items.join(', ') || 'empty'
	},
	set(value) {
		this.items.push(value);
	},
	enumerable: true
});

user.pocket = 'banana';
user.pocket = 'pen';
console.log(user.pocket);
// --------- block ---------


// Smarter getters/setters
let player = {
	get name() {
		return this._name;
	},
	set name(value) {
		if (value.length < 3) {
			console.log('Its too short!');
			return;
		}
		this._name = value;
	}
};

player.name = 'Ou';
// --------- block ---------


// Using for compatibility
function User(name, birthday) {
	this.name = name;
	this.birthday = birthday;
	Object.defineProperty(this, 'age', {
		get () {
			return new Date().getFullYear() - this.birthday.getFullYear();
		}
	});
}

let john = new User('John', new Date(1980));
console.log(john.age);