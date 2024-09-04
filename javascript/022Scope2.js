//This lecture tells about 
  // 1. Basic function scoping
  // 2. Function vs expression

// What is Function expression and Named function
// Named Function -->  
console.log(`sum1(5)  -->  ${sum1(5)}`);

function sum1(n1){return n1+1;}

// Function Expression -->
console.log(`sum2(5)  -->  ${sum2(5)}`);//This will give error
const sum2 = function (n1){return n1+2;}

// Functionally they are both the same.
// The difference is, Named Fn are moved to the top of there ontaning scope. i.e. they can be used aywhere in there scope, even before decleration. In contrast, Fn exression can only be used after they are decleared.

// Note: In Function Expression, if a function is decleared and later the variable pointing to function defination is given different value, the function definetion becomes elidgible for garbage collection, so it don't lead to garbage collection.