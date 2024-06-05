// Mutation observer
let observer = new MutationObserver(mutationRecords => {
	console.log(mutationRecords);
});

observer.observe(elem, {
	childList: true,
	subtree: true,
	characterDataOldValue: true
});


// Dynamic highlight demo
let observer1 = new MutationObserver(mutations => {
	for (let mutation of mutations) {
		for (let node of mutation.addedNodes) {
			if (!(node instanceof HTMLElement)) continue;
			
			if (node.matches('p.important')) {
				node.style.color = 'blue';
			}

			for (let elem of node.querySelectorAll('p.important')) {
				elem.style.color = 'blue';
			}
		}
	}
});


let container = document.getElementById('container');
observer1.observe(container, {
	childList: true,
	subtree: true
});


setTimeout(() => {
	let div = document.createElement('div');
	div.innerHTML = `
		<p class="important">Some important info ...</p>
		<p>What is this?</p>
	`;
	container.append(div);
}, 5000);