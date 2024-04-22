'use strict';
// Reference Type
let user = {
	name: 'Mirco',
	hi() { console.log(`Hi, ${this.name}`); },
	bye() { console.log('Bye!'); }
};

console.log(user.hi());
//(user.name === 'Mirco' ? user.hi : user.bye)();


// Syntax check
let user1 = {
  name: "John",
  go: function() { alert(this.name) }
};

//(user1.go)()