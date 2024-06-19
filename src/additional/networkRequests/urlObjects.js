// URL objects
let url = new URL('http://javascript.info/profile/admin');
console.log(url);

let url1 = new URL('https://javascript.info/profile/admin');
let url2 = new URL('/profile/admin', 'https://javascript.info');

console.log(url1.toString() === url2.toString());

let newUrl = new URL('tester', url);
console.log(newUrl.toString());

console.log(
	newUrl.protocol,
	newUrl.host,
	newUrl.pathname
);


// SearchParams
let url3 = new URL('https://google.com/search?query=JavaScript');
console.log(url3);

url3.searchParams.set('q', 'test me closely');

console.log(url3.toString());

url3.searchParams.set('tbs', 'popapo:ogog');

console.log(url3.toString());

for (let [name, value] of url3.searchParams) {
	console.log(`${name}=>${value}`);
}


// Encoding
let url4 = new URL('https://ru.wikipedia.org/wiki/ТестПро_тест');
url4.searchParams.set('key', 'ЪХ');
console.log(url4.toString());