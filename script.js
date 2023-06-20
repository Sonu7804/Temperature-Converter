function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Perform temperature conversion using JavaScript logic
    var convertedTemperature = convertTemperatureLogic(temperatureInput, fromUnit, toUnit);

    // Display the result
    document.getElementById("result").innerHTML = temperatureInput + " " + fromUnit + " = " + convertedTemperature + " " + toUnit;
}

function convertTemperatureLogic(value, fromUnit, toUnit) {
    if (fromUnit == toUnit) {
        return value; // No conversion needed
    }

    if (fromUnit == 'C') {
        if (toUnit == 'F') {
            return (value * 9 / 5) + 32; // Celsius to Fahrenheit
        } else if (toUnit == 'K') {
            return parseFloat(value) + 273.15; // Celsius to Kelvin
        }
    }

    if (fromUnit == 'F') {
        if (toUnit == 'C') {
            return (value - 32) * 5 / 9; // Fahrenheit to Celsius
        } else if (toUnit == 'K') {
            return (parseFloat(value) + 459.67) * 5 / 9; // Fahrenheit to Kelvin
        }
    }

    if (fromUnit == 'K') {
        if (toUnit == 'C') {
            return parseFloat(value) - 273.15; // Kelvin to Celsius
        } else if (toUnit == 'F') {
            return (parseFloat(value) * 9 / 5) - 459.67; // Kelvin to Fahrenheit
        }
    }

    // If the input units are not recognized
    throw new Error("Invalid unit. Please use 'C', 'F', or 'K'.");
}