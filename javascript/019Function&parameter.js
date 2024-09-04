//Functions

// Suppose func is name of a function. Here
  // func --> will mean refrence to the function
  // func() --> will call the function

  // Example
  function sum(n1,n2){/*These variables are called Parameters.The value passed in it are called arguments*/
    console.log(n1+n2);
  }
  sum(1,2);//Here 1 and 2 are arguments
  // By default, function returns undefined
  // Also function terminate once a return statement is run
  
  let varr = undefined;
  if(!varr){//This will be true if varr is undefined
    console.log(`Value of varr is undefined`)
  }

  function sum2(n1,n2=2){/*If no value of n2 is given, it will be taken as 3*/
    // Once a default parameter in introduced, all succceding parameters must be default as well
    console.log(n1+n2);
  }
  sum2(4)