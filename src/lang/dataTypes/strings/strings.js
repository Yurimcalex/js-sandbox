let items = `items:
	- item 1
	- item 2
	- item 3
`;

alert(items);

let str1 = 'Some\ntext';
console.log(str1);
console.log(str1.length);

console.log(str1[-5]);
//console.log(str1.at(-5));

for (let ch of str1) console.log(ch);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
// --------- block ---------


let str2 = 'Some text is written by the man';
let pos = 0;
let target = 't';
while (true) {
	pos = str2.indexOf(target, pos);
	console.log(pos);
	if (pos === -1) break;
	pos += 1;
}

console.log(str2.lastIndexOf(('Some')));
console.log(str2.includes('by'));
console.log(str2.startsWith('S'));
console.log(str2.endsWith('n'));

let str2Copy = str2.slice();

console.log(str2.slice(-3));
console.log(str2.substring(0, 4));
console.log(str2.substr(0, 4));
console.log(str2.codePointAt(0));
// --------- block ---------


let str3 = '';
for (let i = 0; i < 100; i += 1) {
	str3 += ' ' + String.fromCodePoint(i);
}
console.log(str3);
console.log(str1.localeCompare(str2));
// --------- block ---------


// task 1
function ucFirst(str) {
	if (!str) return str;
	return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('john'));
// --------- block ---------


// task 2
function checkSpam(str) {
	let lcStr = str.toLowerCase();
	return lcStr.includes('viagra') || lcStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);
// --------- block ---------


// task 3
function truncate(str, maxlength) {
	return str.length <= maxlength 
		? str
		: str.slice(0, maxlength - 1) + "…";
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
// --------- block ---------


// task 4
function extractCurrencyValue(str) {
	return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));