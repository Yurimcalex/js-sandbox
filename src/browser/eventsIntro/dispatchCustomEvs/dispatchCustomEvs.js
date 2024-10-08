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
// ---1---
// --------- block ---------


// Bubbling example
document.addEventListener('textclick', function (e) {
	console.log(e.target.tagName + '#' + e.target.id + ' clicked!');
});

let event2 = new Event('textclick', { bubbles: true });
text.dispatchEvent(event2);
// ---2---
// --------- block ---------


// MouseEvent, KeyboardEvent and others
// Custom events
clickMe.addEventListener('clickbtn', function (e) {
	console.log(e.detail.btnId);
});

clickMe.dispatchEvent(
	new CustomEvent(
		'clickbtn',
		{
			bubbles: true,
			detail: { btnId: clickMe.id }
		}
	)
);
// ---3---
// --------- block ---------


// event.preventDefault()
rabbit.addEventListener('hide', function (e) {
	if (confirm('Call prevent default')) {
		e.preventDefault();
	}
});

hideBtn.onclick = function () {
	hideRabbit();
};

function hideRabbit() {
	let event = new CustomEvent('hide', { cancelable: true });
	if (!rabbit.dispatchEvent(event)) {
		console.log('The action was prevented by a handler!');
	} else {
		rabbit.hidden = true;
	}
}
// ---4---
// --------- block ---------


// Events-in-events are synchronous
menu.onclick = function () {
	console.log('start!!!');

	//menu.dispatchEvent(new CustomEvent('menu-open', { bubbles: true }));
	setTimeout(() => {
		menu.dispatchEvent(new CustomEvent('menu-open', { bubbles: true }));
	});

	console.log('end!!!');	
};

document.addEventListener('menu-open', () => console.log('nested!!!'));
// ---5---
