const bill_input = document.querySelector(`input[name="bill-input"]`)
const tip_grid = document.querySelector(".tip-grid")
const custom_tip_input = tip_grid.querySelector(`input[name="custom-tip-input"]`)
const people_amount_input = document.querySelector(`input[name="people-amount-input"]`)

let active_button = null

let bill = 0
let tip  = 0
let people = 0

function peopleAmountHandler() {
    people = Number(people_amount_input.value) || 0
}

function billInputHandler() {
    bill = Number(bill_input.value) || 0
}

function customTipHandler() {
    tip = Number(custom_tip_input.value) || 0
}

function gridClickHandler(e) {
    if (active_button) {
        active_button.classList.remove("pressed")
    }
    const grid_button = e.target
    if (grid_button.name !== "custom-tip-input") {
        grid_button.classList.add("pressed")
        active_button = grid_button
        custom_tip_input.value = null
    }
}

bill_input.addEventListener("input", billInputHandler)
tip_grid.addEventListener("click", gridClickHandler)
custom_tip_input.addEventListener("input", customTipHandler)
people_amount_input.addEventListener("input", peopleAmountHandler)