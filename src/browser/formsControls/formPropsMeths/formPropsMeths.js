// Form properties and methods
// Navigation: form and elements
console.log(document.forms);
console.log(document.forms.first);
console.log(document.forms[0]);

let twoNumbsForm = document.forms.twoNumbs;
let n1 = twoNumbsForm.elements.one;
console.log(n1.value);

let ageForm = document.forms.age;
console.log(ageForm.elements.age);

console.log('----------------------');
console.log(form1.elements.login);
let fieldset1 = form1.elements.userFields;
console.log(fieldset1);
console.log(fieldset1.elements.login === form1.elements.login);

console.log(form1.login === form1.elements.login);


// Backreference: element.form
let login = form1.login;
console.log(form1 === login.form);


// Form elements
// input and textarea
setTimeout(() => {
	form2.line.value = 'new value';
	form2.txt.value = '...new text ...';
	form2.checkbox.checked = false;
}, 5000);


// select and option
console.log(select1.options);
setTimeout(() => {
	select1.options[2].selected = true;
	setTimeout(() => {
		select1.selectedIndex = 0;
		setTimeout(() => {
			select1.value = 'pear';
		}, 1000);
	}, 1000);
}, 3000);


let selected2 = Array.from(select2.options)
	.filter(option => option.selected)
	.map(option => option.value);

console.log(selected2);

let option = new Option('Ananas', 'ananas');
select1.append(option);

console.log(select1.options[0].text, select1.options[1].index);


// Task 1 - Add an option to select
console.log('------------------task------------------------');
let selectedOption = Array.from(genres.options).find(option => option.selected);
console.log(selectedOption.value);
let classicOption = new Option('Classic', 'classic');
genres.append(classicOption);
classicOption.selected = true;