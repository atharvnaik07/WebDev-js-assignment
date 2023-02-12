//Q.6] Take input of age of 3 people by user and determine oldest & youngest among them.

let a = prompt("Enter the age of 1st Person : ")
a = parseInt(a)

let b = prompt("Enter the age of 2nd  Person : ")
b = parseInt(b)

let c = prompt("Enter the age of 3rd Person :")
c = parseInt(c)

if ((a > b) && (a > c)) {
  console.log("The biggest age is A");
}
else {
  console.log("The lesser age is A");
}
if ((b > a) && (b > a)) {
  console.log("The biggest age is B");
}
else {
  console.log("The lesser age is B");
}
if ((c > a) && (c > a)) {
  console.log("The biggest age is C");
}
else {
  console.log("The lesser age is C");
}