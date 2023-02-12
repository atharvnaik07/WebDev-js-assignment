// Q.10] Write program using Switch-case statement for Months of Year. 


let month = prompt("enter the number of month")
month = Number.parseInt(month)
switch (month) {
  case 1:
    console.log("january")
    break
  case 2:
    console.log("february")
    break
  case 3:
    console.log("march")
    break
  case 4:
    console.log("april")
    break
  case 5:
    console.log("may")
    break
  case 6:
    console.log("june")
    break
  case 7:
    console.log("july")
    break
  case 8:
    console.log("august")
    break
  case 9:
    console.log("september")
    break
  case 10:
    console.log("october")
    break
  case 11:
    console.log("november")
    break
  case 12:
    console.log("december")
    break
  default:
    console.log("you enterd wrong number of month ")
    break
}