//Project
  // Computer will generate a number from 1 to 100.
  // User needs to guess this number within 10 gusses 

// Details
  // Computer will generate a random number from 1 to 100

  // User will fill the number in given space and click button to subimt
  // Computer will tell if number is same as target number

  // At bottom, there are two spaces that show
    // 1. List of previous gusses
    // 2. Number of gusses left
  


//1. Generate random number
let randNum = Math.floor(Math.random()*100 +1 );//generate value in range [0,1);
console.log(randNum);


// 2. Take user input when user clicks Submit
const submit = document.getElementById('subt');
const input = document.getElementById('guessField');

// Make the array to be displayed at bottom, as well as number of tries left


let selectedDisplay = [],triesLeft=10;
let selected = new Map();

// 3. When user submits a value, it need to be saved in a variable

// Select field that will tell if selected value is low or high or give Errors
let output = document.querySelector('.lowOrHi');

 
  // Make a function that updates the values showing number of turns remaning and elements used
  function updateScorBoard(userInput,triesLeft1){
    document.querySelector('#guessField').value=" ";
    if(selected.has(userInput)){
      output.textContent = `\nYou have already tried ${userInput}`;
      return;
    }
    selectedDisplay.push(userInput);
    document.querySelector('.guesses').textContent = selectedDisplay.join(", ");
    triesLeft--;
    if(triesLeft==0){document.querySelector('.lastResult').textContent = "Game over";}
    else{document.querySelector('.lastResult').textContent = triesLeft;}
  }

  
  
  submit.addEventListener('click',(MrBean)=>{
    MrBean.preventDefault();
    
  if(triesLeft==0){return ;}
  
  
  // How to get value of an input field
  let userInput = parseInt(document.querySelector('#guessField').value.trim());

  
  
  

  // Now check the value If it is -
    // Nan --> "Do nothing"
    // less than1 or more than 100 --> ask to select value bw 1 and 100
    // Character --> ask to give a numeric value bw 1 and 100
    
  if(userInput === NaN){/*Even for spaces, we will get NaN */}
  else if(userInput < 1 || userInput > 100){
    document.querySelector('#guessField').value=" ";
    output.textContent = `The number is in range 1 to 100. ${userInput} is not possible`;
  }
  else if(!Number.isInteger(userInput)){
    output.textContent = `Please give an integer value`;
    document.querySelector('#guessField').value=" ";
  }
  
  
  else if(true){
    
    
    if(userInput==randNum){output.textContent = (`Correct Guess`);}
    else if(userInput>randNum){
      output.textContent = `${userInput}'s too Big`;
      updateScorBoard(userInput,triesLeft);
    }
    else if(userInput<randNum){
      output.textContent = `${userInput}'s too Small`;
      updateScorBoard(userInput,triesLeft);
    }
    
    selected.set(userInput,"");
  }
  console.log(userInput);
  

  
})