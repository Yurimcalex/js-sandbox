// Popups and window methods
//window.open('https://google.com');

// Popup blocking
popup.onclick = () => {
	window.open('https://google.com');
};


// Example: a minimalistic window
let params = [
	'scrollbar=no',
	'resizable=no',
	'status=no',
	'location=no',
	'toolbar=no',
	'menubar=no',
	'width=0',
	'height=0',
	'left=-1000',
	'top=-1000'
];

let params1 = [
	'scrollbar=no',
	'resizable=no',
	'status=no',
	'location=no',
	'toolbar=no',
	'menubar=no',
	'width=600',
	'height=300',
	'left=100',
	'top=100'
];

openw.onclick = () => {
	open('/', 'test', params1);
};


// Accessing popup from window
access.onclick = () => {
	let nw = window.open('about:blank', 'hello', 'width=200,height=200');
	nw.document.write('Hello, world!');
};

another.onclick = () => {
	let nw = window.open('/', 'example', 'width=300,height=300');
	nw.focus();
	console.log(nw.location.href);

	nw.onload = function() {
		let html = `<div style="color:green">Welcome!</div>`;
		nw.document.body.insertAdjacentHTML('afterbegin', html);
	};
};