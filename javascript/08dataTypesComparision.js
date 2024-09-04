
console.log("String vs number ==");
console.log("\"a\"<3    " + ("a"<3));//False
console.log("\"2\"<3    " + ("2"<3));//Here 2 is automatically converted to number here
console.log("\"00002\"==2   " + ("00002"==2));//True
console.log("\"2\"==2   " + ("2"==2));    //True
console.log();

console.log("Comparision of null");
console.log("null>0   " + (null>0));    //False
console.log("null==0  " + (null==0));   //False
console.log("null>=0  " + (null>=0));   //True
console.log("null+22  " + null+22);   //22
// Why --> comparision operators > < >= <=, convert null to 0 while equalit check(==) dosnt 
console.log("");

console.log("Using ===");
console.log("\"2\"===2  " + ("2"===2));    //True
console.log("\"2\"==2   " + ("2"==2));   //22


console.log("Don't do comparisions of two different datatypes. It ALWAYS causes confusion.");