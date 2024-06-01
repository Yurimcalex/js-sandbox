// Events: change, input, cut, copy, paste
// Event: change
inp1.onchange = function () {
	console.log(this.value);
};

sel1.onchange = function () {
	console.log(this.value);
};


// Event: input
inp2.oninput = function () {
	inp2Result.innerHTML = inp2.value;
};


// Events: cut, copy, paste
inp3.onpaste = function (e) {
	console.log('paste: ' + e.clipboardData.getData('text/plain'));
	e.preventDefault();
};

inp3.oncut = function (e) {
	console.log(e.type + '-' + document.getSelection());
	e.preventDefault();
};