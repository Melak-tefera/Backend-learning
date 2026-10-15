/*
                   Input in Node.js
Since our goal is backend development, we need to learn how programs receive input in Node.js.
For simple command-line programs, Node.js provides node:readline. 
*/
const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (name) => {
    console.log(`Hello, ${name}!`);

    rl.close();
});
/* 
Understand the code
Code	                                Purpose
require("node:readline")	            Loads Node.js's readline module
createInterface()	                    Connects input and output streams
process.stdin	                        Receives input from the terminal
process.stdout	                        Writes output to the terminal
rl.question()	                        Displays a question and waits for a response
rl.close()	                            Closes the readline interface
*/

const readline = require("node:readline");

const rr = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rr.question("Enter the price: ", (priceInput) => {
    rr.question("Enter the quantity: ", (quantityInput) => {
        const price = Number(priceInput);
        const quantity = Number(quantityInput);

        if (
            !Number.isFinite(price) ||
            price < 0 ||
            !Number.isSafeInteger(quantity) ||
            quantity <= 0
        ) {
            console.log("Invalid price or quantity.");
        } else {
            const total = price * quantity;
            console.log(`Total: ${total} birr`);
        }

        rr.close();
    });
});