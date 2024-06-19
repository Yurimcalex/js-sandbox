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