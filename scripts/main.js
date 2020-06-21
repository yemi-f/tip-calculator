
let totalPerPersonHeading = document.querySelector("#total-per-person-value")
let tipCalcButton = document.querySelector("#tip-calc-btn")
let btn0 = document.querySelector("#btn-0")
let btn5 = document.querySelector("#btn-5")
let btn10 = document.querySelector("#btn-10")
let btn15 = document.querySelector("#btn-15")


let billPerPersonHeading = document.querySelector("#bill-value")
let tipPerPersonHeading = document.querySelector("#tip-value")



function assignPercentValue(number) {
    document.getElementById("percent").value = "" + number
}

btn0.onclick = function () {
    assignPercentValue(0)
}
btn5.onclick = function () {
    assignPercentValue(5)
}
btn10.onclick = function () {
    assignPercentValue(10)
}
btn15.onclick = function () {
    assignPercentValue(15)
}



function calcualateTipAmount() {
    let subtotal = document.getElementById("subtotal").value
    let tipPercent = document.getElementById("percent").value
    let numOfPeople = document.getElementById("split").value
    let totalPerPerson = (subtotal * (0.01 * tipPercent + 1)) / numOfPeople
    let tipAmount = subtotal * 0.01 * tipPercent

    let tipPerPerson = tipAmount / numOfPeople
    let billPerPerson = totalPerPerson - tipPerPerson

    totalPerPersonHeading.textContent = "$" + totalPerPerson.toFixed(2)
    billPerPersonHeading.textContent = "$" + billPerPerson.toFixed(2)
    tipPerPersonHeading.textContent = "$" + tipPerPerson.toFixed(2)

}

tipCalcButton.onclick = function () {
    calcualateTipAmount()
}




