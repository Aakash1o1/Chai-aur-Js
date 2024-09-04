let a = "3ddd3";
console.log(typeof(a));
let b = Boolean(a);
console.log(typeof(b));//Datatype of b will be as set above but it might not be defined
/*Setting a string to number data type is possible but if the string had non integervalues or had spacesses(or anything else that couldnt be turned to integer) printing the new value  will give NaN(Not a Number) */
// Same for any other conversion. checking the type will give the assigneed type but printing the value will depend on the fact if it is possible to convert to new datatype.

console.log(b);
//Also in same way, there can be sme unexpected conversions
// Ex
//   to integer
//   null -> 0
//   to boolean
//   0 -> false
//   anything else -> true

let temp =1;
let temp2=Boolean(temp);
console.log(typeof(temp2));
console.log(temp2);