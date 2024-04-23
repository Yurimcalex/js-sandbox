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