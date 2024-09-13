// Cookies, document.cookie
console.log(document.cookie);

document.cookie = 'apple=yammi';
document.cookie = 'fruit=great';
console.log(document.cookie);

let town = 'Happy side';
document.cookie = `town=${encodeURIComponent(town)}`;
console.log(document.cookie);

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
console.log(date);

document.cookie = 'expires=' + date;
console.log(document.cookie);


// Appendix: Cookie functions
function getCookie(name) {
	let matches = document.cookie.match(
		new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)")
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let expires = getCookie('expires');
console.log(expires);


function setCookie(name, value, attributes = {}) {
	attributes = {
		path: '/',
		...attributes
	};

	if (attributes.expires instanceof Date) {
		attributes.expires = attributes.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

	for (let attributeKey in attributes) {
		updatedCookie += '; ' + attributeKey;
		let attributeValue = attributes[attributeKey];
		if (attributeValue !== true) {
			updatedCookie += '=' + attributeValue;
		}
	}

	document.cookie = updatedCookie;
}

setCookie('user', 'Bob', {secure: true, 'max-age': 3600});

console.log(document.cookie);


function deleteCookie(name) {
	setCookie(name, '', { 'max-age': -1 });
}

deleteCookie('name');
console.log(document.cookie);