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


// Methods focus/blur
uEmail.onblur = function () {
	if (!this.value.includes('@')) {
		this.classList.add('error');
		uEmail.focus();
	} else {
		this.classList.remove('error');
	}
};


// Allow focusing on any element: tabindex
let li = document.createElement('li');
li.textContent = 'Three';
li.tabIndex = 3;
tabList.append(li);