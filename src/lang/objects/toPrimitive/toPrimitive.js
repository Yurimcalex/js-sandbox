let user = {
	name: 'Bob',
	age: 49,
	[Symbol.toPrimitive](hint) {
		return hint === 'string' ? this.name : this.age;
	}
};

//console.log(user);
//console.log(user - 1);


let box = {
	label: 'pens',
	amount: 10,
	toString() {
		return `This box is for ${this.label}`;
	},
	valueOf() {
		return this.amount;
	}
};

console.log(box == 10);