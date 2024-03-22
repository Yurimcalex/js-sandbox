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


// task 2 - show a weekday
function getWeekDay(date) {
	return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][date.getDay()];
}

console.log(getWeekDay(new Date(2012, 0, 3)));


// task 3 - european weekday
function getLocalDay(date) {
	let day = date.getDay();
	return day === 0 ? 7 : day;
}

console.log(getLocalDay(new Date(2012, 0, 3)));


// task 4 which day of month was many days ago
function getDateAgo(date, days) {
	let copyDate = new Date(date.getTime());
	return copyDate.getDate(
		copyDate.setDate(copyDate.getDate() - days)
	);
}

let date4 = new Date(2015, 0, 2);

console.log( getDateAgo(date4, 1) === 1 );
console.log( getDateAgo(date4, 2) === 31 );
console.log( getDateAgo(date4, 365) === 2 );


// task 5 - last day of month
function getLastDayOfMonth(year, month) {
	return (new Date(year, month + 1, 0)).getDate();
}

console.log(getLastDayOfMonth(2012, 1));


// task 6 - how many seconds have passed today
function getSecondsToday() {
	let now = new Date();
	return now.getHours() * 60 * 60 +
				 now.getMinutes() * 60 +
				 now.getSeconds();
}

function getSecondsToday1() {
	let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	return (now - today) / 1000;
}

let secs = getSecondsToday();
console.log(secs, getSecondsToday1());


// task 7 - how many seconds till tomorrow
function getSecondsToTomorrow() {
	let now = new Date();
	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	return Math.round((tomorrow - now) / 1000);
}


// task 8 - format the relative date
function formatDate(date) {
	let diff = new Date - date;
	let s = diff / 1000;
	let m = s / 60;
	let h = m / 60;
	if (s < 1) return 'right now';
	else if (m < 1) return `${Math.round(s)} sec. ago`;
	else if (h < 1) return `${Math.round(m)} min. ago`;
	else {
		let components = [
			date.getDate(),
			date.getMonth() + 1,
			date.getFullYear().toString().slice(2),
			date.getHours(),
			date.getMinutes()
		];
		let delim = ['.', '.', ' ', ':', ''];
		return components.map(c => c < 10 ? '0' + c : c + '')
										 .reduce((acc, c, i) => acc + c + delim[i], '');
	}
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));