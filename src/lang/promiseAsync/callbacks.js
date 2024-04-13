// Introduction: callbacks
function loadScript(src, callback) {
	let script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  console.log(`Cool, the script ${script.src} is loaded`);
  console.log( _ ); // _ is a function declared in the loaded script
});


// Callback in callback
function coolAsyncAction(action, callback) {
	setTimeout(() => {
		console.log(action);
		callback();
	}, 1000);
}

coolAsyncAction('Hello', () => {
	coolAsyncAction('World', () => {
		coolAsyncAction('!', () => {
			console.log('Whhuuu done!');
		});
	});
});