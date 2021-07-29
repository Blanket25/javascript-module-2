/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
*/

const pList = document.querySelectorAll("p");
console.log(pList)

/*
    2. the first div element node
    --> should log the ".site-header" node
*/

const divEl = document.querySelector("div.site-header");
console.log(divEl)

/*
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
*/

const text = document.getElementById("jumbotron-text");
console.log(text)

/*
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

const pl = document.querySelectorAll(".primary-content p")
console.log(pl)


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener('click', () => {
    alert("Thanks for visiting Bikes for Refugees!")
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const changeBtn = document.getElementById("bgrChangeBtn");
changeBtn.addEventListener('click', () => {
    const backColor = document.querySelector("body")
    backColor.style.backgroundColor = "#ff6347";
})


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const textBtn = document.getElementById("addTextBtn");
const makeP = () => {
    const newP = document.createElement("p");
    newP.textContent = "El sentido común es el menos común de los sentidos"
    const learnSection = document.querySelector("#mainArticles");
    learnSection.appendChild(newP)
}
textBtn.addEventListener('click', makeP)

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const linksBtn = document.getElementById("largerLinksBtn");
linksBtn.addEventListener('click', () => {
    const linkSize = document.getElementsByTagName("a");
    console.log(linkSize)
    for (let i = 0; i < linkSize.length; i ++) {
        linkSize[i].style.fontSize = "32px"
    }
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addBtn = document.getElementById("addArticleBtn");
addBtn.addEventListener('click', () => {
    const inputText = document.getElementById("input-p");
    const newP = document.createElement("p");
    newP.textContent = inputText.value;
    const learnSection = document.querySelector("#mainArticles");
    learnSection.appendChild(newP)
    inputText.value = ""    
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors = ["#e76f51", "#f4a261", "#e9c46a", "#2a9d8f", "#264653"]; 
const backColor = document.querySelector("body");
let clicks = -1;
changeBtn.addEventListener('click', () => {
    if(clicks < colors.length) {
        clicks ++;
    } else {
        clicks = 0;
    }
backColor.style.backgroundColor = colors[clicks]
})

