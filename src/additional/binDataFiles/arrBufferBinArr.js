// ArrayBuffer, binary arrays
let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

let view = new Uint32Array(buffer);

console.log(Uint32Array.BYTES_PER_ELEMENT);

console.log(view.length);
console.log(view.byteLength);


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