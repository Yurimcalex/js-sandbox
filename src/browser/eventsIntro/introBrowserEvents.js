// Introduction to browser events
// Event handlers
btn1.onclick = function () {
	console.log('Cool!!!');
};
btn1.onclick = null;

btn1.onclick = function () {
	console.log(this.innerHTML);
}


// addEventListener
function handler1() {
	console.log('handler1');
}

function handler2() {
	console.log('handler2');
}

btn1.addEventListener('click', handler1);
btn1.addEventListener('click', handler2);

document.addEventListener('DOMContentLoaded', function () {
	console.log('DOM built!');
});