function AppendNumber(parameter) {
    content.innerHTML += parameter
}
function AppendOperation(parameter) {
    content.innerHTML += parameter
}
function history(param) {
      var history = window.document.getElementById("container-history");
      var create = window.document.createElement("div");
      create.classList.add("divhistory");
      create.innerHTML += `${param}`;
      history.appendChild(create);
}
function Fator() {
    let num = Number(content.textContent)
    let result = 1
    for(let v =num; v > 1; v--) {
        result *= v
    }
          content.innerHTML = result;
    history(result)
  

}
function Squareroot(parameter) {
    content.innerHTML += `** (1/${parameter})`
}

function Logaritm() {
    var para = Math.log10(Number(content.textContent));
    content.innerHTML = Math.log10(Number(content.textContent))
    history(para)
}
function NaturalLog() {
    var para = Math.log10(Number(content.textContent));
    content.innerHTML = Math.log(Number(content.textContent))
    history(para)
}
function Sen() {
    var para = Math.log10(Number(content.textContent));
    content.innerHTML = Math.sin(Number(content.textContent));
    history(para)
}
function Cos() {
    var para = Math.log10(Number(content.textContent));
    content.innerHTML = Math.cos(Number(content.textContent) );
    history(para)
}
function Tan() {
    var para = Math.log10(Number(content.textContent));
    content.innerHTML = Math.tan(Number(content.textContent))
    history(para)
}
window.document.addEventListener("keydown", function(event) {
      if (isNaN(event.key) == true) {
        console.log("Letra basica");
      }
      if (
        event.key == "-" ||
        event.key == "+" ||
        event.key == "*" ||
        event.key == "/" ||
        event.key == "(" ||
        event.key == ")"
      ) {
        content.innerHTML += `${event.key}`;
      }
      if (event.key == "=" || event.key == "Enter") {
        Equal();
      }
      if(event.key == "V" || event.key == "v") {
        Squareroot()
      }
      if(event.key == "S" || event.key == "s") {
        Sen()
      }
      if(event.key == "O" || event.key == "o") {
        Cos()
      }
      if(event.key == "T" || event.key == "t")  {
        Tan()
      }
        if (event.key == "C" || event.key == "c") {
        Del();
      }
      if(event.key == "l" || event.key == "l") {
        Logaritm()
      }
        if (isNaN(event.key) == false) {
        content.innerHTML += event.key;
      }
})