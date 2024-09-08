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


// Task 1 - Error creating an instance
class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
  	super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);


// Task 2 - Extended clock
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


class ExtendedClock extends Clock {
	constructor(template, precision = 1000) {
		super(template);
		this.precision = precision;
	}
	start() {
		this.render();
		this.timer = setInterval(() => this.render(), this.precision);
	}
}

let clock = new ExtendedClock({ template: 'h-m-s' });
clock.start();