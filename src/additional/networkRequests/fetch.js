// Fetch
async function getTodo1() {
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	if (response.ok) {
		let json = await response.json();
		console.log(json);
	} else {
		console.log('HTTP-Error: ' + response.status);
	}
}

//getTodo1();


async function getLastCommits() {
	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
	let response = await fetch(url);
	//let commits = await response.json();
	//console.log(commits);
	let text = await response.text();
	//console.log(text);
}

//getLastCommits();


async function getLogo() {
	let url = 'https://api.github.com/users/photoionized';
	
	let response = await fetch(url);
	let blob = await response.blob();
	console.log(blob);
	
	let img = document.createElement('img');
	img.style = 'position:fixed;top:10px;left:10px;width:100px';
	document.body.append(img);

	img.src = URL.createObjectURL(blob);

	setTimeout(() => {
		img.remove();
		URL.revokeObjectURL(img.src);
	}, 5000);
}

//getLogo();


// Response headers
async function getHeaders() {
	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
	let response = await fetch(url);

	console.log(response.headers.get('Content-Type'));

	for (let [key, value] of response.headers) {
		console.log(`${key} = ${value}`);
	}
}

//getHeaders();


// POST requests
async function sendPost(post) {
	let url = 'https://jsonplaceholder.typicode.com/posts';
	let response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(post),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8'
		}
	});

	let json = await response.json();
	console.log(json);
}

sendPost({
	title: 'Hi!',
	body: 'There',
	userId: 1
});


// Sending an image
canvasElem.onmousemove = function (e) {
	let ctx = canvasElem.getContext('2d');
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();
};

async function submit() {
	let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
	let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
		method: 'POST',
		body: blob
	});

	let result = await response.json();
	console.log(blob, result);
}