let user = {
  name:"UserName",
  msg: function(){
    console.log(`name  --> ${this.name}`);
    console.log(this);//It will print the object
}
  
}
console.log(user.msg());
user.name = "New Name";
console.log(user.msg());

// What is "this" --> this refers to current context. In an object the current context is the object, so this.mane will mean user.main.
// Difference bw this.name and user.name --> 
  // Inside the object user, they will act the same, but this.name can be used in different object as well and it will start refring to the respective bject.

// console.log(this);//It will print empty object
//In node enviroment, "this" refers to empty object
// In browser "this" will refer to the window object.
// This is why we are able to access properties of windows.


// "this" don't work in functions
console.log();
console.log();
console.log(`"this" in function`);
function a(){
  let userName = "abcde";
  console.log(this);//It will print a lot of values
  console.log(this.userName);}//It will give  undefined
a();



// + + + + + + + + + + + + + + + + + + + + + + + + + + Arrow function+ + + + + + + + + + + + + + + + + + + + + + + + + + 
// Decleration
console.log();
console.log();

const chai1 = (/* Function parameters */) => {/* Function defination */};
console.log(`Working of this in arrow fn`);

const chai2 = () => {
  console.log("Another log in same function")
  console.log(`"this" printed in arrow function  --> `, this)//here 'this'  will give empty object
};
// Note: if "this" is printed like ${this}, it will be sent for string conversiona d will retuen [Object:object]
chai2();


console.log();
console.log(`Running Function`);

const chai3 = (n1,n2) => {return n1+n2;}
console.log(chai3(2,3));


const chai4 = (n1,n2) =>  n1+n2//This is called implecit return
// It's compulsory to give only one line of fn defination and the line will be treated as return statement
// Nothing sepecial, just to tell its allowed. It's used extencively in react 
