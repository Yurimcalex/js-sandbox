// LocalStorage, sessionStorage
// local Storage demo
localStorage.setItem('fruit', 'banana');
console.log(localStorage.getItem('fruit'));


// Object-like access
localStorage.sport = 'football';
console.log(localStorage.sport);
delete localStorage.sport;


// Looping over keys
for (let i = 0; i < localStorage.length; i += 1) {
	let key = localStorage.key(i);
	//console.log(`${key}: ${localStorage.getItem(key)}`);
}

let keys = Object.keys(localStorage);
for (let key of keys) {
	//console.log(key, localStorage.getItem(key));
}


// Strings only
localStorage.user = { name: 'Bob' };
console.log(localStorage.user);

localStorage.user = JSON.stringify({ name: 'Bob' });
let user = JSON.parse(localStorage.user);
console.log(user);

//console.log(JSON.stringify(localStorage, null, 2));


// sessionStorage
sessionStorage.setItem('firtsStoredValue', 1);
console.log(sessionStorage.getItem('firtsStoredValue'));


// Storage event
window.onstorage = event => {
	if (event.key !== 'now') return;
	console.log(
		event.key,
		event.newValue,
		event.url
	);
};

localStorage.setItem('now', Date.now());