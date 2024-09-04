let clock = document.getElementById('clock');




setInterval(()=>{
  let time = new Date();
  clock.innerHTML = `${time.getHours().toString().padStart(2,'0')} : ${time.getMinutes().toString().padStart(2,'0')} : ${time.getSeconds().toString().padStart(2,'0')} `;
},1000)



// How it works 
  // 1. Get time using built in function place it on screen 
  // 2. refresh time periodically using "setIntervel()"  -->
      // setIntervel( ()=>{/*Function */} , Intervel in milli Seconds  )
  // 3. It will give single digit output when time is from 0-9, to get 2 digit value every time, use toString().padStart(2,'0');