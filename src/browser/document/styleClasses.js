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


// Resetting the style property
div1.style.display = 'none';
setTimeout(() => {
	div1.style.display = '';
	div1.style.removeProperty('color');
}, 3000);

div1.style.cssText = `
	color: white;
	padding: 5px;
`;

div1.setAttribute('style', 'font-size: 20px;');


// Mind the units
div1.style.margin = '10px';
console.log(div1.style.marginTop);
console.log(div1.style.marginRight);