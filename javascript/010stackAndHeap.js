const obj1 = {//Here we made an object.
    // Object is stored in heap memory and its refrence is givn to obj1 (Address to object is given to obj1)
    // Now whenever I do "let a=obj1" I am actually assigining address of object to a
    // The object is stored at one place and all variable are looking at it 
    // If one variable changes the object, it will make the change at place where object is stored
    // So the change will be visible in all variables
    name:"name1",
    age:"11"
}
const obj2 = obj1;
obj1.name="NewName";
console.log(obj1);
console.log(obj2);

// In simple words, object is made in memory and its address is given to variables
// Updating object means going to location where object is stored and changing the value

// This also means, if an object is stored as const, the properties of object can be changed and also the object can be updated as well.
// Every variable has memory asigned to it where it stores its data
// for objects,Variable dose not store the object. It stores the address of the object.
// The object is different from variable so it can be updated at will.

// In simple words, object is made in memory and its address is given to variables
// This means, variables only interact with the object, the object can be accessed and manipulated by others as well.

// So if variable is decleared constant, this would mean variable can't have a new address. The object it points to is free and can be updated