// Immideatly Invoked Function Expession
// Normal functions are executed only when they are called, IIFE runs immidiately when interpreter encounters it.
// This is usefull when 
  // 1. we need to run a function as quickly as possible.(Situation - IDK)
  // 2. We dont want function to be poluted by global scope

// Syntax -->
let arg1=2,arg2=4;
console.log(`This will be printed first`);


(function sum(n1,n2){
  console.log(n1+n2);//This will run even without being called and the function(sum) wont be available to rest of code
  return n1+n2;//This will have no effect
})(arg1,arg2);//It is compulsory to give this semi-colon; without it somthings wont work
  // without semi-colon, if console.log() dont have ";" it will give error saying it is not a function
  // also if a IIFE follows it immidiately, it will give error 


console.log("WOWOW");


((n1,n2) => {//Arrow fn as IIFE
  console.log(n1+n2);
})(arg1,arg2);