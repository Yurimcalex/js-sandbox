// XMLHttpRequest
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.send();

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