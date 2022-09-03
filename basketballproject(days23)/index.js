let homeStr = document.getElementById("sum-home")
let guestStr = document.getElementById("sum-guest")

let count = 0
let countGuest = 0

function plusOne() {
    count = count + 1
    homeStr.textContent = count
}

function plusTwo() {
    count = count + 2
    homeStr.textContent = count
}

function plusThree() {
    count = count + 3
    homeStr.textContent = count
}

function plusOneGuest(){
    countGuest = countGuest + 1
    guestStr.textContent = countGuest
}

function plusTwoGuest(){
    countGuest = countGuest + 2
    guestStr.textContent = countGuest
}

function plusThreeGuest(){
    countGuest = countGuest + 3
    guestStr.textContent = countGuest
}

function reset() {
    count = 0
    countGuest = 0
    homeStr.textContent = count
    guestStr.textContent = countGuest
}