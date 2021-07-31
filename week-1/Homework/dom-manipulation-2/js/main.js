//Buttons
const blueBtn = document.getElementById("blueBtn")
const orangeBtn = document.getElementById("orangeBtn")
const greenBtn = document.getElementById("greenBtn")

//Changing elements
const jumboFilter = document.querySelector("div.jumbotron")
const donateBtn = document.getElementById("donateBtn")
const volunteerBtn = document.getElementById("volunteerBtn")

//Blue button event
blueBtn.addEventListener('click', () => {
    
    jumboFilter.style.backgroundColor = "#588fbd"
    
    donateBtn.style.backgroundColor = "#ffa500"

    volunteerBtn.style.backgroundColor = "#000"
    volunteerBtn.style.color = "#fff"
})

//Orange Button event
orangeBtn.addEventListener('click', () => {
    jumboFilter.style.backgroundColor = "#f0ad4e"
    
    donateBtn.style.backgroundColor = "#5751fd"

    volunteerBtn.style.backgroundColor = "#31b0d5"
    volunteerBtn.style.color = "#fff"
})

//Green Button event
greenBtn.addEventListener('click', () => {
    jumboFilter.style.backgroundColor = "#87ca8a"
    
    donateBtn.style.backgroundColor = "#000"

    volunteerBtn.style.backgroundColor = "#8c9c08"
})

//Form
const formEvent = document.querySelector("form")
formEvent.addEventListener('submit', (event) => {
    event.preventDefault()

    const emailField = document.getElementById("exampleInputEmail1")
    const nameField = document.getElementById("example-text-input")
    const describe = document.getElementById("exampleTextarea")

    console.log(emailField.value)
    console.log(nameField.value)
    console.log(describe.value)

    let isMailValid = emailField.value.trim().includes("@")
    let isNameValid = nameField.length.value.trim() > 0
    let isDescriptionValid = describe.length.value.trim() > 0

    if(isMailValid && isNameValid && isDescriptionValid) {
        emailField.value = ""
        nameField.value = ""
        describe.value = ""

        emailField.style.backgroundColor = "#fff"
        nameField.style.backgroundColor = "#fff"
        describe.style.backgroundColor = "#fff"
        
        alert("Thank you for feeling the form!")
    

    } else {

        if(!isMailValid) {
        emailField.style.backgroundColor = "tomato"
         }   
        if(!isNameValid) {
            nameField.style.backgroundColor = "tomato"
         }
        if(!isDescriptionValid) {
            describe.style.backgroundColor = "tomato"
        }
    }    
})