// Dates
// Date is an object
let myDate = new Date();
console.log(`myDate --> ${myDate}`);
console.log(`myDate.toString() --> ${myDate.toString()}`);
console.log(`myDate.toDateString() --> ${myDate.toDateString()}`);
console.log(`myDate.toLocaleString() --> ${myDate.toLocaleString()}`);

let myDate2 = new Date(2003);//this will contain first date of year2003
let myDate3 = new Date(2003,9,21);//this will contain first time instance that happeed on 21 oct 2003
// Months are 0 indexed so 0 means jan
// if month number exceed 11, the extra umbers will be added to year 
let myDate4 = new Date(2003,9,21);
console.log(myDate4.getDay());
console.log();
console.log();

// Different forms of display can be used by selecting appropriate method()