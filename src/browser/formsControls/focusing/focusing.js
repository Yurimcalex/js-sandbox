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


// Task 2 - Edit TD on click
let tbl = document.getElementById('bagua-table');
let isEditing = false;
tbl.onclick = function (e) {
	if (isEditing) return;
	isEditing = true;
	let td = e.target.closest('td');
	if (td && tbl.contains(td)) {
		td.style.position = 'relative';
		let [container, textarea, okBtn, cancelBtn] =
			createEditingArea(td.clientWidth, td.clientHeight, td.innerHTML);
		td.append(container);
		textarea.focus();

		okBtn.onclick = onInput;
		cancelBtn.onclick = onInput;

		function onInput() {
			td.innerHTML = textarea.value;
			container.remove();
			isEditing = false;
		}
	}
}

function createEditingArea(width, height, content) {
	let area = document.createElement('div');
	area.style.cssText = `
		position: absolute;
		top: 0;
		left: 0;
	`;

	let text = document.createElement('textarea');
	text.style.cssText = `
		display: block;
		height: ${height}px;
		width: ${width}px;
		padding: 0;
		outline: none;
		border: none;
		resize: none;
	`;
	text.value = content;

	let ok = document.createElement('button');
	ok.textContent = 'Ok';

	let cancel = document.createElement('button');
	cancel.textContent = 'Cancel';

	area.append(text, ok, cancel);

	return [area, text, ok, cancel];
}


// Task 3 - Keyboard-driven mouse
let topShift = 0;
let leftShift = 0;
let shift = 10;

mouse.onclick = function () {
	mouse.tabIndex = -1;
	let coords = this.getBoundingClientRect();
	mouse.style.position = 'relative';

	mouse.onkeydown = function (e) {
		e.preventDefault();
		let code = e.code;
		switch (code) {
			case 'ArrowLeft':
				leftShift -= shift;
				break;
			case 'ArrowRight':
				leftShift += shift;
				break;
			case 'ArrowUp':
				topShift -= shift;
				break;
			case 'ArrowDown':
				topShift += shift;
				break;
		}
		mouse.style.top = topShift + 'px';
		mouse.style.left = leftShift + 'px';
	};

	mouse.onblur = function () {
		mouse.onkeydown = null;
		mouse.onblur = null;
		mouse.removeAttribute('tabindex');
	};
};