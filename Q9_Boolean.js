// If x=7, y=2 & z=3 then find the values of x==2, x!=7, x!=5, y>=5, z!=0 || x==7, !(y<10) & print result as true or false (boolean values).
let x = 7, y = 2, z = 3
console.log("If x=%d, y=%d & z=%d, then :-", x, y, z);
console.log("\n\t1] x==2 --> ", Boolean(x == 2));
console.log("\t2] x!=7 --> ", Boolean(x != 7));
console.log("\t3] x!=5 --> ", Boolean(x != 5));
console.log("\t4] y>=5 --> ", Boolean(y >= 5));
console.log("\t5]  z!=0 || x==7 --> ", Boolean(z != 0 || x == 7));
console.log("\t6] !(y<10) --> ", Boolean(!(y < 10)));
