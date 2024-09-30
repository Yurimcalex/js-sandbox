// Keyboard: keydown and keyup
document.addEventListener('keydown', function (e) {
	console.log(`key:${e.key} keyCode:${e.code}`);
});
// --------- block ---------


// Default actions
phone.onkeydown = function (e) {
	return (e.key >= '0' && e.key <= '9') ||
		['+', '(', ')', '-', 'ArrowLeft','ArrowRight','Delete','Backspace'].includes(e.key);
};
// --------- block ---------


// Task 1 - Extended hotkeys
function runOnKeys(func, ...codes) {
	let pressedKeys = new Set();

	function onKeyDown(e) {
		if (codes.includes(e.key)) {
			pressedKeys.add(e.key);
		}

		if (pressedKeys.size === codes.length) {
			func();
			pressedKeys.clear();
		}
	}

	function onKeyUp(e) {
		if (pressedKeys.has(e.key)) {
			pressedKeys.delete(e.key);
		}
	}

	document.addEventListener('keydown', onKeyDown);
	document.addEventListener('keyup', onKeyUp);

	return () => {
		document.removeEventListener('keydown', onKeyDown);
		document.removeEventListener('keyup', onKeyUp);
	};
}

runOnKeys(() => alert('ok'), 'a', 's');