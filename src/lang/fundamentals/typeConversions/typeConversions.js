// string conversion
let toysCount = 134;
console.log(`toys count: ${ String(toysCount) }`);

// numeric conversion
console.log('16' / '2');
let str = '12345';
console.log( typeof Number(str) );
console.log( Number('e34 edfa') );

// numeric conversion rules
console.log(`undefined -> NaN ${Number(undefined)}`);
console.log(`null -> 0 ${Number(null)}`);
console.log(`true -> 1 ${Number(true)}`);
console.log(`false -> 0 ${Number(false)}`);
console.log(`" 123 " -> 123 ${Number(" 123 ")}`);
console.log(`"hjkhk" -> NaN ${Number("hjkhk")}`);

// boolean conversion
// 0, "", null, undefined, NaN -> false
// other values -> true 