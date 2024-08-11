// IndexedDB
// Open database
// let openRequest = indexedDB.open('store', 1);

// openRequest.onupgradeneeded = function () {
// 	console.log('upgrade!');
// };

// openRequest.onerror = function () {
// 	console.log('Error', openRequest.error);
// };

// openRequest.onsuccess = function () {
// 	let db = openRequest.result;

// 	console.log(db);
// };


// let openRequest1 = indexedDB.open('store', 2);

// openRequest1.onupgradeneeded = function (event) {
// 	let db = openRequest.result;

// 	switch (event.oldVersion) {
// 		case 0:
// 			console.log('database store initialized!');
// 		case 1:
// 			console.log('database store updated to version 2');
// 	}
// };


// let deleteRequest = indexedDB.deleteDatabase('store');


// Parallel update problem
// let openRequest = indexedDB.open('store', 1);
// let openRequest1 = indexedDB.open('store', 2);

// openRequest1.onupgradeneeded = function (event) {
// 	let db = openRequest.result;

// 	switch (event.oldVersion) {
// 		case 0:
// 			console.log('database store initialized!');
// 		case 1:
// 			console.log('database store updated to version 2');
// 	}
// };

// openRequest.onerror = function () {
// 	console.log('Error', openRequest.error);
// };

// openRequest.onsuccess = function () {
// 	let db = openRequest.result;

// 	db.onversionchange = function () {
// 		db.close();
// 		console.log('Database is outdated, please reload the page.');
// 	};
// };

// openRequest.onblocked = function () {
// 	console.log('blocked!');
// };

indexedDB.deleteDatabase('store');


// Object store
let or = indexedDB.open('store', 1);
or.onupgradeneeded = function (e) {
	console.log('upgrade!');
	console.log(e.oldVersion);

	let db = or.result;
	if (!db.objectStoreNames.contains('skills')) {
		db.createObjectStore('skills', {keyPath: 'id'});
	}

	console.log(db.objectStoreNames);
};


or.onerror = function () {
	console.log('Error', or.error);	
};


or.onsuccess = function () {
	let db = or.result;
	console.log('success!');

	let transaction = db.transaction('skills', 'readwrite');
	let skills = transaction.objectStore('skills');
	
	let skill = {
		id: 'fly',
		level: 50
	};

	let req = skills.add(skill);
	req.onsuccess = function () {
		console.log('New skill added!', req.result);
	};
	req.onerror = function () {
		console.log('Error - add skill', req.error);
	};
};

// Transactions