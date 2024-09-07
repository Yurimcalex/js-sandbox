// task - the postfix and prefix forms
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a, b, c, d);

// task - assignment result
let a1 = 2;
let x = 1 + (a1 *= 2);
console.log(a1, x);

// task - type conversions
console.log(`"" + 1 + 0 ->`, '' + 1 + 0, '10');
console.log(`"" - 1 + 0 ->`, '' - 1 + 0, -1);
console.log(`true + false ->`, true + false, 1);
console.log(`6 / "3" ->`, 6 / '3', 2);
console.log(`"2" * "3" ->`, '2' * '3', 6);
console.log(`4 + 5 + "px" ->`, 4 + 5 + 'px', '9px');
console.log(`"$" + 4 + 5 ->`, '$' + 4 + 5, '$45');
console.log(`"4" - 2 ->`, '4' - 2, 2);
console.log('"4px" - 2 ->', '4px' - 2, NaN);
console.log(`"  -9  " + 5 ->`, '  -9  ' + 5, '  -9  5');
console.log(`"  -9  " - 5 ->`, '  -9  ' - 5, -14);
console.log(`null + 1 ->`, null + 1, 1);
console.log(`undefined + 1 ->`, undefined + 1, NaN);
console.log(`" \t\n" -2 ->`, ' \t\n' - 2, -2);

// task - fix the addition
let n1 = prompt('First number?', 1);
let n2 = prompt('Second number?', 2);
alert(+n1 + +n2);