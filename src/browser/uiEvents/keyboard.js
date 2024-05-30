// Keyboard: keydown and keyup
document.addEventListener('keydown', function (e) {
	console.log(`key:${e.key} keyCode:${e.code}`);
});


// Default actions
phone.onkeydown = function (e) {
	return (e.key >= '0' && e.key <= '9') ||
		['+', '(', ')', '-', 'ArrowLeft','ArrowRight','Delete','Backspace'].includes(e.key);
};