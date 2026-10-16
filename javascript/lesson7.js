/*
switch (expression) {
  case value1:
    // Code for value1
    break;

  case value2:
    // Code for value2
    break;

  default:
    // Code when no case matches
}
*/
 const status= "complete";
 switch (status) {
    case "pending":
        console.log("task is waiting");
        break;
    case "complete":
        console.log("task is complete");
        break;
 
    default:
        console.log("Unknown task status.");
        break;
 }
 // break stops execution from continuing into the next case.
 // default runs when no case matches.
 /* 
 function getPaymentMethod(method) {
  switch (method) {
    case "card":
      return "Pay by card.";

    case "cash":
      return "Pay with cash.";

    case "bank_transfer":
      return "Pay by bank transfer.";

    default:
      return "Unsupported payment method.";
  }
}

console.log(getPaymentMethod("crypto"));
 */

const day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend.");
    break;

  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;

  default:
    console.log("Invalid day.");
}
// | One variable has several exact possible values | switch |