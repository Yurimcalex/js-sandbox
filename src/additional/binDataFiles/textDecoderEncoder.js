// TextDecoder and TextEncoder
let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
console.log(new TextDecoder().decode(uint8Array));

let arr = new Uint8Array([228, 189, 160, 229, 165, 189]);
console.log(new TextDecoder().decode(arr));

let someArr = new Uint8Array([0, 72, 101, 108, 108, 111, 0]);
let binStr = someArr.subarray(1, -1);
console.log(binStr);
console.log(new TextDecoder().decode(binStr));