// Q.5] A school has following rules for grading : -
//        a] Below 25 = F grade.
//        b] 25 - 45 = E grade.
//        c] 45 - 60 = D grade.
//        d] 50 - 60 = C grade.
//        e] 60 - 80 = B grade.
//        f] Above 80 = A grade.
//      Ask user to enter marks & print the corresponding grades.


let marks = prompt("enter your number of marks")
marks = parseInt(marks)

if (0 < marks && marks < 100) {
  if (marks > 80) {
    console.log("A grade")
  }
  else if (marks > 60 && marks <= 80) {
    console.log("B grade")
  }
  else if (marks > 50 && marks <= 60) {
    console.log("C grade")
  }
  else if (marks > 45 && marks <= 50) {
    console.log("D grade")
  }
  else if (marks >= 25 && marks <= 45) {
    console.log("E grade")
  }
  else if (marks < 25) {
    console.log("fail")
  }

  else
    console.log("you entered wrong marks")
}




