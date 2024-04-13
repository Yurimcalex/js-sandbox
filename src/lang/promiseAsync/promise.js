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