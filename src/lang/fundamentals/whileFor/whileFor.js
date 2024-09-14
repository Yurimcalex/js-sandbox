let sum = 0;

while (true) {
	let value = +prompt('Enter a number', '0');
	if (!value) break;
	sum += value;
}

console.log(sum);
// --------- block ---------


let oddNumbs = '';
for (let i = 0; i < 10; i += 1) {
	if (i % 2 == 0) continue;
	oddNumbs += i + ' ';
}

console.log(oddNumbs);
// --------- block ---------


outer: for (let i = 0; i < 3; i += 1) {
	for (let j = 0; j < 3; j += 1) {
		let input = prompt(`value at coords ${i} ${j}`, '');
		if (!input) break outer;
	}
}
// --------- block ---------


// Task - Which values does the while loop show?
let pre = '';
let i = 0;
while (++i < 5) pre += i + ' '; 
console.log(pre);

let post = '';
let j = 0;
while(j++ < 5) post += j + ' ';
console.log(post);
// --------- block ---------


// Task - Output even numbers in the loop
let even = ''
for (let i = 2; i < 11; i += 1) {
	if (i % 2 == 0) even += i + ' ';
}
console.log(even);
// --------- block ---------


// Task - Replace "for" with "while"
let nmbs = '';
let k = 0;
while (k < 3) {
	nmbs += k + ' ';
	k++;
}
console.log(nmbs);
// --------- block ---------


// Task - Repeat until the input is correct
while (true) {
	let input = prompt('Enter a number greater than 100', '');
	if (!input || input > 100) break;
}

let n = 0;
do {
	n = prompt('Enter a N > 100', 0);
} while (n <= 100 && n);
// --------- block ---------


// Task - Output prime numbers
let prime = '';
let c = 0;
let m = 10;
for (let i = 2; i <= m; i += 1) {
	for (let j = 2; j <= i; j += 1) {
		if (i % j == 0 && i != j) break;
		if (i % j == 0 && i == j) prime += i + ' ';
		c++;
	}
}
console.log(c, prime);

let prime2 = '';
let c2 = 0;
prime: for (let i = 2; i <= m; i += 1) {
	for (let j = 2; j < i; j += 1) {
		c2++;
		if (i % j == 0) continue prime;
	}
	prime2 += i + ' ';
}
console.log(c2, prime2);