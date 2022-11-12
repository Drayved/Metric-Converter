let convert = document.getElementById("convert")
let length = document.getElementById("length2")
let volume = document.getElementById("volume2")
let mass = document.getElementById("mass2")
let inputNum = 0



convert.addEventListener("click", function(){
    inputNum = document.getElementById("input-num").value
    length.innerHTML = `${inputNum} meters = ${convertLength()} feet | ${inputNum} feet = ${feetToMeters()} meters`
    volume.innerHTML = `${inputNum} liters = ${convertVolume()} gallons | ${inputNum} gallons = ${gallonsToLiters()} liters`
    mass.innerHTML = `${inputNum} kilos = ${convertMass()} pounds | ${inputNum} pounds = ${poundsToKilos()} kilos`
    
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