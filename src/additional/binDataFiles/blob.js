// Blob
let blob = new Blob(['<html>...</html>'], {type: 'text/html'});

let hello = new Uint8Array([72, 101, 108, 108, 111]);

let b = new Blob([hello, ' ', 'world'], {type: 'text/plain'});

console.log(b);


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