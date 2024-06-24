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