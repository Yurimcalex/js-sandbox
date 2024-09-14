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
		.forEach(text => {
			if (window.markLogs) {
				const [markedText, logs] = markLogs(text);
				createCodeBlock(markedText);
				createLog(logs);
			} else {
				createCodeBlock(text);
			}
		});
	
	document.querySelectorAll('pre code')
		.forEach((block) => hljs.highlightElement(block));
});