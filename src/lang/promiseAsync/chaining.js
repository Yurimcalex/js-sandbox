// Promise chaining
new Promise(function (resolve, reject) {
	setTimeout(() => resolve(1), 1000);
}).then(result => {
	console.log(result);
	return result * 2;
}).then(result => {
	console.log(result);
	return result * 4;
}).then(result => {
	console.log(result);
	return result * 8;
});


// Returning promises
new Promise(function (resolve, reject) {
	setTimeout(() => resolve(10), 1500);
}).then(result => {
	console.log(result);
	return new Promise(function (resolve, reject) {
		setTimeout(() => resolve(result * 10), 1000);
	});
}).then(result => {
	console.log(result);
	return new Promise(function (resolve, reject) {
		setTimeout(() => resolve(result * 10), 500);
	});
}).then(result => {
	console.log(result);
});


// Example: loadScript
function loadScript(src, callback) {
	return new Promise(function (resolve, reject) {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Script load error for ${src}`));

		document.head.append(script);
	});
}

loadScript('pathToScript')
	.then(script => {
		return loadScript('pathToAnotherScript');
	})
	.then(script => {
		return loadScript('oneMoreScript');
	})
	.then(script => {
		// use script's funcs
	})
	.catch(err => console.log(err.message));


loadScript('path').then(script => {
	loadScript('path1').then(script1 => {
		loadScript('path2').then(script2 => {
			// this way we have access to the all scripts
			// script, script1 and script2
		})
	})
})
	.catch(err => console.log(err.message));


// Thenables
class Thenable {
	constructor(n) {
		this.n = n;
	}
	then(resolve, reject) {
		setTimeout(() => resolve(this.n + 10), 1000);
	}
}

new Promise(function (resolve, reject) {
	resolve(1);
})
	.then(result => {
		return new Thenable(result);
	})
	.then(result => console.log(result));