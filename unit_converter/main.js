let unitConverter = document.getElementById('unit_converter');
let input = document.getElementById('input');
let result = document.getElementById('result');
let unit = document.getElementById('result-unit');
let inputValue, unitConverterValue;

input.addEventListener("keyup", converter);

function converter() {
    inputValue = input.value;
    unitConverterValue = unitConverter.value;

    if (unitConverterValue == "km_to_miles")
    {
        inputValue = Number(inputValue) / 1.609344;
        result.innerHTML = inputValue.toFixed(2);
        unit.innerHTML = "miles";
    }
    else if (unitConverterValue == "miles_to_km")
    {
        inputValue = Number(inputValue) * 1.609344;
        result.innerHTML = inputValue.toFixed(2);
        unit.innerHTML = "kilometers";
    }
    else if (unitConverterValue == "feet_to_meters")
    {
        inputValue = Number(inputValue) / 3.2808;
        result.innerHTML = inputValue.toFixed(2);
        unit.innerHTML = "meters";
    }
    else if (unitConverterValue == "meters_to_feet")
    {
        inputValue = Number(inputValue) * 3.2808;
        result.innerHTML = inputValue.toFixed(2);
        unit.innerHTML = "feet";
    }
    else if (unitConverterValue == "cm_to_inches")
    {
        inputValue = Number(inputValue) * 0.39370;
        result.innerHTML = inputValue.toFixed(2);
        unit.innerHTML = "inches";
    }
    else if (unitConverterValue == "inches_to_cm")
    {
        inputValue = Number(inputValue) / 0.39370;
        result.innerHTML = inputValue.toFixed(2);
        unit.innerHTML = "centimeters";
    }
}
