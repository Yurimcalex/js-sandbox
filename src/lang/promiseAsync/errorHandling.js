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


