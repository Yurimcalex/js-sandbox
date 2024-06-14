// File and FileReader
inp.onchange = function () {
	let file = inp.files[0];
	console.log(`File name: ${file.name}`);
	console.log(`Last modified: ${file.lastModified}`);
}