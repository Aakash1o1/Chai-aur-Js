// Loops for arrays

const arr = [1, 2, 3, "helli", 4, 5];
console.log(arr.length);
arr.push(6)//Array is saved in memory and the variable just has its address
console.log(arr.length);


console.log();
console.log();
for (let i of arr) { console.log(i); }//For of
for (let i in arr) { console.log(i); }//for in



// Maps
// It stores elements in key value pair
// The difference between object and map is that unlike objects, maps store elements in order of there insertion.
// Also maps are not iterable
console.log();
console.log();
console.log("Maps");

const map = new Map();
map.set('IN', 'INDIA')
map.set('US', 'USA')
map.set('FR', 'FRANCE')
map.set('GE', 'GERMANY')
console.log(map);

console.log();
console.log();
console.log("This method wont work on Objects");

console.log(`for(key of map){console.log(key);}`);
for (const key of map) { console.log(key); }// Key/Value pair
console.log();
console.log(`for(key in map){console.log(key);}`);
for (const key in map) { console.log(key); }// Keys pair
console.log();
console.log(`for(key of map){console.log(   key[0]   );}`);
for (const key of map) { console.log(key[0]); }// Keys
console.log();
console.log(`for(key of map){console.log(   key[1]   );}`);
for (const key of map) { console.log(key[1]); }//Values
console.log();
console.log(`for([ab,cd] of map){console.log(\`Key = \${ab} and value = \${cd}\`);}//Values`);
for (const [ab, cd] of map) { console.log(`Key = ${ab} and value = ${cd}`); }//Values


// CallBack function : When a function is passed to another function as argument, it is called Callback function
// ForEach loop
console.log();
console.log();

console.log(`map.forEach(function(varr){
  console.log(\`\${varr[0]} and \${varr[1]} and \${varr}\`)
  })`);


console.log(`forEach Loop`);
map.forEach(function (varr) {//Here varr will represent the keys
  console.log(`${varr[0]} and ${varr[1]} and ${varr}`)
})

console.log();
console.log();

console.log(`forEach loop in arrays`);
const temp = ['a','de','ghi','jklm','nopqr'];
temp.forEach((t1)=>{console.log(t1);})

console.log();
temp.forEach((t1,t2,t3)=>{
  console.log(t1,t2,t3);//here t1 will become value , t2 will be index and t3 will be entire array
})

//filter
console.log();
console.log("Filter");
const temp2 = temp.filter((value)=>{
  return value.length > 2;//It iterates through all elements and returns the elements that satisfy the condition mentioned in return
})
console.log(temp2);



// MAP
// Just like filter, this is callback function.
// It updates values of array.
temp.map((value)=>{
  return 3;
})
console.log();
