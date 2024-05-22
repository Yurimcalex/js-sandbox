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

let message = createMessageUnder(example, 'Some message under...');
document.body.append(message);
setTimeout(() => message.remove(), 5000);