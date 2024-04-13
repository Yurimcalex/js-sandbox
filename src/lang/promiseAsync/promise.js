// Promise
let promise1 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve('done', 1000));
});

let promise2 = new Promise(function (resolve, reject) {
	setTimeout(() => {
		reject(new Error('Error'));
	}, 1000);
});