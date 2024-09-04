// ++++++++++++++++++++++++Number+++++++++++++++++++++++++++++++
let num = 123.485;
console.log("Trying methods on numbers");
console.log(num.toFixed(2));//Reduces number of ecimal places and rounds number off
console.log(num.toPrecision(2));//Brings number to given number of digits
let hundreds = 10000000000;
console.log(`hundreds.toLocaleString() --> ${hundreds.toLocaleString()}`);
console.log(`hundreds.toLocaleString('en-IN') --> ${hundreds.toLocaleString('en-IN')}`);


// ++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++
// Here We will see the Math library
console.log();
console.log();
console.log("Math Library");
console.log(`Math.abs(-4)  -->  ${Math.abs(-4)}`);
console.log(`Math.round(4.5)  -->  ${Math.round(4.5)}`);//It rounds up the element
console.log(`Math.ceil(4.1) --> ${Math.ceil(4.1)}`);
console.log(`Math.floor(4.9) --> ${Math.floor(4.9)}`);
console.log(`Math.sqrt(30) --> ${Math.sqrt(30.5)}`);
console.log(`Math.min(4,5,3,6,2) --> ${Math.min(4,5,3,6,2)}`);
console.log(`Math.random() --> ${Math.random()}`);//It gives a random value between 0 and 1