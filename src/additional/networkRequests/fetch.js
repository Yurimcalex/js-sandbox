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