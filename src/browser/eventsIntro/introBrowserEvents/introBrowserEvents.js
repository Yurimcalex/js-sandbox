// Introduction to browser events
// Event handlers
btn1.onclick = function () {
	console.log('Cool!!!');
};
btn1.onclick = null;

btn1.onclick = function () {
	console.log(this.innerHTML);
}
// ---1---
// --------- block ---------


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
// --------- block ---------


// Event object
btn2.onclick = function (e) {
	console.log(e.type + ' at ' + e.currentTarget);
	console.log('Coords: ' + e.clientX + ',' + e.clientY);
};
// --------- block ---------


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
// ---2---
// --------- block ---------


// Task 1 - Hide on click
hide_text.onclick = function () {
	//p_text.style.display = 'none';
	p_text.hidden = true;
};
// ---3---
// --------- block ---------


// Task 2 - Hide self
btn5.onclick = function (e) {
	this.hidden = true;
}
// ---4---
// --------- block ---------


// Task 3 - Which handlers run
btn6.addEventListener('click', () => console.log('1'));
btn6.removeEventListener('click', () => console.log('1'));
btn6.onclick = () => console.log('2');
// ---5---
// --------- block ---------


// Task 4 - Move the ball across the field
function moveBall(field, ball) {
	field.addEventListener('click', function (e) {
		let { clientX: mx, clientY: my } = e;
		let { left: fx, top: fy } = field.getBoundingClientRect();

		let bx = mx - fx - field.clientLeft - ball.offsetWidth / 2;
		let by = my - fy - field.clientTop - ball.offsetHeight / 2;

		if (bx < 0) bx = 0;
		else if (bx > field.clientWidth - ball.offsetWidth) {
			bx = field.clientWidth - ball.offsetWidth;
		}

		if (by < 0) by = 0;
		else if (by > field.clientHeight - ball.offsetHeight) {
			by = field.clientHeight - ball.offsetHeight;
		}

		ball.style.left = bx + 'px';
		ball.style.top = by + 'px';
	});
}

moveBall(field, ball);
// ---6---
// --------- block ---------


// Task 5 - Create a sliding menu
function createSlidingMenu() {
	let title = slidingMenu.firstElementChild;
	let mark = title.firstElementChild;
	let body = slidingMenu.lastElementChild;

	let isVisible = true;
	title.onclick = function (e) {
		if (isVisible) {
			body.hidden = true;
			mark.textContent = '▶';
			isVisible = false;
		} else {
			body.hidden = false;
			mark.textContent = '▼';
			isVisible = true;
		}
	}
}

createSlidingMenu();
// ---7---
// --------- block ---------


// Task 6 - Add a closing button
function addClosingButton() {
	let panes = document.querySelectorAll('.pane');
	panes.forEach(pane => {
		pane.style.position = 'relative';
		let closeBtn = document.createElement('button');
		closeBtn.className = 'remove-button';
		closeBtn.textContent = '[x]';
		closeBtn.style.position = 'absolute';
		closeBtn.style.top = '5px';
		closeBtn.style.right = '5px';
		pane.append(closeBtn);
		closeBtn.onclick = function () {
			pane.hidden = true;
		};
	});
}

addClosingButton();
// ---8---
// --------- block ---------


// Task 7 - carousel
function createCarousel() {
	let [back, forward] = document.querySelectorAll('.arrow');
	let container = document.querySelector('.carousel ul');
	let w = container.children[0].offsetWidth;
	let amount = container.children.length;
	let n = 3;
	let shift = 0;
	
	forward.onclick = function () {
		shift += n;
		if (shift > amount - n) shift = amount - n;
		container.style.marginLeft = -shift * w + 'px';
	};

	back.onclick = function () {
		shift -= n;
		if (shift < 0) shift = 0;
		container.style.marginLeft = -shift * w + 'px';
	};
}

createCarousel();
// ---9---
