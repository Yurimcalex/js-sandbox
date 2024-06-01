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