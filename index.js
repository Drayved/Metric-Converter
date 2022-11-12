let convert = document.getElementById("convert")
let length = document.getElementById("length2")
let volume = document.getElementById("volume2")
let mass = document.getElementById("mass2")
let inches = document.getElementById("inches")
let ounces = document.getElementById("cups")
let inputNum = 0



convert.addEventListener("click", function(){
    inputNum = document.getElementById("input-num").value
    length.innerHTML = `${inputNum} meters = ${convertLength()} feet | ${inputNum} feet = ${feetToMeters()} meters`
    volume.innerHTML = `${inputNum} liters = ${convertVolume()} gallons | ${inputNum} gallons = ${gallonsToLiters()} liters`
    mass.innerHTML = `${inputNum} kilos = ${convertMass()} pounds | ${inputNum} pounds = ${poundsToKilos()} kilos`
    inches.innerHTML = `${inputNum} centimeters = ${centermetersToInches()} inches | ${inputNum} inches = ${inchesToCentimeters()} centimeters`
    ounces.innerHTML = `${inputNum} ounces = ${ouncesToCups()} cups | ${inputNum} cups = ${cupsToOunces()} ounces`
})

function convertLength(){
    let tempNum = 3.28084;
    let calc = tempNum * inputNum
    return calc.toFixed(3)
}

function convertVolume(){
    let tempNum = 0.264172;
    let calc = tempNum * inputNum
    return calc.toFixed(3)
}

function convertMass(){
    let tempNum = 2.20462
    let calc = tempNum * inputNum
    return calc.toFixed(3)
}

function feetToMeters() {
    let tempNum = 3.281
    let calc = inputNum / tempNum
    return calc.toFixed(3)
}

function gallonsToLiters(){
    let tempNum = 3.78541;
    let calc = inputNum * tempNum
    return calc.toFixed(3)
}

function poundsToKilos(){
    let tempNum = 0.453592
    let calc = inputNum * tempNum
    return calc.toFixed(3)
}

function inchesToCentimeters(){
    let tempNum = 2.54
    let calc = inputNum * tempNum
    return calc.toFixed(3)
}

function centermetersToInches() {
    let tempNum = 0.393701
    let calc = inputNum * tempNum
    return calc.toFixed(3)
}

function ouncesToCups() {
    let tempNum = 0.125
    let calc = inputNum * tempNum
    return calc.toFixed(3)
}

function cupsToOunces() {
    let tempNum = 8
    let calc = inputNum * tempNum
    return calc.toFixed(3)
}