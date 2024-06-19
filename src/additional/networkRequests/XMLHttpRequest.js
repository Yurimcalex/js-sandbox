// XMLHttpRequest
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//xhr.send();

xhr.onload = function () {
	if (xhr.status != 200) {
		console.log(`Error ${xhr.status}: ${xhr.statusText}`);
	} else {
		console.log(`Done, got ${xhr.response.length} bytes`);
	}
};

xhr.onprogress = function (e) {
	if (e.lengthComputable) {
		console.log(`Received ${e.loaded} of ${e.total} bytes`);
	} else {
		console.log(`Received ${e.loaded} bytes`);
	}
};

xhr.onerror = function () {
	console.log('Request failed');
};


// Response Type
let xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr1.responseType = 'json';
//xhr1.send();

xhr1.onload = function () {
	let responseObj = xhr1.response;
	console.log(responseObj);
};


// Ready states
let xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users');
//xhr2.send();

xhr2.onreadystatechange = function () {
	let readyState = xhr2.readyState;
	
	if (readyState == 3) {
		console.log('users loading...');
	}

	if (readyState == 4) {
		console.log('users loaded');
	}
};


// Aborting request
let xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'https://jsonplaceholder.typicode.com/photos');
//xhr3.send();

xhr3.onprogress = function (e) {
	if (e.lengthComputable) {
		console.log(`Received ${e.loaded} of ${e.total} bytes`);
	} else {
		console.log(`Received ${e.loaded} bytes`);
	}
};

//setTimeout(() => xhr3.abort());


// Synchronous requests
console.log('starting...');
let xhr4 = new XMLHttpRequest();
xhr4.open('GET', 'https://jsonplaceholder.typicode.com/users/1', false);
try {
	xhr4.send();
	if (xhr4.status != 200) {
		console.log(`Error ${xhr4.status}: ${xhr4.statusText}`)
	} else {
		console.log(xhr4.response);
	}
} catch (err) {
	console.log('Request failed');
}
console.log('finishing...');