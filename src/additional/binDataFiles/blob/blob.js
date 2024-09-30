// Blob
let blob = new Blob(['<html>...</html>'], {type: 'text/html'});

let hello = new Uint8Array([72, 101, 108, 108, 111]);

let b = new Blob([hello, ' ', 'world'], {type: 'text/plain'});

console.log(b);
// --------- block ---------


// Blob as URL
let blob1 = new Blob(['Hello, World!'], {type: 'text/plain'});

link.href = URL.createObjectURL(blob1);

{
	let link = document.createElement('a');
	link.download = 'hello.txt';
	let blob = new Blob(['Hello, everyone!'], {type: 'text/plain'});
	link.href = URL.createObjectURL(blob);
	//link.click();
	URL.revokeObjectURL(link.href);
}
// --------- block ---------


// Blob to base64
{
	let link = document.createElement('a');
	link.download = 'hello.txt';
	let blob = new Blob(['Hello, guys!'], {type: 'text/plain'});
	let reader = new FileReader();
	reader.readAsDataURL(blob);
	reader.onload = function () {
		link.href = reader.result;
		//link.click();
	}
}
// --------- block ---------


// Image to blob
let img = document.getElementById('img');
let canvas = document.createElement('canvas');

canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext('2d');

context.drawImage(img, 0, 0);

canvas.toBlob(function (blob) {
	let link = document.createElement('a');
	link.download = 'example.png';
	link.href = URL.createObjectURL(blob);
	//link.click();
	URL.revokeObjectURL(link.href);
}, 'image/png');
// --------- block ---------


// From Blob to ArrayBuffer
async function f() {
	let blob2 = new Blob(['What', 'is', 'this', '?'], {type: 'text/plain'});
	let buffer = await blob2.arrayBuffer();
	console.log(buffer);
}

f();
// --------- block ---------


// From Blob to stream
async function g() {
	let blob3 = new Blob(['oo-^--oo'], {type: 'text/plain'});
	let readableStream = blob3.stream();
	let stream = readableStream.getReader();
	while (true) {
		let { done, value } = await stream.read();
		if (done) {
			console.log('all blob processed!');
			break;
		}

		console.log(value);
	}
}

g();