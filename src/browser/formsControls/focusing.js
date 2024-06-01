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