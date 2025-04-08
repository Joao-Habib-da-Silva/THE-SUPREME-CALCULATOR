
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
    var history = window.document.getElementById("container-history");
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
function Fator() {
    let num = Number(content.textContent)
    let result = 1
    for(let v =num; v > 1; v--) {
        result *= v
    }
var history = window.document.getElementById("container-history");
var create = window.document.createElement("div");
create.classList.add("divhistory");
content.innerHTML = result;
create.innerHTML += `${result}`;
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