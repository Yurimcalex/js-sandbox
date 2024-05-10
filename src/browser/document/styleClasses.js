// Styles and classes
console.log(div1.className);
div1.className = 'replace all previous';
console.log(div1.className);
div1.className = '';

div1.classList.add('container');
div1.classList.add('full_width');
div1.classList.add('green');

console.log(div1.classList.contains('green'));
div1.classList.toggle('green');
console.log(div1.classList.contains('green'));

div1.classList.remove('full_width');

for (let cls of div1.classList) {
	console.log(cls);
}


// Element style
div1.style.backgroundColor = 'lightgray';
div1.style.color = 'white';

console.log(div1.style);