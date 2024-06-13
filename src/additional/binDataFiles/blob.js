// Blob
let blob = new Blob(['<html>...</html>'], {type: 'text/html'});

let hello = new Uint8Array([72, 101, 108, 108, 111]);

let b = new Blob([hello, ' ', 'world'], {type: 'text/plain'});

console.log(b);