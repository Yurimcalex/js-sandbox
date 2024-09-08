// Intl: Internationalization in JavaScript
let collator = new Intl.Collator();
console.log("ёжик" > "яблоко");
console.log(collator.compare("ёжик", "яблоко"));

let collator1 = new Intl.Collator(undefined, {
	sensitivity: 'accent'
});

console.log(collator1.compare('A', 'a'));


let date = new Date();
let formatter1 = new Intl.DateTimeFormat('ua');
let formatter2 = new Intl.DateTimeFormat('en-US');

console.log(formatter1.format(date), '<-- ua');
console.log(formatter2.format(date), '<-- en-US');


let formatter3 = new Intl.DateTimeFormat('ua', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}); 

console.log(formatter3.format(date));


let formatter4 = new Intl.NumberFormat('ua', {
	maximumSignificantDigits: 5
});

console.log(formatter4.format(1234532.2352));


let formatter5 = new Intl.NumberFormat('ua', {
	style: 'currency',
	currency: 'GBP',
	minimumFractionDigits: 2
});

console.log(formatter5.format(1333));


let str = 'qef';
console.log(str.localeCompare('fsf', 'ua'));

console.log(date.toLocaleString('ua', {
	year: 'numeric',
	month: 'long'
}));


// Task 1 - Sort the array with the letter ё
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
animals.sort((w1, w2) => w1.localeCompare(w2, 'ru'));
console.log(animals);