const cource = {
  courcename :"js in hindi",
  price:"999",
  name:"Name1"
}

// Sometimes we need to use the same property of an object many times, so we can give it a new name
const{name} = cource;//now name variable will refer to the "name" property of object
const{price:pr} = cource;//here a new name is assigned to price
console.log(name);
console.log(pr);

// API's --> 

// An api returns value in JSON format
