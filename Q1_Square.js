//Q.1] Take values of length & Breadth of a Rectangle from user and check if it's a Square.

let length = prompt("enter the length ")
lenght = parseInt(length)

let breath = prompt("enter the breath ")
breath = parseInt(breath)

if (length == breath) {
  console.log("This is not a Rectangle")
  console.log("This is Square")
}
else {
  console.log("This is Rectangle")
}
