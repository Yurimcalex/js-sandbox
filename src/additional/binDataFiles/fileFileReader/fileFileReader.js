// File and FileReader
inp.onchange = function () {
	let file = inp.files[0];
	console.log(`File name: ${file.name}`);
	console.log(`Last modified: ${file.lastModified}`);
}
// --------- block ---------


// FileReader
inp.addEventListener('change', function () {
	let file = inp.files[0];
	let reader = new FileReader();

	reader.readAsText(file);

	reader.onload = function () {
		console.log(reader.result);
	};

	reader.onerror = function () {
		console.log(reader.error);
	};
});