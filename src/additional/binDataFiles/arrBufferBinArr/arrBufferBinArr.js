// ArrayBuffer, binary arrays
let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

let view = new Uint32Array(buffer);

console.log(Uint32Array.BYTES_PER_ELEMENT);

console.log(view.length);
console.log(view.byteLength);
// --------- block ---------


// TypedArray
let arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.length);
console.log(arr[2]);

let arr16 = new Uint16Array([5, 1100]);
let arr8 = new Uint8Array(arr16);
console.log(arr8[0], arr8[1]);

let arr1 = new Uint16Array(4);
console.log(arr1.byteLength);

let arr8_1 = new Uint8Array([1, 2, 3, 4]);
let arr16_1 = new Uint16Array(arr8_1.buffer);

console.log(arr16_1, arr16_1.length);
// --------- block ---------


// Out-of-bounds behavior
let uint8array = new Uint8Array(16);
let num = 256;

console.log(num.toString(2));

uint8array[0] = 256;
uint8array[1] = 257;

console.log(uint8array[0], uint8array[1]);
// --------- block ---------


// TypedArray methods
let ta = new Uint8Array(32);
console.log(ta.byteLength);
ta.forEach(b => console.log(b));
let mta = ta.map((b, i) => i);
console.log(mta);

let nw = mta.subarray(0, 9);
console.log(nw);

nw.set([10, 9]);
console.log(nw);
// --------- block ---------


// DataView
let buff = new Uint8Array([255, 255, 255, 255]).buffer;
console.log(buff);
let dataView = new DataView(buff);
console.log(dataView);

console.log(dataView.getUint8(0));
console.log(dataView.getUint16(0));
console.log(dataView.getUint32(0));

dataView.setUint32(0, 0);

console.log(dataView.getUint8(0));
// --------- block ---------


// Task 1 - Concatenate typed arrays
function concat(arrays) {
	let len = 0;
	arrays.forEach(arr => len += arr.byteLength);
	let rArr = new Uint8Array(len);
	let offset = 0;
	arrays.forEach(arr => {
		rArr.set(arr, offset);
		offset += arr.length;
	});
	return rArr;
}

let test = concat([
	new Uint8Array([255, 255, 255, 255]),
	new Uint8Array([0, 0, 0, 0])
]);

console.log(test);