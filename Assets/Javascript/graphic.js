var elt = document.getElementById("calculator");
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({
    id: "1",
    latex: 'y=x',
    color: Desmos.Colors.BLUE
})
calculator.GraphingCalculator(elt, {
    keypad: false,
    zoomButtons: true
})