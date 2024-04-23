// WeakRef and Finalization Registry
let user = { name: 'John' };
let admin = new WeakRef(user);
user = null;
console.log(admin);

let ref = admin.deref();
if (ref) {
	console.log('is still in memory');
} else {
	console.log('has been deleted');
}


// Example 1 - using WeakRef for caching
function fetchImg() {
	return [Math.random()];
}

function weakRefCache(fetchImg) {
	const imgCache = new Map();
	return (imgName) => {
		const cachedImg = imgCache.get(imgName);
		if (cachedImg?.deref()) {
			return cachedImg?.deref();
		}
		const newImg = fetchImg(imgName);
		imgCache.set(imgName, new WeakRef(newImg));
		return newImg;
	};
}

const getCachedImg = weakRefCache(fetchImg);


// FinalizationRegistry
let rabbit = {
	name: 'bunny'
};

const registry = new FinalizationRegistry((heldValue) => {
	console.log(`${heldValue} has been collected by the garbage collector.`);
});

registry.register(rabbit, rabbit.name);


function weakRefCache_improved(fetchImg) {
	const imgCache = new Map();
	const registry = new FinalizationRegistry((imgName) => {
		const cachedImg = imgCache.get(imgName);
		if (cachedImg && !cachedImg.deref()) imgCache.delete(imgName);
	});

	return (imgName) => {
		const cachedImg = imgCache.get(imgName);
		if (cachedImg?.deref()) {
			return cachedImg?.deref();
		}

		const newImg = fetchImg(imgName);
		imgCache.set(imgName, new WeakRef(newImg));
		registry.register(newImg, imgName);
	};
}