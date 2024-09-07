let sum = 0;

while (true) {
	let value = +prompt('Enter a number', '0');
	if (!value) break;
	sum += value;
}

console.log(sum);


let oddNumbs = '';
for (let i = 0; i < 10; i += 1) {
	if (i % 2 == 0) continue;
	oddNumbs += i + ' ';
}

console.log(oddNumbs);


outer: for (let i = 0; i < 3; i += 1) {
	for (let j = 0; j < 3; j += 1) {
		let input = prompt(`value at coords ${i} ${j}`, '');
		if (!input) break outer;
	}
}


let i = 0;
while (++i < 5) console.log('pre', i);

let j = 0;
while(j++ < 5) console.log('post', j);


for (let i = 2; i < 11; i += 1) {
	if (i % 2 == 0) console.log('even', i);
}


let k = 0;
while (k < 3) {
	console.log(`number ${k}`);
	k++;
}


while (true) {
	let input = prompt('Enter a number greater than 100', '');
	if (!input || input > 100) break;
}

let n = 0;
do {
	n = prompt('Enter a N > 100', 0);
} while (n <= 100 && n);

let c = 0;
let m = 10;
for (let i = 2; i <= m; i += 1) {
	for (let j = 2; j <= i; j += 1) {
		if (i % j == 0 && i != j) break;
		if (i % j == 0 && i == j) console.log(`${i} is prime`);
		c++;
	}
}
console.log(c);

let c2 = 0;
prime: for (let i = 2; i <= m; i += 1) {
	for (let j = 2; j < i; j += 1) {
		c2++;
		if (i % j == 0) continue prime;
	}
	console.log(i);
}
console.log(c2);