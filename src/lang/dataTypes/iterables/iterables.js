let range = {
	from: 1,
	to: 5,
	[Symbol.iterator]: function () {
		return {
			current: this.from,
			last: this.to,
			next() {
				if (this.current <= this.last) {
					return { done: false, value: this.current++ };
				} else {
					return { done: true };
				}
			}
		};
	}
};

for (let n of range) console.log(n);


for (let ch of 'Hello') console.log(ch);


let str1 = 'Plame de majorka';
let iterator1 = str1[Symbol.iterator]();
while (true) {
	let res = iterator1.next();
	if (res.done) break;
	if (res.value === ' ') continue;
	console.log(res.value);
}


let arrayLike = {
	0: 'B',
	1: 'i',
	2: 'k',
	3: 'e',
	length: 4
};

console.log(Array.from(arrayLike));

console.log(Array.from(range, n => n * 2));