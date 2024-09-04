// JavaScript Execution Context -> means how js will run this program
// js has two contexts -->
  // 1. Global execution Context( this is referd to variable named 'this')( in browser, global context is windows)
  // 2. Function Execution Context 
  // 3. Eval execution context(Not important, it's a property of global execution)

// js runs program in two phases-->
  // 1. Memory creation phase
  // 2. Execution phase



// Now, once a code is executed how is it processed -->
// ex: code -->  
      //   let var1 = 10;
      //   let var2 = 5;
      // function addNum(num1,num2) {
      //   let total=num1+num2;
      //   return total;
      // }
      // let result1 = addNum(var1,var2);
      // let result2 = addNum(10,2);

// Phase 1 --> global context is created
// phase 2 --> Memory phase
  // val1 = undefined
  // val2 = undefined
  // addNum = function defination
  // result1 = undefined
  // result2 = undefined


// Phase 3 --> Execution Phase
  // val1 = 10
  // val2 = 5
  // In add number, nothing will happen as it is block of code, with nothing to execute.(Code within function block will run when function is caled and the entire cycle will run specially for it.)
  // Calling addNum() --> Calling a function will make a New Variable Enviroment(NVE) and give it a thread
    // Here all these steps will run from start
    // Phase 1 --> Memory Phase --> 
      // val1=undefined
      // val2=undefined
      // total=undefined
    // Phase 2 --> Execution Phase
      // num1 = 10
      // num2 = 5
      // total = 15
    // Now as total is returned, its value will be given to its global execution context
    // Once function ends, the new execution context that was made for the function is deleted.
  
  // Calling result2's addNum() function.
    // Same story as before will unfold
