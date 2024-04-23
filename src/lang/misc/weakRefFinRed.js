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