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

const emailField = document.getElementById("exampleInputEmail1")
const nameField = document.getElementById("example-text-input")
const describe = document.getElementById("exampleTextarea")

const checkUserInput = (event) => {
    event.preventDefault()
    let isMailValid = emailField.value.trim().includes("@")
    let isNameValid = nameField.value.trim().length > 0
    let isDescriptionValid = describe.value.trim().length > 0

    if(isMailValid && isNameValid && isDescriptionValid) {
        emailField.value = ""
        nameField.value = ""
        describe.value = ""

        emailField.classList.remove("redBackground")
        emailField.classList.add("whiteBackground")
        nameField.classList.remove("redBackground")
        nameField.classList.add("whiteBackground")
        describe.classList.remove("redBackground")
        describe.classList.add("whiteBackground")
        
        alert("Thank you for feeling the form!")
    
    } else {

        if(!isMailValid) {
            emailField.classList.remove("whiteBackground")
            emailField.classList.add("redBackground")
         }   
        if(!isNameValid) {
            nameField.classList.remove("whiteBackground")
            nameField.classList.add("redBackground")
         }
        if(!isDescriptionValid) {
            describe.classList.remove("whiteBackground")
            describe.classList.add("redBackground")
        }
    }    
}

const formEvent = document.querySelector("form")
formEvent.addEventListener('submit', checkUserInput)