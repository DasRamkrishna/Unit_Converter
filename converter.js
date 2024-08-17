// Length Conversion Function
function convertLength() {
    const input = parseFloat(document.getElementById("lengthInput").value);
    const fromUnit = document.getElementById("lengthFrom").value;
    const toUnit = document.getElementById("lengthTo").value;

    const conversionFactors = {
        mm: 1,
        cm: 10,
        m: 1000,
        km: 1000000,
        inch: 25.4,
        foot: 304.8,
        yard: 914.4,
        mile: 1609344
    };

    const result = (input * conversionFactors[fromUnit]) / conversionFactors[toUnit];
    document.getElementById("lengthResult").innerText = result;
}

// Weight Conversion Function
function convertWeight() {
    const input = parseFloat(document.getElementById("weightInput").value);
    const fromUnit = document.getElementById("weightFrom").value;
    const toUnit = document.getElementById("weightTo").value;

    const conversionFactors = {
        mg: 1,
        g: 1000,
        kg: 1000000,
        oz: 28349.5,
        lb: 453592
    };

    const result = (input * conversionFactors[fromUnit]) / conversionFactors[toUnit];
    document.getElementById("weightResult").innerText = result;
}

// Temperature Conversion Function
function convertTemperature() {
    const input = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("temperatureFrom").value;
    const toUnit = document.getElementById("temperatureTo").value;
    let result;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (input * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = input + 273.15;
        } else {
            result = input;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (input - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = ((input - 32) * 5/9) + 273.15;
        } else {
            result = input;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = input - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = ((input - 273.15) * 9/5) + 32;
        } else {
            result = input;
        }
    }

    document.getElementById("temperatureResult").innerText = result;
}
