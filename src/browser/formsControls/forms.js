// Forms: events and method submit
// Event: submit
form1.onsubmit = function () {
	console.log('Submit!');
	return false;
};

form1.elements[1].onclick = function () {
	console.log('Click!');
};


// Methid: submit
let form = document.createElement('form');
form.action = 'https://google.com/search';
form.method = 'GET';
form.innerHTML = '<input name="q" value="test">';
document.body.append(form);

setTimeout(() => {
	//form.submit();
}, 3000);