// Q.8] A student will not be allowed to sit in exam if their attendance is less than 75%.
//         a] Take following Input from user : -
//             i] No of classes held.
//             ii] No of classes attended.
//         b] Give following iutput : -
//             i] % of classes attended.
//             ii] Allowed in exam or not.

let held = prompt("Enter the number of held:");
held = Number.parseInt(held);
//att= attenbded
let att = prompt("Enter the number of attended:");
att = Number.parseInt(att);
let total = att / held * 100;

if (total >= 75 && att <= held) {
  console.log("You are allowed to sit for Exams.");
}
else {
  if (0 <= att && att <= held) {
    console.log(" You are not allowed to sit for Exams.");
  }
  else {
    console.log("You are entered wrong input");
  }
}
