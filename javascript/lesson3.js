/*
Data type       	Example	       Purpose
String	            "Hello"	       Text
Number	            42, 3.14	   Integers and floating-point numbers
BigInt        	    123n	       Very large integers
Boolean   	        true, false	   Logical values
Undefined	        undefined	   A value has not been assigned or is missing
Null	            null	       An intentional absence of a value
Symbol	            Symbol("id")   Unique identifiers
*/
const firstName = "Abelom";
const city = 'Addis Ababa';
const message = `Hello, ${firstName}!`;
console.log(message);


const age = 20;
const price = 49.99;
const temperature = -5;
console.log(age);
console.log(price);

console.log(10 / 0);       // Infinity
console.log("hello" * 2);  // NaN
console.log(typeof NaN); // "number"
//................................................
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof 10n);         // "bigint"
console.log(typeof Symbol());    // "symbol"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function() {}); // "function"


console.log(String(100));    // "100"
console.log(Number("25"));   // 25
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
