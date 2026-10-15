const productprice=500;
const quantity=3;
const account_active=true;
const discount_rate=0.1;
const subtotal= productprice*quantity;
const discount= subtotal*discount_rate;
const total= subtotal-discount;
const canpurchase= account_active && quantity>0 && total>0;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Total:", total);
console.log("Can purchase:", canpurchase);