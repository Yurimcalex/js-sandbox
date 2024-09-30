// Popups and window methods
//window.open('https://google.com');

// Popup blocking
popup.onclick = () => {
	window.open('https://google.com');
};
// ---1---
// --------- block ---------


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
// ---2---
// --------- block ---------


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
// ---3---
// --------- block ---------


// Accessing window from popup
btn1.onclick = () => {
	let nw = window.open('about:blank', 'Hi', 'width=200,height=200');
	nw.document.write(
		'<script>window.opener.document.body.innerHTML="Test"<\/script>'
	);
};
// ---4---
// --------- block ---------


// Closing a popup
btn2.onclick = () => {
	let nw = window.open('/', 'example', 'width=300,height=300');
	nw.onload = function () {
		setTimeout(() => {
			nw.close();
			console.log(nw.closed);
		}, 3000);
	};
};
// ---5---
// --------- block ---------


// Moving and resizing
btn3.onclick = () => {
	let nw = window.open('/', 'example', 'width=300,height=300');
	setTimeout(() => {
		nw.moveBy(20, 20);

		setTimeout(() => {
			nw.moveTo(100, 100);

			setTimeout(() => {
				nw.resizeBy(30, 30);

				setTimeout(() => {
					nw.resizeTo(500, 500);
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
};
// ---6---
