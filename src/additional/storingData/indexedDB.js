// IndexedDB
// Open database
let openRequest = indexedDB.open('store', 1);

openRequest.onupgradeneeded = function () {
	console.log('upgrade!');
};

openRequest.onerror = function () {
	console.log('Error', openRequest.error);
};

openRequest.onsuccess = function () {
	let db = openRequest.result;

	console.log(db);
};


let openRequest1 = indexedDB.open('store', 2);

openRequest1.onupgradeneeded = function (event) {
	let db = openRequest.result;

	switch (event.oldVersion) {
		case 0:
			console.log('database store initialized!');
		case 1:
			console.log('database store updated to version 2');
	}
};


let deleteRequest = indexedDB.deleteDatabase('store');