const lengthBox = document.querySelector('.length-box');
const volumeBox = document.querySelector('.volume-box');
const massBox = document.querySelector('.mass-box');
const convertBtn = document.querySelector('.convert-btn');
const input = document.querySelector('input');

function convertLength(value) {
    const meters = parseFloat(value);
    const feet = meters * 3.28084;
    const metersFromFeet = feet / 3.28084;
    const feetValue = parseFloat(value);
    const metersFromFeetValue = feetValue / 3.28084;
    const metersFromFeetConverted = `${feetValue.toFixed(0)} feet = ${metersFromFeetValue.toFixed(3)} meters`;
    const converted = `${meters.toFixed(0)} meters = ${feet.toFixed(3)} feet | ${metersFromFeetConverted}`;
    return converted;
}

function convertVolume(value) {
    const liters = parseFloat(value);
    const gallons = liters * 0.264172;
    const litersFromGallons = gallons / 0.264172;
    const gallonsValue = parseFloat(value);
    const litersFromGallonsValue = gallonsValue / 0.264172;
    const litersFromGallonsConverted = `${gallonsValue.toFixed(0)} gallons = ${litersFromGallonsValue.toFixed(3)} liters`;
    const converted = `${liters.toFixed(0)} liters = ${gallons.toFixed(3)} gallons | ${litersFromGallonsConverted}`;
    return converted;
}


function convertMass(value) {
    const kilograms = parseFloat(value);
    const pounds = kilograms * 2.20462;
    const kilogramsFromPounds = pounds / 2.20462;
    const poundsValue = parseFloat(value);
    const kilogramsFromPoundsValue = poundsValue / 2.20462;
    const kilogramsFromPoundsConverted = `${poundsValue.toFixed(0)} pounds = ${kilogramsFromPoundsValue.toFixed(3)} kilograms`;
    const converted = `${kilograms.toFixed(0)} kilograms = ${pounds.toFixed(3)} pounds | ${kilogramsFromPoundsConverted}`;
    return converted;
}

function displayLength(converted) {
    lengthBox.innerHTML = `<div style="display:flex; flex-direction: column; justify-content: center; align-items: center;"><h3>Length (Meters/Feet)</h3><p>${converted}</p></div>`;
}

function displayVolume(converted) {
    volumeBox.innerHTML = `<div style="display:flex; flex-direction: column; justify-content: center; align-items: center;"><h3>Volume (Liters/Gallons)</h3><p>${converted}</p></div>`;
}

function displayMass(converted) {
    massBox.innerHTML = `<div style="display:flex; flex-direction: column; justify-content: center; align-items: center;"><h3>Mass (Kilograms/Pounds)</h3><p>${converted}</p></div>`;
}

convertBtn.addEventListener('click', () => {
    const value = input.value;
    const convertedLength = convertLength(value);
    const convertedVolume = convertVolume(value);
    const convertedMass = convertMass(value);
    displayLength(convertedLength);
    displayVolume(convertedVolume);
    displayMass(convertedMass);
});





