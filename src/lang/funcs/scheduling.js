// setTimeout
function sayPhrase(phrase, from) {
	console.log(`${from}: ${phrase}`);
}

//setTimeout(sayPhrase, 3000, 'Hello', 'Bob');


//let timer1 = setTimeout(() => console.log('ok'), 2000);
//clearTimeout(timer1);
//console.log(timer1);


// setInterval
//let timer2 = setInterval(() => console.log('tick'), 2000);
//setTimeout(() => clearInterval(timer2), 5000);

//let timer3 = setInterval(() => console.log('tick'), 1000);
//alert('...but timer is ticking???');
//setTimeout(() => clearInterval(timer3), 5000);


// Nested setTiemout
// let timerId = setTimeout(function tick() {
// 	console.log('tick');
// 	timerId = setTimeout(tick, 1000);
// }, 1000);

// setTimeout(() => clearTimeout(timerId), 10000);


// let delay = 1000;
// let timerId1 = setTimeout(function f() {
// 	console.log(`delay: ${delay}s`);
// 	delay += 1000;
// 	setTimeout(f, delay);
// }, delay);


//setTimeout(() => console.log('World!'));
//console.log('Hello');


// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   times.push(Date.now() - start);
//   if (start + 100 < Date.now()) alert(times);
//   else setTimeout(run);
// });


// Task 1 - output every second
function printNumbers1(from, to) {
	let curr = from;
	let timerId = setInterval(() => {
		console.log(curr);
		if (curr === to) clearInterval(timerId);
		curr++;
	}, 1000);
}

//printNumbers1(1, 10);


function printNumbers2(from, to) {
	let curr = from - 1;
	let timerId = setTimeout(function tick() {
		console.log(++curr);
		if (curr === to) clearTimeout(timerId);
		else setTimeout(tick, 1000);
	}, 1000);
}

//printNumbers2(1, 10);