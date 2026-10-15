/* 
These operators perform mathematical calculations.
Operator	  Meaning	        Example	   Result
+	          Addition	         10 + 5	    15
-	          Subtraction	     10 - 5	    5
*	          Multiplication	 10 * 5	    50
/	          Division	         10 / 5	    2
%	          Remainder	         10 % 3	    1
**	          Exponentiation	 2 ** 3	    8

*/

const quantity = 10;
const groupSize = 3;
console.log(quantity % groupSize); // 1
//.............................................
/*
Operator	Equivalent to
x += 5	    x = x + 5
x -= 5	    x = x - 5
x *= 5	    x = x * 5
x /= 5	    x = x / 5
x %= 5	    x = x % 5

*/
let accountBalance = 500;
const withdrawal = 120;
accountBalance -= withdrawal;
console.log(accountBalance); // 380

//.............................................
/*
Comparison operators compare two values and return a Boolean: true or false.
Operator	   Meaning	                Example	       Result
>	           Greater than	            10 > 5	       true
<	           Less than	            10 < 5	       false
>=	           Greater than or equal	10 >= 10	   true
<=	           Less than or equal	    5 <= 10	       true
===	           Strict equality	        5 === 5	       true
!==	           Strict inequality	    5 !== "5"	   true 
*/
console.log(0 == false);  // true
console.log(0 === false); // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

//..............................................
/*
Logical operators combine conditions or reverse a condition.
Operator	   Meaning	   Example	            Result
&&	           AND	       true && true	        true
||	           OR	       true || false	    true
!	           NOT	       !true	            false
 */

const isAdmin = false;
const isModerator = true;

const canManagePosts = isAdmin || isModerator;

console.log(canManagePosts); // true
//  see truthy dont forget about it
