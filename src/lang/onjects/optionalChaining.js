function User(name, isAdmin) {
	this.name = name;
	this.isAdmin = false;
	this.address = null;

	if (isAdmin) {
		this.isAdmin = true;
		this.getAccess = function () {
			console.log('You have some access!');
		}
	}
}

let user1 = new User('Pete');
console.log(user1.address?.street);

user1.getAccess?.();