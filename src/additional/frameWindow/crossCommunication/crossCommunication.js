// Cross-window communication
// Sane origin
// In action: iframe
// iframe.onload = function () {
// 	let iframeWindow = iframe.contentWindow;
// 	try {
// 		let doc = iframe.contentDocument;
// 		console.log(doc);
// 	} catch (err) {
// 		console.log(err);
// 	}

// 	try {
// 		let href = iframe.contentWindow.location.href;
// 	} catch (err) {
// 		console.log(err);
// 	}

// 	//iframe.contentWindow.location = '/';
// 	//iframe.onload = null;
// };

// iframeSame.onload = function () {
// 	iframeSame.contentDocument.body.prepend('Hello, world!');
// };
// ---1---
// --------- block ---------


// Iframe: wrong document pitfall
let oldDoc = iframeEarly.contentDocument;
iframeEarly.onload = function () {
	let newDoc = iframeEarly.contentDocument;
	//console.log(oldDoc === newDoc);
};

let timer = setInterval(() => {
	let newDoc = iframeEarly.contentDocument;
	if (newDoc === oldDoc) return;
	console.log('New document is loaded!');
	clearInterval(timer);
}, 100);
// ---2---
// --------- block ---------


// Collection: window.frames
//console.log(window.frames);
//console.log(iframeEarly.contentWindow == frames[2]);
//console.log(iframeEarly.contentWindow == frames.early);
// --------- block ---------


// Cross-window messaging
let win = window.frames.early;

iframeEarly.contentWindow.postMessage('message', '*');

window.addEventListener('message', function (event) {
	console.log('origin => ', event.origin);
	console.log('received: ', event.data);
});