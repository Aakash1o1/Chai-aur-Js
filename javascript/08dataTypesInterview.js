// There are basically 2 types of datatypes in js(according to documentation)
// 
// # Premitive and Non Premitive(Refrence type)
/* Premitive(Always call by value))
    1 string
    2 number
    3 boolean 
    4 Null
    5 undefined
    6 Symbol(Used to make any value unique. WIll be explained later)
    7 Object
    8 BigIne(Place n at end of number to convert it to bigint.It allows much larger elements to be stored)

   Non-Premitive(Refrence type)
    1 Arrays
    2 Objects
    3 Functions


#Dynamically / Statictically defined language -->
    Language in which we need to define the datatype of every variable defined is called a statically typed language.
    Javascript is a dynamically typed language. 


*/

// let a=Symbol(4);
// let b=Symbol(4);

console.log("Dose comparing different variable with same value give true  --> ");
let a=4;
let b=4;
console.log("Numbers --> " + (a===b));

let sa=Symbol(4);
let sb=Symbol(4);
console.log("Symbol --> " + (sa ==sb));

let arr1 = ["a","b","c"];
let arr2 = ["a","b","c"];
console.log("Array --> " + (arr1==arr2));

let obj1={name:"Name1",age:11}
let obj2={name:"Name1",age:11}
console.log("Object --> " + (obj1==obj2));

const myFunction = function(){
    console.log("Hello World")
}
console.log();
console.log("Printing function");
console.log(myFunction);
console.log("Printing function with a string prints the entire function decleration");
console.log(myFunction + "");