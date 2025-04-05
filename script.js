const menu = window.document.getElementById("container-menu")
const iconmenu = window.document.getElementById("menu-icon")
const content = window.document.getElementById("calculator-content")
const trail = window.document.getElementById("toggle-dark")


iconmenu.addEventListener("click", function() {
    menu.classList.toggle("close")

})

   const ball = window.document.getElementById("ball");
   const html = window.document.documentElement
trail.addEventListener("click", function() {
    ball.classList.toggle("dark")
    html.classList.toggle("dark")
    if(ball.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light")
    }
})
window.onload = function() {
    var save = localStorage.getItem("theme")
    if(save == "dark") {
        ball.classList.add("dark")
        html.classList.add("dark")
    }
    if(save == "light") {
        ball.classList.remove("dark")
        html.classList.remove("dark ")
    }
 }
function Percentage() {
    content.innerHTML += `/` + `${100}`
}
function AppendNumber(param) {
    content.innerHTML += param
}
function Operator(param) {
    content.innerHTML += `${param}`
}
function Del() {
    content.innerHTML = ""
}
function Equal() {
    var result = eval(content.textContent)
    var history = window.document.getElementById("container-history")
    var create = window.document.createElement("div");
    create.classList.add("divhistory");
    create.innerHTML = content.textContent
    if(content.textContent == "") {
        create.innerHTML = "Indefinido"
        
    }
    content.innerHTML = result
    create.innerHTML += `=${result}`
    history.appendChild(create);
}
function DelHistory() {
    var history =window.document.getElementById("container-history")    
    var divs = history.querySelectorAll(".divhistory")
    divs.forEach(div => div.remove())
}
window.document.addEventListener("keydown", function(event) {
    if(isNaN(event.key) == true) {
        console.log("Letra basica")
    }
    if(event.key == "-" || event.key == "+"  || event.key == "*" || event.key == "/") {
        content.innerHTML += `${event.key}`
    }
    if(event.key == "=" || event.key == "Enter") {
        Equal()
    }
    if(event.key == "c") {
        Del()
    }
    if(isNaN(event.key) == false) {
        content.innerHTML += event.key
    }
})