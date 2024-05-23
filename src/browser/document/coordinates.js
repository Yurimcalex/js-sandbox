// Coordinates
// Element coordinates: getBoundingClientRect
let coords = example.getBoundingClientRect();
console.log(coords);


// elementFromPoint(x, y)
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

console.log(elem);


// Using for fixed position
function createMessageUnder(elem, html) {
	let message = document.createElement('div');
	message.style.cssText = `
		position: fixed;
		color: red;
	`;

	let coords = elem.getBoundingClientRect();

	message.style.left = coords.left + 'px';
	message.style.top = coords.bottom + 'px';

	message.innerHTML = html;
	return message;
}

// let message = createMessageUnder(example, 'Some message under...');
// document.body.append(message);
// setTimeout(() => message.remove(), 5000);


// Document coordinates
function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset
	};
}

function createMessageUnder_1(elem, html) {
	let message = document.createElement('div');
	message.style.cssText = `
		position: absolute;
		color: purple
	`;
	let coords = getCoords(elem);
	message.style.top = coords.bottom + 'px';
	message.style.left = coords.left + 'px';
	message.innerHTML = html;
	return message;
}

let message = createMessageUnder_1(example, '<b>Message</b>');
document.body.append(message);