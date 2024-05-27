// Browser default actions
// Preventing browser actions
google.onclick = function () {
	return false;
};

youtube.onclick = function (e) {
	e.preventDefault();
};


// Example: the menu
menu.onclick = function (e) {
	if (e.target.nodeName != 'A') return;
	let href = e.target.getAttribute('href');
	console.log(href);
	return false;
};


// event.defaultPrevented
ccm.oncontextmenu = function (e) {
	console.log('Log to console about context menu!');
	//return false;
	e.preventDefault();
}

document.oncontextmenu = function (e) {
	if (e.defaultPrevented) return;
	console.log('Log to console about document context menu!');
	e.preventDefault();
};


// Task 1 - Why return false doesn't work
function handler() {
	console.log('handler...');
	return false;
}