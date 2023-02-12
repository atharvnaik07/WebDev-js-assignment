//Q.3] A shop will give discount of 10% if the total cost of purchased quantity is more than 1000. Ask user for quantity & assume per unit cost to be 100. Judge and print total cost for user.

let precentage
let quantity = prompt('Enter a number of quantity: ');
quantity = parseInt(quantity)
let check = quantity * 100

if (check > 1000) {

  console.log("you are get 10% discount")
  precentage = check * 10 / 100;
  let total = check - precentage
  console.log("your total cost is " + total)

}
else {
  console.log("you don't get any discount")
  console.log("your total cost is " + check)
}