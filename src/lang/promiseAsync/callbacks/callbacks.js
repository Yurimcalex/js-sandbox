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


// Handling errors
function anotherAsyncAction(value, callback) {
	let rand = Math.random();
	if (rand > 0.5) {
		setTimeout(() => callback(null, value), 1000);
	} else {
		setTimeout(() => callback(new Error('Bad value')), 2000);
	}
}

anotherAsyncAction(10, function (err, value) {
	if (err) {
		console.log(err.message);
	} else {
		console.log(value * 10);
	}
});


// Pyramid of Doom
anotherAsyncAction(1, (err, value) => {
	if (err) {
		console.log(err);
	} else {
		console.log(value);
		anotherAsyncAction(2, (err, value) => {
			if (err) {
				console.log(err);
			} else {
				console.log(value);
				anotherAsyncAction(3, (err, value) => {
					if (err) {
						console.log(err);
					} else {
						console.log(value);
					}
				});
			}
		});
	}
});


function step3(err, value) {
	if (err) {
		console.log(err);
	} else {
		console.log(value);
	}
}

function step2(err, value) {
	if (err) {
		console.log(err);
	} else {
		console.log(value);
		anotherAsyncAction(3, step3);
	}
}

function step1(err, value) {
	if (err) {
		console.log(err);
	} else {
		console.log(value);
		anotherAsyncAction(2, step2);
	}
}

anotherAsyncAction(1, step1);