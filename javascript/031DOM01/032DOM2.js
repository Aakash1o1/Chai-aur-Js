// In a web page, all elements are treated as objects where both id and class are there properties.
// GetElementById, is a method that takes id of elements as parameter and returns all elements that has the input as there id.
// In GetElementById, id is called 'id' but class is called 'className'.(Why --> hamara yaha asa he hota h)
// Just like get attribute, we also have set attribute


// Some of these methods are
// title.innerText  -->  returns the text visible  to the user
// title.innerContent --> returns all text in container irrespective of if it is visible to user or not
// title.innerHTML --> returns all content of container, including attributes 
// title.querySelectors('') --> gives first element with that attribute (We can select elements, id's, and classes)
// title.querySelectorsAll('') --> gives all elements with that attribute (We can select elements, id's, and classes)

// IMPORTANT : querySelectorsAll('') returns a list of all elements with the specified property.
  // This list is NOT an Array.
  // Most of it's properties are same as array biut it share some. 
  // The properties that can be used on these lists can be seen by checking them in console of a browser
// How to convert nodeList to array  -->  Array.from(nodeList);
// How to convert HTMLList to array  -->  Array.from(List);