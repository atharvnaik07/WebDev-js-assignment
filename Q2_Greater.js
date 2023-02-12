//Q.2] Take two int values from user & print greatest among them.

let a = prompt("enter the first number")
a = parseInt(a)
let b = prompt("enter the second number")
b = parseInt(b)
if (a > b)
  console.log(a + " is greater-than " + b)
else {
  if (a < b)
    console.log(a + " is less than " + b)
  else
    console.log("equal")
}