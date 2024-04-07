// The extends keyword
class Box {
	constructor(name) {
		this.name = name;
		this.items = [];
	}

	put(item) {
		this.items.push(item);
	}

	showItems() {
		console.log(this.items);
	}
}

let box = new Box('items');


class DocumentBox extends Box {
	getAmount() {
		console.log(this.items.length);
	}
}


let documentBox = new DocumentBox('orders');
documentBox.put('order-1');
documentBox.showItems();
documentBox.getAmount();


// Overriding a method
class CandyBox extends Box {
	showItems() {
		console.log(this.items.join(', '));
	}
}

let candyBox = new CandyBox('candy');
candyBox.put('mars');
candyBox.put('snickers');
candyBox.showItems();


class PenBox extends Box {
	put(item) {
		console.log('added!');
		super.put(item);
	}
}

let penBox = new PenBox('pens');
penBox.put('pen1');


class SizedBox extends Box {
	constructor(name, size) {
		super(name);
		this.size = size;
	}
}

let box5 = new SizedBox('sized-box', 5);
console.log(box5);


// Overriding class fields: a tricky note
class ParentClass {
	prop = 'parent';
	constructor() {
		console.log(this.prop);
	}
}

class ChildClass extends ParentClass {
	prop = 'child';
}

new ParentClass();
new ChildClass();
