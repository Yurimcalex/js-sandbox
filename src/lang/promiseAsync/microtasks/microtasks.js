Promise.resolve().then(() => console.log('Promise done!'));
console.log('I will be the first!');

let promise = Promise.reject(new Error('Error!!!'));

setTimeout(() => {
	promise.catch(err => console.log('Caught!'));
}, 1000);

window.addEventListener('unhandledrejection', (e) => {
	console.log(e.reason);
});