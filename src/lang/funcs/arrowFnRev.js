// Arrow functions have no this
let room = {
	number: 1,
	items: ['Sofa', 'Drawer'],
	list() {
		this.items.forEach((item) => {
			console.log(`room ${this.number} has ${item}`)
		});
	}
};

room.list();

// Arrows have no arguments
function defer(f, ms) {
	return function () {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");