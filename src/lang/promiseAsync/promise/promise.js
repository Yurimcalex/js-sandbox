// Promise
let promise1 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve('done', 1000));
});

let promise2 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		reject(new Error('Error'));
	}, 1000);
});


// Consumers: then, catch
promise2.then(
	result => console.log(result),
	err => console.log(err.message)
);

promise1.then((result) => console.log(result));

promise2.catch((err) => console.log(err.message));


// Cleanup: finally
let promise3 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		let rand = Math.random();
		if (rand > 0.5) resolve('ok');
		reject(new Error('too small!'));
	}, 2000);
});

promise3
	//.then(result => console.log(result))
	.catch(err => console.log(err.message))
	.finally(() => console.log('settled!'))
	.then(result => console.log(result + '!'));


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

let promise4 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise4.then(
  script => console.log(`${script.src} is loaded!`),
  error => console.log(`Error: ${error.message}`)
);

promise4.then(script => console.log('Another handler...'));


// Task 1 - Re-resolve a promise
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);


// Task 2 - Delay with a promise
function delay(ms) {
	return new Promise(function (resolve, _reject) {
		setTimeout(resolve, ms);
	});
}

delay(3000).then(() => console.log('after 3 sec'));


// Task 3 - Animated circle with promise
function showCircle(cx, cy, radius) {
	return new Promise(function (resolve, reject) {
		let div = document.createElement('div');
		div.style.width = 0;
		div.style.height = 0;
		div.style.left = cx + 'px';
		div.style.top = cy + 'px';
		div.className = 'circle';
		document.body.append(div);

		setTimeout(() => {
		  div.style.width = radius * 2 + 'px';
		  div.style.height = radius * 2 + 'px';
		  resolve(div);
		}, 0);
	});
 }