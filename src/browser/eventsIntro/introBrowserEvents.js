// Introduction to browser events
// Event handlers
btn1.onclick = function () {
	console.log('Cool!!!');
};
btn1.onclick = null;

btn1.onclick = function () {
	console.log(this.innerHTML);
}


// addEventListener
function handler1() {
	console.log('handler1');
}

function handler2() {
	console.log('handler2');
}

btn1.addEventListener('click', handler1);
btn1.addEventListener('click', handler2);

document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM built!');
});


// Event object
btn2.onclick = function (e) {
	console.log(e.type + ' at ' + e.currentTarget);
	console.log('Coords: ' + e.clientX + ',' + e.clientY);
};


// Object handlers: handleEvent
let obj = {
	handleEvent(e) {
		console.log(e.type + ' at ' + e.currentTarget + ' : handler3')
	}
};

btn2.addEventListener('click', obj);

class Menu {
	handleEvent(e) {
		switch (e.type) {
			case 'mousedown':
				btn3.innerHTML = 'Mouse button pressed';
				break;
			case 'mouseup':
				btn3.innerHTML += '... and releases';
				break;
		}
	}
}

let menu = new Menu();
btn3.addEventListener('mousedown', menu);
btn3.addEventListener('mouseup', menu);


class Menu_1 {
	handleEvent(e) {
		let method = `on${e.type[0].toUpperCase()}${e.type.slice(1)}`;
		this[method](e);
	}

	onClick(e) {
		console.log('Menu clicked!');
	}
}

btn4.addEventListener('click', new Menu_1());


// Task 1 - Hide on click
hide_text.onclick = function () {
	//p_text.style.display = 'none';
	p_text.hidden = true;
};

// Task 2 - Hide self
btn5.onclick = function (e) {
	this.hidden = true;
}