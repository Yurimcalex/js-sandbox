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


// FormData Methods
let formData = new FormData();
formData.append('name', 'Bob');
formData.append('name', 'Cristopher');
//formData.append('file', new Uint8Array([1, 2, 3]), 'info.txt');

for (let [name, value] of formData) {
	console.log(`${name} = ${value}`);
}


// Sending a form with a file
fileForm.onsubmit = async (e) => {
	e.preventDefault();

	let formData = new FormData(fileForm);
	// for (let [name, value] of formData) {
	// 	console.log(`${name} = ${value}`);
	// }

	let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
		method: 'POST',
		body: formData
	});
	
	let result = await response.json();

	console.log(result);
};