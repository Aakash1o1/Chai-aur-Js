//Normal
const obj1 = {};
obj1.id="123a";
obj1.name="Sammy";
obj1.isLoggedIn="false";
// console.log(obj1);

const obj2 = {
    email:"Some@email.com",
    fullName:{
        userFullName:{
            firstName:"FirstN1",   
            lastName:"LastN1"
        }
    }
}

console.log(`obj2.fullName.userFullName  -->  ${obj2.fullName}`);//These are giving different output
console.log(obj2.fullName);
//Why this happens --> 
    // 1. ${} this syntax takes the value of expression inside  brackets.
    // 2. the value is converted to string using toString function
    // 3. The output of toString is printed
// When an object is passed to toString, it returns [object Object].

// There might be a situation where the element of object i am trying to access dosn't exist.
// Normally, this will give error
// To prevent this  -->  use this syntax
console.log(obj2.fullName?.userFullName.lastName);
// This checks if expression given before ? (obj2.fullName) is not undefined or null.
// If it is, the expression returns undefined.
// If expression after ? is undefined, it dosnt give undefined, It gives error

// Merging Objects
const objj1 = {1:"a",2:"b"}
const objj2 = {3:"a",2:"d"}
  // Merging
  // Method 1
  const objj3 = {...objj1,...objj2}
  console.log(objj3);//If keys are common in both, last occurance of that key will be taken
  // Method 2
  Object.assign(objj1,objj2); 
  // Basically this operation updates the first object in list, placing all keys value pairs of objects to that object
  // Also it returns refrence to the first object
  console.log(`After "Object.assign(objj1,objj2);"`);
  console.log(`objj1 --> ${JSON.stringify(objj1)} `);
  // To make sure we get an independent object, place an empty object in first position of list
  const objj5 = Object.assign({},objj1,objj2);