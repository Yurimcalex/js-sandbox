const bigint = 1234567891011121314151617181920212223242526n;
const sameBigint = BigInt('1234567891011121314151617181920212223242526');
const fromNumb = BigInt(10);

console.log(1n + 2n);
console.log(1n / 2n);

let bint = 1n;
let numb = 2;

console.log(bint + BigInt(numb));
console.log(Number(bint) + numb);


console.log(1 == 1n);
console.log(1 === 1n);


console.log(0n || 2);