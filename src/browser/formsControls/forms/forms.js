// Forms: events and method submit
// Event: submit
form1.onsubmit = function () {
	console.log('Submit!');
	return false;
};

form1.elements[1].onclick = function () {
	console.log('Click!');
};


// Method: submit
let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';
form.innerHTML = '<input name="q" value="test">';
document.body.append(form);

setTimeout(() => {
	//form.submit();
}, 3000);


// Task 1 - Modal form
function showPrompt(html, callback) {
	let container = document.createElement('div');
	container.className = 'modal-container';
	let form = document.createElement('form');
	form.className = 'modal-form';
	form.innerHTML = `
		${html}
		<br/>
		<input type="text" name="text">
		<br/>
		<input type="submit" name="ok" value="Ok">
		<input type="button" name="cancel" value="Cancel">
	`;

	document.body.append(form);
	document.body.classList.add('hideOverflow');
	document.body.append(container);

	function clear() {
		container.remove();
		form.remove();
		document.body.classList.remove('hideOverflow');
	}

	let text = form.elements.text;
	let cancel = form.elements.cancel;

	text.focus();
	form.onsubmit = function () {
		let inp = text.value;
		if (!inp) {
			return false;
		}
		callback(inp);
		clear();
		return false;
	};

	cancel.onclick = function () {
		callback(null);
		clear();
	};

	text.onkeydown = function (e) {
		if (e.code === 'Tab') {
			cancel.focus();
			return false;
		}
	};

	cancel.onkeydown = function (e) {
		if (e.code === 'Tab') {
			text.focus();
			return false;
		}
	};
}

showPrompt('Enter something<br>...smart :)', function (value) {
	console.log(value);
});