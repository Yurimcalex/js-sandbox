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
		let skillsStore = db.createObjectStore('skills', {keyPath: 'id'});
		skillsStore.createIndex('level_idx', 'level');
	}

	console.log(db.objectStoreNames);
};


or.onerror = function () {
	console.log('Error', or.error);	
};

let storeDB;
or.onsuccess = function () {
	let db = or.result;
	storeDB = db;
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

	transaction.oncomplete = function () {
		console.log('Transaction is complete!');
	};
};

// Transactions
// Transactions' autocommit
// Error handling
setTimeout(() => {
	let transaction = storeDB.transaction('skills', 'readwrite');
	let skill = {
		id: 'fly',
		level: 50
	};
	let request = transaction.objectStore('skills').add(skill);
	request.onerror = function (e) {
		if (request.error.name === 'ConstraintError') {
			console.log('Such skill is already exists');
			e.preventDefault();
			e.stopPropagation();
		} else {
			console.log('Unhandled transaction!');
		}
	};

	transaction.onabort = function () {
		console.log('Transaction is aborted!', transaction.error);
	};

	transaction.oncomplete = function () {
		console.log('Transaction is complete!');
	};
}, 1000);


// Event delegation
let timer = setInterval(() => {
	if (storeDB) {
		clearInterval(timer);
		storeDB.onerror = function (e) {
			console.log('DB error - ', e.target.error);
		};
	}
}, 100);


// Searching by key
setTimeout(() => {
	let transaction = storeDB.transaction('skills', 'readwrite');
	let skills = transaction.objectStore('skills');
	skills.add({ id: 'run', level: 3 });
	skills.add({ id: 'swim', level: 10 });
	
	transaction.oncomplete = function () {
		console.log('Third transaction is complete!');
	};
}, 1500);

setTimeout(() => {
	let transaction = storeDB.transaction('skills', 'readwrite');
	let skills = transaction.objectStore('skills');

	console.log('all skills', skills.getAll());
	console.log('swim skill', skills.get('swim'));
}, 2000);


// Search by a field using an index
setTimeout(() => {
	let transaction = storeDB.transaction('skills');
	let skills = transaction.objectStore('skills');
	let levelIndex = skills.index('level_idx');

	let request = levelIndex.getAll(IDBKeyRange.upperBound(30));
	request.onsuccess = function () {
		if (request.result !== undefined) {
			console.log('Skills', request.result);
		} else {
			console.log('No such skills!');
		}
	};
}, 2100);