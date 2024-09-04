/* Objects
There are two ways to declear an array
 1. Singelton
 2. Using object literals
 */
// Object literals -->

 const jsUser = {
    name:"name1",//name is treated as string as well
    age: 18,
    location:"jaipur",
    email:"abc@def.com"
 }
//accessing elements of array
/*1*/console.log(`jsUser.name --> ${jsUser.name}`);
/*2*/console.log(`jsUser["name"] --> ${jsUser["name"]}`);//This is usefull in case key has spaces
// Both have same working and both are equally optimized

// How to make an object unchangable -->

// Object.freeze(jsUser);//Now this object cant be updated
// Changing anything now wont give error but the change wont propogate

jsUser.greeting = function(){
    console.log(`Hie there, ${this.name}`);//Inn an object, "this" refers to the object 
}
console.log(jsUser.greeting/*+""*/)//This will just give function(Just like trying printing function without calling it)

console.log(jsUser.greeting())//This will run the dreeting() function and also print undefined as the function is not returning anything












// How to use Symbol as key in objects
const smb = Symbol("smb1");
const obj2 = {
    [smb]:"val"//Without square bracket, smb will be treated as string and will have no relation with the symbol
}
// to access this now, we again need to keep it in square brackets