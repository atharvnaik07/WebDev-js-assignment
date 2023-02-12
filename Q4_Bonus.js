//Q.4] A company decided to give bonus of 10% to employee if their time of service is more than 5 years. Ask user for their salary per month, years of service and print net bonus and total salary.

let year = prompt(" enter the years of  joined the company:")
year = parseInt(year)
// sa= salary
let sa = prompt("Enter you number of salary :")
sa = parseInt(sa)

if (year > 4 && year < 60) {
  console.log("you are eligible for give bonus")
  let pr = sa * 10 / 100;  // pr= percentage
  let bon = sa + pr        // bon= bonus
  console.log("you get " + bon)

}

else {

  if (year > 0 && year < 4) {
    console.log("you are not eligible for bonus")

  }
  else {
    console.log("you entered wrong input")
  }
}