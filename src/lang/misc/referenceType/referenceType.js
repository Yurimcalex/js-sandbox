'use strict';
// Reference Type
let user = {
	name: 'Mirco',
	hi() { console.log(`Hi, ${this.name}`); },
	bye() { console.log('Bye!'); }
};

console.log(user.hi());
(user.name === 'Mirco' ? user.hi : user.bye)();
// --------- block ---------


// Syntax check
let user1 = {
  name: "John",
  go: function() { alert(this.name) }
};

(user1.go)()
// --------- block ---------


// Task 2 - Explain the value of this
let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();
(obj.go)();
(method = obj.go)();
(obj.go || obj.stop)();