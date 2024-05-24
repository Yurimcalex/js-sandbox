// Introduction to browser events
// Event handlers
btn1.onclick = function () {
	console.log('Cool!!!');
};
btn1.onclick = null;

btn1.onclick = function () {
	console.log(this.innerHTML);
}