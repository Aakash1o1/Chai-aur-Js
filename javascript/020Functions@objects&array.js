// IN some situations like a shoping cart, we dont know the exect number of arguments we will get.
// In such situation, we can use following syntax

function findSum(...num1){//Now user can give any number of arguments
  // Imp, like default parameters, once one element is given like this, all othr elements must also be same
  /* We used same syntax to merge multipal array elements in one
  There it is called spread operator, here it is called rest operator.
  Its impact depends on use 
  */
  return num1;
  //Now array will be become an ayyar of elements entered
}

console.log(findSum(100,200,300));