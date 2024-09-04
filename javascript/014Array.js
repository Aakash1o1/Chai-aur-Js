const myArr = [0,1,2,3,4,5];
// 1. Resizable
// 2. Can have multipal different datatypes
// 3. Coping array gives refference(address) of array and not a new array. A change to one will affect other as well.
myArr.push(7);
myArr.pop();
myArr.unshift(-1);//Adds element to front of array
myArr.shift();//Removes element from front of array
console.log(`myArr --> ${myArr}`);
console.log(`myArr.includes(9) --> ${myArr.includes(9)}`);
console.log(`myArr.indexOf(9) --> ${myArr.indexOf(4)}`);

//Join --> Makes a string of elements of array seprated by the value specified
console.log();
let newArr = myArr.join("_");
console.log(`let newArr = myArr.join("_");          -->            ${newArr} (This is string)`);

// Slice and splice
console.log();
console.log();
console.log(`Slice and splice`);
console.log(`Original --> ${myArr}`);
let mar1 = myArr.slice(1,3);
console.log(`let mar1 = myArr.slice(1,3) --> ${mar1}`);
console.log(`After Slice --> ${myArr}`);
let mar2 = myArr.splice(1,3);//
console.log(`After Splice --> ${myArr}`);
console.log(`let mar2 = myArr.splice(1,3); --> ${mar2}`);

/*
Difference between slice and splice 
1. Slice don't update the array while splice dose
2. Slice don't include the final index while splice dose 
*/