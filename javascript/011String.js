// Concatinating strings
console.log("Concatinating strings");
let name = "Name1 ";
let value =50;
console.log(name + value + " Worked");

console.log();
console.log("Concatinating using backticks(It's called string Interpolation)");
// Here I can enject elements directly using there variable names
console.log("\`Hello ${name}\`  -->  " + `Hello ${name}`);
console.log("\`Hello ${name.toLowerCase()}\`  -->  " + `Hello ${name.toLowerCase()}`);

// Different way to declear string
console.log();
let name2 = new String('This is a string')//This is also a way to declear string.It makes an instance of string object woth value as given
let name3='This is a string';
// The final result is almost identical, just showing some minor differences sometimes, like -->
// 1. Printing name2 will print object refrence instead of string's value
// 2. Comparing two string names of object type will always give false as object have address to the string and not the strings themselves.

console.log(`Printing string stored by object instance --> `);
console.log(name2);
console.log(`Printing string stored by object instance along wth other string --> ${name2}`);
console.log(`name2 === "This is a string" --> ` + (name2 === "This is a string"))
console.log(`name3 === "This is a string"--> ` + (name3 === "This is a string"))

console.log();
console.log();
// As strings are instance of string objects, they can use properties of string objects like toUpperCase, toLowerCase, etc
// Here keys are numbers from 0 to length-1, and values are characters from start at end
// To get list of functions that can be used on string, make string object in a browser console and print it. Click on dropdown list that appears bellow printed value.

let varr = "This is a string";
console.log("Some methods of strings");
console.log(`varr --> ${varr}`);
console.log(`varr.toUpperCase() --> ${varr.toUpperCase()}`);
console.log(`varr.toLowerCase() --> ${varr.toLowerCase()}`);
console.log(`varr.charAt(3) --> ${varr.charAt(3)}`);
console.log(`varr.indexOf("i") --> ${varr.indexOf("i")}`);
console.log(`varr.substring(0,3) --> ${varr.substring(0,3)}`);
console.log(`varr.slice(0,3) --> ${varr.slice(-8,3)}`);//This should work but its not
{
let temp = "    Spaces            ha    ha             "
console.log(`temp.trim() --> ${temp.trim()}`);
console.log(`temp        --> ${temp}`);
}
{
let url = `https://abc.com/abc%20def%20ghi`;
console.log(`url.replaceAll('%20'," ") --> ${url.replaceAll('%20',"-")}`);
console.log(`url.includes("abc") --> ${url.includes("abc")}`);
console.log(`url.split("%20") --> ${url.split("%20")}`);
}