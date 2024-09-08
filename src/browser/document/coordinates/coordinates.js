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
//document.body.append(message);


// Task 1 - find window coordinates of the field
function getFieldCoords(field) {
	let box = field.getBoundingClientRect();
	return {
		coord1: [box.left, box.top],
		coord2: [box.right, box.bottom],
		coord3: [box.left + field.clientLeft, box.top + field.clientTop],
		coord4: [
			box.left + field.clientLeft + field.clientWidth,
			box.top + field.clientTop + field.clientHeight
		]
	}
}

function createMark(x, y) {
	let div = document.createElement('div');
	div.style.cssText = `
		position: fixed;
		background-color: red;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		left: ${x}px;
		top: ${y}px;
	`;
	return div;
}

let fieldCoords = getFieldCoords(field);
console.log(fieldCoords);

// Object.values(fieldCoords).map(([x, y]) => {
// 	document.body.append(createMark(x, y));
// });


// Task 2 - show a note near the element
// Task 3 - show a note near the element(absolute)
// Task 3 - position the note inside(absolute)
function positionAt(anchor, position, elem) {
	let coords = getCoords(anchor);
	elem.style.position = 'absolute';
	if (position === 'top-out') {
		elem.style.top = coords.top - elem.offsetHeight + 'px';
		elem.style.left = coords.left + 'px';
	} else if (position === 'right-out') {
		elem.style.top = coords.top + 'px';
		elem.style.left = coords.right + 'px';
	} else if (position === 'bottom-out') {
		elem.style.top = coords.bottom + 'px';
		elem.style.left = coords.left + 'px';
	} else if (position === 'top-in') {
		elem.style.top = coords.top + 'px';
		elem.style.left = coords.left + 'px';
	} else if (position === 'right-in') {
		elem.style.top = coords.top + 'px';
		elem.style.left = coords.right - elem.offsetWidth + 'px';
	} else {
		elem.style.top = coords.bottom - elem.offsetHeight + 'px';
		elem.style.left = coords.left + 'px';
	}
}

function showNote(anchor, position, html) {
	let note = document.createElement('div');
	note.style.cssText = `
		padding: 5px;
		border: 1px solid gray;
	`;
	note.innerHTML = html;
	document.body.append(note);
	positionAt(anchor, position, note);
}

['top-out', 'right-out', 'bottom-out',
 'top-in', 'right-in', 'bottom-in'].forEach(p => {
	showNote(example, p, p);
});