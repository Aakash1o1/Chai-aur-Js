// Controll Flow
  // It refers to when controll moves in code based on conditions specified by user

// Example of this -->
//1. If statement
  // if(true && false || true){//AND has more precedence than OR
  //   console.log("a");
  // }
//2. Switch
  // switch (key) {
  //   case value:
      
  //     break;
  //   default:
  //     break;}



// Truthy and falsy value
// values whors values are assumed to be true of false without comparision
  // Falsy values  -->  false, 0, -0(Mostly for interview), 0n, "", null, undefined, NaN
  // Truthy values -->  true, "0", 'false', " ", [], {}, function(){} 


// Nullish Coalescing Operator(??)
// This is used to define a default value in case one of value is NULL or Undefined.
// This is usefull when a value if taken fron API and can turnout to be NULL/undefined
