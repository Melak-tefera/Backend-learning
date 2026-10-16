// loops
const student=["yoni", "anani", "bento", "abelom", "murti"];
for (let i = 0; i <= student.length; i++) {
    const element = student[i];
    console.log(element);
    
}
// there are diference
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    console.log(element);
    
}

const products = [
  { name: "Keyboard", price: 1200 },
  { name: "Mouse", price: 500 },
  { name: "Monitor", price: 8000 }
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
}
/* 
 products is the array.
 i is the current index.
 products[i] retrieves the current product object.
 .name accesses its name property.
*/

let total = 0;

for (let i = 0; i < products.length; i++) {
  total += products[i].price;
}

console.log(total); // 9700

/* 
for loop	                                                      while loop
Often used when iterating over a known range	           Often used when repetition depends on a condition
Initialization, condition, and update are together	       The condition is at the top; initialization and update can be elsewhere
Good for counting and index-based array iteration	       Good when the number of iterations isn't known in advance

These are conventions, not strict rules. Either loop can solve many of the same problems.
*/
// don't forget about break and continue
//...................................................................
// nested loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
} 

const scores = [
  [80, 90, 75],
  [60, 85, 95],
  [70, 88, 92]
];

for (let row = 0; row < scores.length; row++) {
  for (let column = 0; column < scores[row].length; column++) {
    console.log(scores[row][column]);
  }
}
