// async function getScriptContent() {
// 	const script = document.querySelector('[data-code]');
// 	return await fetch(script.src).then((res) => res.text());
// }

// async function createCodeBlock() {
// 	const pre = document.createElement('pre');
// 	const code = document.createElement('code');
// 	code.className = 'language-javascript';
// 	pre.append(code);
// 	code.innerHTML = await getScriptContent();
// 	document.body.append(pre);
// }

// document.addEventListener('DOMContentLoaded', async (event) => {
// 	await createCodeBlock();
//   document.querySelectorAll('pre code').forEach((block) => {
//     hljs.highlightElement(block);
//   });
// });


async function getScriptContent() {
	const script = document.querySelector('[data-code]');
	return await fetch(script.src).then((res) => res.text());
}


function createCodeBlock(blockText) {
	const pre = document.createElement('pre');
	const code = document.createElement('code');
	code.className = 'language-javascript';
	pre.append(code);
	code.innerHTML = blockText;
	document.body.append(pre);
}


document.addEventListener('DOMContentLoaded', async (event) => {
	(await getScriptContent())
		.split('// --------- block ---------')
		.map(text => text.trim())
		.map(markLogs)
		.forEach(createCodeBlock);
	
	document.querySelectorAll('pre code')
		.forEach((block) => hljs.highlightElement(block));

	document.body.innerHTML += JSON.stringify(logs, null, 2);
});