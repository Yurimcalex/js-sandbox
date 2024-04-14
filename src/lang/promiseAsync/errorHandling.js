// Error handling with promises
fetch('https://somewhere')
  .then(response => response.json())
  .catch(err => console.log(err));


new Promise(function (resolve, reject) {
	setTimeout(() => resolve(1), 1000);
})
	.then(result => result * 2 + someValue1)
	.then(result => result + someValue2)
	.catch(err => console.log(err));


// Implicit try...catch
new Promise((resolve, reject) => {
	throw new Error('Error throwed inside the promise!');
}).catch(err => console.log(err.message));

new Promise((resolve, reject) => {
	reject(new Error('Error throwed inside the promise!'));
}).catch(err => console.log(err.message));

new Promise((resolve, reject) => {
	resolve(1);
})
	.then(result => {
		throw new Error('Error throwed inside a handler!');
	})
	.catch(err => console.log(err.message));

new Promise((resolve, reject) => {
	resolve(1);
})
	.then(result => itWillbeErr())
	.catch(err => console.log(err.message));