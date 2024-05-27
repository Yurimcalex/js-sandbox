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


// Bubbling example
document.addEventListener('textclick', function (e) {
	console.log(e.target.tagName + '#' + e.target.id + ' clicked!');
});

let event2 = new Event('textclick', { bubbles: true });
text.dispatchEvent(event2);


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