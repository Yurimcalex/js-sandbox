// creation
let now = new Date();
console.log(now, now.toString());

let jan01_1970 = new Date(0);
console.log(jan01_1970);

let jan03_1970 = new Date(48 * 3600 * 1000);
console.log(jan03_1970);

let dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(dec31_1969);

console.log(dec31_1969.getTime());

let d1 = new Date('2017-01-26');
console.log(d1);

let d2 = new Date(2017, 0, 1, 12, 13, 10, 0);
console.log(d2);

// access date components
console.log(
	now.getFullYear(),
	now.getMonth(),
	now.getDate(),
	now.getHours(),
	now.getMinutes(),
	now.getSeconds(),
	now.getMilliseconds(),
	now.getDay(),
	now.getTime(),
	now.getTimezoneOffset()
);

// setting date components
let today = new Date();
today.setHours(0);
today.setMonth(0, 1);
console.log(today);

// autocorrection
let date = new Date(2017, 15, 36);
console.log(date);

date.setDate(date.getDate() + 3);
console.log(date);

date.setDate(-1);
console.log(date);

// date to number, date diff
let fri = new Date();
console.log(+fri);

let start = new Date();
for (let i = 0; i < 100000; i += 1) {
	let m = i * i * i;
}
let end =  new Date();
console.log(`The loop took ${end - start} ms`);

// Date.now
let start1 = Date.now();
for (let i = 0; i < 100000; i += 1) {
	let m = i * i * i;
}
let end1 = Date.now();
console.log(end1 - start1);

// benchmarking
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
	let date1 = new Date();
	let date2 = new Date(2020);
	let start = Date.now();
	for (let i = 0; i < 100000; i += 1) {
		f(date1, date2);
	}
	return new Date() - start;
}
console.log(`bench for diffSubtract ${bench(diffSubtract)} ms`);
console.log(`bench for diffGetTime ${bench(diffGetTime)} ms`);

let time1 = 0;
let time2 = 0;
bench(diffSubtract);
bench(diffGetTime);
for (let i = 0; i < 10; i += 1) {
	//time1 += bench(diffSubtract);
	//time2 += bench(diffGetTime);
}
//console.log(time1, time2);

// Date.parse from a string
let ms = Date.parse('2012-01-26T13:51:50.417-01:00');
console.log(new Date(ms));

console.log(`Loading started ${performance.now()}ms ago`);


// task 1 - create a date
let feb20_2012 = new Date(2012, 1, 20, 3, 12, 0, 0);
console.log(feb20_2012);