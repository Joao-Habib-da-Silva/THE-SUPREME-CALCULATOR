var first_input = document.getElementById("first-communication-input");
var second_input = document.getElementById("second-communication-input");
var coin = document.getElementById("coin");
let first_select = document.getElementById("container-select");
let second_select = document.getElementById("container-select-second");

async function Coin() {
  try {
    if (first_input.value != "" && second_input.value == "") {
      let data = await fetch(
        `https://api.frankfurter.app/latest?amount=${first_input.value}&from=${first_select.value}&to=${second_select.value}`
      );
      if (!data.ok) {
        throw new Error("erro no fetch");
      } else {
        let response = await data.json();
        second_input.value = response.rates[second_select.value];
      }
    }

    if (first_input.value == "" && second_input.value != "") {
      let data = await fetch(
        `https://api.frankfurter.app/latest?amount=${second_input.value}&from=${second_select.value}&to=${first_select.value}`
      );
      if (!data.ok) {
        throw new Error("erro no fetch");
      }
      let response = await data.json();
      first_input.value = response.rates[first_select.value];
    }

    if (first_input.value == "" && second_input.value == "") {
      var alert = document.getElementById("alert");
      alert.style.opacity = 1;
    }
    
  } catch (error) {
    console.error("erro", error);
  }
}

var button = document.getElementById("Ok-alert");
button.addEventListener("click", function () {
  var alert = document.getElementById("alert");
  alert.style.opacity = 0;
});
var trash = window.document.getElementById("trash")
trash.addEventListener("click", function() {
    first_input.value = ""
    second_input.value = ""
})