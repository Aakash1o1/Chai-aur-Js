let target1 = document.querySelector(".canvas");
let btn = document.querySelectorAll(".button");


// This wont worka as here btn is a nodeList and eventlistener cant be added to it
// btn.addEventListener('click',(e)=>{
//   console.log(e);
// })
// Use forEach to apply to indiv btns
btn.forEach(
  function(button1){
    console.log(button1);
    
  button1.addEventListener('click', (ee/*This is event object. Can have any name*/) => {
    target1.style.backgroundColor = ee.target.id;/*How to get id??*/
  })}
)



// Syntax ofa add event listener is -->   ('event that will triger this function','function that needs to be trigered when event takes place')