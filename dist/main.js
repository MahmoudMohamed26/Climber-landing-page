const searchButton = document.getElementsByClassName("search")[0]
const searchPop = document.getElementsByClassName("searchpop")[0]
const searchExit = document.getElementsByClassName("searchexit")[0]
const searchInput = document.getElementsByClassName("searchinput")[0]
const bars = document.getElementsByClassName("bars")[0]
const phoneNav = document.getElementsByClassName("phonenav")[0]
const phoneNavLogo = document.querySelectorAll(".phonenav img")[0]
const phoneNavList = document.querySelectorAll(".phonenav ul li")
const sumbitButton = document.querySelectorAll(".contact button")[0]
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const user = document.querySelectorAll(".contact input")[0]
const email = document.querySelectorAll(".contact input")[1]
const textMsg = document.querySelectorAll(".contact textarea")[0]
const wrongMsg = document.createElement("p")
const wrongUser = document.createElement("p")
const wrongEmail = document.createElement("p")

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace("notshow1" , "show1")
        }
    })
})
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.replace("notshow2" , "show2")
        }
    })
})

const hiddenElements1 = document.getElementsByClassName("notshow1")
const hiddenElements2 = document.getElementsByClassName("notshow2")
Array.from(hiddenElements1).forEach((el) => observer1.observe(el))
Array.from(hiddenElements2).forEach((el) => observer2.observe(el))


searchButton.onclick = function(){
    searchPop.classList.remove("invisible")
    searchPop.classList.replace("opacity-0" , "opacity-75")
    searchExit.classList.remove("-translate-y-16")
    searchExit.classList.remove("opacity-0")
    searchInput.classList.replace("translate-y-[-400px]" , "translate-y-[-50%]")
    searchInput.classList.remove("opacity-0")
}

document.addEventListener("click" , function(e){
    if(!searchInput.contains(e.target) && searchPop.contains(e.target)){
        searchPop.classList.add("invisible")
        searchPop.classList.replace("opacity-75" , "opacity-0")
        searchExit.classList.add("-translate-y-16")
        searchExit.classList.add("opacity-0")
        searchInput.classList.add("opacity-0")
        searchInput.classList.replace("translate-y-[-50%]" , "translate-y-[-400px]")
    }
})

bars.onclick = function(){
    phoneNav.classList.replace("w-0" , "w-[300px]")
    phoneNav.classList.remove("invisible")
    phoneNav.classList.remove("opacity-0")
    phoneNavLogo.classList.replace("translate-x-20" , "translate-x-0")
    phoneNavLogo.classList.remove("opacity-0")
    phoneNavList.forEach((element) => {
        element.classList.replace("translate-x-20" , "translate-x-0")
        element.classList.remove("opacity-0")
    })
}

phoneNavList.forEach((element) => {
    element.onclick = function (){
        phoneNav.classList.add("invisible")
        phoneNav.classList.add("opacity-0")
        phoneNav.classList.replace("w-[300px]" , "w-0")
        phoneNavLogo.classList.replace("translate-x-0" , "translate-x-20")
        phoneNavLogo.classList.add("opacity-0")
        phoneNavList.forEach((element) => {
            element.classList.replace("translate-x-0" , "translate-x-20")
            element.classList.add("opacity-0")
        })
    }
})

document.addEventListener("click" , function(e) {
    if(!phoneNav.contains(e.target) && !bars.contains(e.target)){
        phoneNav.classList.add("invisible")
        phoneNav.classList.add("opacity-0")
        phoneNav.classList.replace("w-[300px]" , "w-0")
        phoneNavLogo.classList.replace("translate-x-0" , "translate-x-20")
        phoneNavLogo.classList.add("opacity-0")
        phoneNavList.forEach((element) => {
            element.classList.replace("translate-x-0" , "translate-x-20")
            element.classList.add("opacity-0")
        })
    }
})

user.onblur = function() {
    if(user.value === ""){
        this.insertAdjacentElement("afterend" , wrongUser)
        wrongUser.textContent = "Please Fill the previous feild"
        wrongUser.style.marginTop = "5px"
        wrongUser.style.display = "block"
        wrongUser.style.fontSize = "12px"
        wrongUser.style.color = "#A32D2D"
        user.classList.add("failed")
        user.classList.remove("success")
    }
    else if(isNaN(user.value.split("")[0])){
        user.classList.add("success")
        user.classList.remove("failed")
        wrongUser.style.display = "none"
    }
    else{
        user.classList.add("failed")
        user.classList.remove("success")
        wrongUser.style.display = "block"
        this.insertAdjacentElement("afterend" , wrongUser)
        wrongUser.textContent = "Name can't start with a number"
        wrongUser.style.marginTop = "5px"
        wrongUser.style.fontSize = "12px"
        wrongUser.style.color = "#A32D2D"
    }
}

email.onblur = function() {
    if(email.value === ""){
        this.insertAdjacentElement("afterend" , wrongEmail)
        wrongEmail.textContent = "Please Fill the previous feild"
        wrongEmail.style.marginTop = "5px"
        wrongEmail.style.display = "block"
        wrongEmail.style.fontSize = "12px"
        wrongEmail.style.color = "#A32D2D"
        email.classList.add("failed")
        email.classList.remove("success")
    }
    else if(emailRegex.test(email.value)){
        email.classList.add("success")
        email.classList.remove("failed")
        wrongEmail.style.display = "none"
    }
    else {
        email.classList.add("failed")
        email.classList.remove("success")
        wrongEmail.style.display = "block"
        this.insertAdjacentElement("afterend" , wrongEmail)
        wrongEmail.textContent = "Please Enter a valid email"
        wrongEmail.style.marginTop = "5px"
        wrongEmail.style.fontSize = "12px"
        wrongEmail.style.color = "#A32D2D"
    }
}

textMsg.onblur = function() {
    if(textMsg.value === ""){
        this.insertAdjacentElement("afterend" , wrongMsg)
        wrongMsg.textContent = "Please Fill the previous feild"
        wrongMsg.style.marginTop = "5px"
        wrongMsg.style.display = "block"
        wrongMsg.style.fontSize = "12px"
        wrongMsg.style.color = "#A32D2D"
        textMsg.classList.add("failed")
        textMsg.classList.remove("success")
    }
    else if(textMsg.value.split("").length >= 10){
        textMsg.classList.add("success")
        textMsg.classList.remove("failed")
        wrongMsg.style.display = "none"
    }
    else{
        textMsg.classList.add("failed")
        textMsg.classList.remove("success")
        wrongMsg.style.display = "block"
        this.insertAdjacentElement("afterend" , wrongMsg)
        wrongMsg.textContent = "Your message should me longer"
        wrongMsg.style.marginTop = "5px"
        wrongMsg.style.fontSize = "12px"
        wrongMsg.style.color = "#A32D2D"
    }
}
sumbitButton.addEventListener("click" , submit)

function submit(){
    if(textMsg.classList.contains("success") && email.classList.contains("success") && user.classList.contains("success")){
        window.location.href = "ThxForContact.html"
    }
}