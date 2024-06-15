// FormData
// Sending a simple form
postForm.onsubmit = async (e) => {
	e.preventDefault();

	let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: new FormData(postForm)
	});

	let result = await response.json();

	console.log(result);
};