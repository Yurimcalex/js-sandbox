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