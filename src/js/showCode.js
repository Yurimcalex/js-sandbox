async function getScriptContent() {
	const script = document.querySelector('[data-code]');
	return await fetch(script.src).then((res) => res.text());
}