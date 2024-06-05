// Mutation observer
let observer = new MutationObserver(mutationRecords => {
	console.log(mutationRecords);
});

observer.observe(elem, {
	childList: true,
	subtree: true,
	characterDataOldValue: true
});