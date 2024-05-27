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