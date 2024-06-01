// Focusing: focus/blur
// Events focus/blur
inputEmail.onblur = function () {
	if (!inputEmail.value.includes('@')) {
		inputEmail.classList.add('invalid');
		error.innerHTML = 'Please enter a correct email';
	}
};

inputEmail.onfocus = function () {
	if (this.classList.contains('invalid')) {
		this.classList.remove('invalid');
		error.innerHTML = '';
	}
};


// Methofd focus/blur
uEmail.onblur = function () {
	if (!this.value.includes('@')) {
		this.classList.add('error');
		uEmail.focus();
	} else {
		this.classList.remove('error');
	}
};