const marvel = ["thor","Ironman","Spiderman"];
const dc = ["Superman","Flash","batman"];
console.log(`marvel --> ${marvel}`);
console.log(`dc --> ${dc}`);
// marvel.push(dc);//This pushes the entire array to first array 
// console.log(marvel);

// to add elements of second array to first arrary do this -->
console.log();
// Method 1
let temp1 = marvel.concat(dc);
console.log(`let temp1 = marvel.concat(dc);  -->   ${temp1}`);
//Method 2
let temp2 = [...marvel,...dc]//This is better as it can be used to merge any number of arrays, unlike concat method
console.log(`let temp2 = [...marvel,...dc]   -->   ${temp2}`);


let arar = [1,2,[4,5],6,[7,8,[9]]];
let aarr = arar.flat(1)//Number is the depth to which array needsto be flattened
console.log(aarr);