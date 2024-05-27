// Dispatching custom events
// Event constructor
// dispatchEvent
btn1.onclick = function (e) {
	console.log('Clicked on btn1');
};

document.onclick = function (e) {
	console.log(e.target);
	console.log(e.isTrusted ? 'real click' : 'generated click');
};

let event1 = new Event('click', { bubbles: true });
setTimeout(() => {
	btn1.dispatchEvent(event1);
}, 5000);