let submit = document.getElementById("submit")
let errorMessage = document.getElementById("errorMessage")
let screen = document.getElementById("screen")
let section = document.getElementsByTagName("section")
let dismiss = document.getElementById("dismissButton")
let email = document.getElementById("spanEmail")

dismiss.addEventListener("click", (e) => {

    section[1].classList.remove("mainSucces")
    section[1].classList.add("none")
    section[0].classList.add("main")
    section[0].classList.remove("none")

})


function classChange (e)  {
    e.classList.remove("error")
    e.classList.add("normal")
    errorMessage.style.display= "none"
}


submit.addEventListener("submit", (e) => {
    e.preventDefault()

    let input = document.getElementById("email")

    if(input.value == ""){
        input.classList.remove("normal")
        input.classList.add("error")
        errorMessage.style.display= "inline"
    }else{
        email.innerHTML = input.value
        input.value = ""
        section[0].classList.remove("main")
        section[0].classList.add("none")
        section[1].classList.add("mainSucces")
        section[1].classList.remove("none")
    }
})
