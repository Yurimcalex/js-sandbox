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


// Task 1 - Deposit calculator
let form = document.forms.calculator;
form.onchange = function (e) {
	let initial = +form.money.value;
	let years = +form.months.value / 12;
	let interest = +form.interest.value / 100;

	let result = Math.round(initial * (1 + interest) ** years);

	window['money-before'].textContent = initial;
	window['money-after'].textContent = Math.round(result);
	
	let h = result.toString().slice(0, 3);
	while (h.length < 3) {
		h += '0';
	}

	window['height-after'].style.height = h + 'px';
}