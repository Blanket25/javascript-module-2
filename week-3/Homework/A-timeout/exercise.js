/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)
*/
//setTimeout(() => {
//    document.body.style.backgroundColor = "tomato"
//}, 5000)

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
const colors = ["#e76f51", "#f4a261", "#e9c46a", "#2a9d8f", "#264653"]; 

let i = -1;
setInterval(() => {
    document.body.style.backgroundColor = colors[i]
    i ++;
    if(i > colors.length-1) {
        i = 0;
    }
}, 5000)


