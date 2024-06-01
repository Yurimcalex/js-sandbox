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


// Delegation: focusin/focusout
userData.addEventListener('focusin', () => {
	userData.classList.add('focused');
});

userData.addEventListener('focusout', () => {
	userData.classList.remove('focused');
});


// Task 1 - Editable div
function ced() {
	let div = document.createElement('div');
	div.textContent = 'Click me and edit!'
	document.body.append(div);

	let isEdit = false;

	div.onclick = function () {
		if (isEdit) return;
		isEdit = true;
		let textarea = document.createElement('textarea');
		textarea.value = div.innerHTML;
		div.innerHTML = '';
		div.append(textarea);

		textarea.onblur = clear;

		textarea.onkeydown = function (e) {
			if (e.code === 'Enter') {
				clear();
			}
		};

		function clear() {
			div.innerHTML = textarea.value;
			textarea = null;
			isEdit = false;
		}
	};
}

ced();