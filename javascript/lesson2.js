console.log("backend lesson2");
const firstnum = 12;
const secondnum = 15;
console.log(firstnum + secondnum );
// .................
console.log("A");

const number = 4;

console.log(number + 6);

console.log("B");
/*
Keyword 	Can reassign?   	Can redeclare in the same scope?	  Recommendation
const	      No	                      No	                       Default choice
let	          Yes	                      No	                       When reassignment is needed
var     	  Yes	                      Yes, in the same scope	   Avoid in modern code unless necessary
*/

let orderStatus = "pending";

console.log(orderStatus);

orderStatus = "completed";

console.log(orderStatus);
//.................................
let score;       // Declaration
score = 10;      // Assignment / initialization
score = 20;      // Reassignment
console.log(score);
//...................................................
const name="Abelom";
const productprice=500;
const delivery_fee=50;

console.log(productprice + delivery_fee);
console.log("pending");
console.log("confirm")
