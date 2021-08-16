const arrayOfLemons = [
    "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    "https://images.unsplash.com/photo-1587324438673-56c78a866b15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1617658946735-2611514fedc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
    "https://images.unsplash.com/photo-1610833805553-43556a0f821d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80"
]

 let imgEl = document.getElementById("img-element")
 const prevBtn = document.getElementById("prev-btn")
 const nextBtn = document.getElementById("next-btn")
 
 let i = -1;
nextBtn.addEventListener('click', () => {
     i ++;
      if(i > arrayOfLemons.length-1) {
        i = 0;
     }
   
     console.log(i);
    imgEl.src = arrayOfLemons[i];
})

prevBtn.addEventListener('click', () => {
    i --;
    if (i < 0) {
        i = arrayOfLemons.length-1;
    }
    imgEl.src = arrayOfLemons[i];
    console.log(i);
})

let seconds = 5000;

const secInput = document.getElementById("sec-input")
const enterBtn = document.getElementById("enter-btn")

enterBtn.addEventListener('click', () => {
    seconds = secInput.value * 1000; 
    secInput.value = "";
})

const autoBackBtn = document.getElementById("auto-back-btn")
const autoForwardBtn = document.getElementById("auto-forward-btn")

let setIntFunc;

autoForwardBtn.addEventListener('click', () => {
    clearInterval(setIntFunc) 
    setIntFunc = setInterval(() => {
        i ++;
      if(i > arrayOfLemons.length-1) {
        i = 0;
     }
    imgEl.src = arrayOfLemons[i];
    }, seconds)
   
})

autoBackBtn.addEventListener('click', () => {
    clearInterval(setIntFunc) 
    setIntFunc = setInterval(() => {
    i --;
    if (i < 0) {
        i = arrayOfLemons.length-1;
    }
    imgEl.src = arrayOfLemons[i];
     }, seconds)
})

const stopBtn = document.getElementById("stop-btn")

stopBtn.addEventListener('click', () => {
        clearInterval(setIntFunc)    
})

