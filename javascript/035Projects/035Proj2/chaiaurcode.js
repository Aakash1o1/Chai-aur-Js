// I have a page with two input fields and a button
// User will give two values. On button click, these values need to be taken and taken in program.
// Also a value given by program need to be showen on screen


// I will need three values from page 
// One way is to take the form tag and take these values from it as needed
let form = document.querySelector('form');

form.addEventListener('submit'/*How program know which button means submit */,(frodo)=>{
  frodo.preventDefault();//By default, when a form is submited, the values goes to server. It needs to be prevented. We need the value in program, not in server
  let height = parseInt(document.querySelector('#height').value);//Output is in string, we need int
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');
  
  if(height==='' || height<0 || isNaN(height)){
    result.innerHTML = "Please give valid height";
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML = "Please give valid weight";
  }
  else{
    let ans = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>BMI = ${ans}</span>`;
  }

})