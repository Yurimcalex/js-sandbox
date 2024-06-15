// Fetch: Download progress
async function getCommits() {
	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100';

	let response = await fetch(url);
	let reader = response.body.getReader();
	let contentLength = +response.headers.get('Content-Length');

	let receivedLength = 0;
	let chunks = [];

	while (true) {
		const {done, value} = await reader.read();
		if (done) break;
		chunks.push(value);
		receivedLength += value.length;

		console.log(`Received ${receivedLength} of ${contentLength}`);
	}

	let blob = new Blob(chunks);
	console.log(blob);

	let chunksAll = new Uint8Array(receivedLength);
	let position = 0;

	for (let chunk of chunks) {
		chunksAll.set(chunk, position);
		position += chunk.length;
	}

	let result = new TextDecoder('utf-8').decode(chunksAll);
	let commits = JSON.parse(result);

	console.log(commits);
}

getCommits();