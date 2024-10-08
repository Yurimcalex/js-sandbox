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
// --------- block ---------


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
// --------- block ---------


// Rethrowing
new Promise((resolve, reject) => {
	throw new Error('Error inside the executor');
})
	.catch(err => console.log('Error successfuly handled!'))
	.then(() => console.log('Hadler is working!'));

new Promise((resolve, reject) => {
	throw new Error('Error!!!');
})
	.catch(err => {
		if (err instanceof SyntaxError) {
			console.log('Handled!');
		}
		throw err;
	})
	.then(() => console.log('Hey! I wanna work!'))
	.catch(err => console.log(err.message));
// --------- block ---------


// Unhandled rejections
new Promise((resolve, reject) => {
	throw new Error('Unhandled Error!');
}).then(result => console.log(result));

window.addEventListener('unhandledrejection', function(event) {
  console.log(event.promise);
  console.log(event.reason);
});
// --------- block ---------


// Error in setTimeout
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(err => console.log(err.message));