const bill_input = document.querySelector(`input[name="bill-input"]`)
const tip_grid = document.querySelector(".tip-grid")
const custom_tip_input = tip_grid.querySelector(`input[name="custom-tip-input"]`)
const people_amount_input = document.querySelector(`input[name="people-amount-input"]`)
const reset_button = document.querySelector(".reset-button")

const tip_amount_person = document.querySelector(".tip-amount-person")
const total_person = document.querySelector(".total-person")

let active_button = null

let bill = 0
let tip  = 0
let people = 0

function round_number(number, digits) {
    if (number === 0 || digits === 0) {
        return 0;
    }
    const multiplier = Math.pow(10, digits);
    return Math.floor(number * multiplier) / multiplier;
}

function calcTip() {
    if ((bill > 0) && (tip > 0) && (people > 0)) {
        const tip_result = round_number((tip / 100) * bill, 2)
        const total_result = round_number(bill + tip_result, 2)
        const each_person = round_number(total_result / people, 2)
        
        

        tip_amount_person.textContent = `$${String(round_number(tip_result / people, 2))}`
        total_person.textContent = `$${String(each_person)}`
    }
}

function resetHandler() {
    bill = 0
    tip = 0
    people = 0

    bill_input.value = null
    
    const grid_pressed = document.querySelector(".pressed")

    if (grid_pressed) grid_pressed.classList.remove("pressed")
    custom_tip_input.value = null
    people_amount_input.value = null

    tip_amount_person.textContent = "$0.00"
    total_person.textContent = "$0.00"
    
}

function peopleAmountHandler() {
    people = Number(people_amount_input.value) || 0
    if (people > 0) {
        calcTip()
    }
}

function billInputHandler() {
    bill = Number(bill_input.value) || 0
    if (bill > 0) {
        calcTip()
    }
}

function customTipHandler() {
    tip = Number(custom_tip_input.value) || 0
    if (tip > 0) {
        calcTip()
    }
}

function gridClickHandler(e) {
    if (active_button) {
        active_button.classList.remove("pressed")
    }
    const grid_button = e.target
    if (grid_button.name !== "custom-tip-input") {
        grid_button.classList.add("pressed")
        tip = Number(grid_button.getAttribute("data-tip-amount"))
        active_button = grid_button
        custom_tip_input.value = null
    }
    calcTip()
}

bill_input.addEventListener("input", billInputHandler)
tip_grid.addEventListener("click", gridClickHandler)
custom_tip_input.addEventListener("input", customTipHandler)
people_amount_input.addEventListener("input", peopleAmountHandler)
reset_button.addEventListener("click", resetHandler)

resetHandler()