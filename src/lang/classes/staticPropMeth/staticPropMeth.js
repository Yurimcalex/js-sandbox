class Fruit {
	static meth1() {
		console.log(this === Fruit);
	}
}

Fruit.meth2 = function () {
	console.log(this === Fruit);
}

Fruit.meth1();
Fruit.meth2();


class Song {
	constructor(name, text) {
		this.name = name;
		this.text = text;
	}

	static createDraft() {
		return new this('', '');
	}
}

let song1 = new Song('Happy!', 'La-la-la');
let song2 = Song.createDraft();

console.log(song1, song2);

// Static properties
class SomeClass {
	static prop = 'Some value';
}

console.log(SomeClass.prop);


// Inheritance of static properties and methods
class Parent {
	static type = 'main';
	static showType() {
		console.log(this.type);
	}
}

class Child extends Parent {
	static type = 'major';
}

Child.showType();


// Task 1 - Class extends Object?
class Rabbit extends Object {
  constructor(name) {
  	super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

console.log(rabbit.hasOwnProperty('name'));