// Type conversion means changing a value from one data type to another.
const price = "250"; // String
const numericPrice = Number(price); // Number
console.log(numericPrice);        // 250
console.log(typeof numericPrice); // "number"

// explicit conversion with String()
console.log(Number("25"));      // 25
console.log(Number("3.14"));    // 3.14
console.log(Number(""));        // 0
console.log(Number("hello"));   // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

console.log(String(250));       // "250"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true

//......................................................
/*
Comparison table
Expression	            Result	                 Why
"5" + 2	                "52"	                 String concatenation
"5" - 2	                3	                     Numeric conversion
"5" * 2	                10	                     Numeric conversion
"5" == 5	            true	                 Loose equality
"5" === 5	            false	                 Different types

Professional rule: Prefer explicit conversions at the boundaries of your application, especially when processing HTTP request data.
*/

console.log(parseInt("25px"));   // 25
console.log(parseFloat("3.14")); // 3.14
console.log(Number("25px"));     // NaN

// template literals
const name = "Abelom";
const age = 22;

const message = `My name is ${name} and I am ${age} years old.`;

//....................
const order = {
    id: 1042,
    customerName: "Marta",
    total: 1500,
    status: "confirmed"
};

const message2 = `
Hello, ${order.customerName}!

Your order #${order.id} is ${order.status}.
Total: ${order.total} birr.
`;

console.log(message2);
//....................................

/*
Method	           Purpose
console.log()	   General output
console.error()	   Error messages
console.warn()	   Warnings
console.table()	   Display tabular data
console.dir()	   Inspect an object's properties
 */

const user = {
    id: 1,
    name: "Marta",
    role: "customer"
};

console.table(user);
console.error("Something went wrong");
// const ageInput = prompt("Enter your age:"); prompt used for input for web