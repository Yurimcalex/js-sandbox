// Bitwise operators
console.log(parseInt('10001001', 2));
console.log(+137..toString(2));

function toBin(dec) {
	return +dec.toString(2);
}

function toDec(bin) {
	return parseInt(bin, 2);
}


console.log(toBin(14), toBin(9), toBin(14 & 9), 14 & 9);


console.log(toBin(14), toBin(9), toBin(14 | 9), 14 | 9);


console.log(toBin(14), toBin(9), toBin(14 ^ 9), 14 ^ 9);


console.log(14 ^ 9 ^ 9);


console.log(~3, ~-1);


console.log(toBin(9), toBin(9 << 2), 9 << 2);
console.log(toBin(10000000000 << 1));


console.log(toBin(9), toBin(9 >> 2), 9 >> 2);
console.log(toBin(-9), toBin(-9 >> 2), -9 >> 2);


console.log(toBin(-9), toBin(-9 >>> 2), -9 >>> 2);
// --------- block ---------


// Using bitwise operators
// Mask
// read     write    view   change  rights
// article  article  goods  goods   management
/*guest*/  [1, 0, 1, 0, 0, toBin(10100)/*20*/];
/*editor*/ [1, 1, 1, 1, 0, toBin(11110)/*30*/];
/*admin*/  [1, 1, 1, 1, 1, toBin(11111)/*31*/];

const ACCESS_ADMIN = 1;         // 00001
const ACCESS_GOODS_EDIT = 2;    // 00010
const ACCESS_GOODS_VIEW = 4;    // 00100
const ACCESS_ARTICLE_EDIT = 8;  // 01000
const ACCESS_ARTICLE_VIEW = 16; // 10000

// 10100
const guest = ACCESS_GOODS_VIEW | ACCESS_ARTICLE_VIEW;
// 11110
const editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT;
// 11111
const admin = editor | ACCESS_ADMIN;

console.log(editor & ACCESS_ADMIN);
console.log(editor & ACCESS_ARTICLE_EDIT);

const articleMan = ACCESS_ARTICLE_VIEW | ACCESS_ARTICLE_EDIT;
console.log(guest & articleMan);
console.log(editor & articleMan);
// --------- block ---------


// Rounding
console.log(~~1.3);
console.log(2.123 ^ 0);
console.log(1.3 * 5.3 ^ 0);
// --------- block ---------


// Checking for −1
let str1 = 'checking';
if (~str1.indexOf('g')) {
	console.log('found');
}
// --------- block ---------


// Multiplication and division by powers of 2
console.log(3 << 3);
console.log(8 >> 2);
// --------- block ---------


// Task 1 - Bitwise operator and value
console.log(toBin(123));
console.log(123 ^ 0, 0 ^ 123, ~~123);
// --------- block ---------


// Task 2 - Checking if a number is an integer
function isInteger(n) {
	return (n ^ 0) === n;
}

console.log(isInteger(1), isInteger(1.5), isInteger(-0.5));
// --------- block ---------


// Task 3 - Are the operations ^, |, & symmetric
console.log((1 ^ 2) === (2 ^ 1));
console.log((1 & 2) === (2 & 1));
console.log((1 | 2) === (2 | 1));
// --------- block ---------


// Task 4 - Why are the results different
console.log(123456789 ^ 0);
console.log(2 ** 32);
console.log(12345678912345 ^ 0);