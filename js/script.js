function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;
    let explanation;

    if (fromUnit === "celcius" && toUnit === "fahrenheit") {
        result = (inputTemperature * 9/5) + 32;
        explanation = `${inputTemperature} °C x 9/5 + 32 = ${result} °F`;
    } else if (fromUnit === "fahrenheit" && toUnit === "celcius") {
        result = (inputTemperature - 32) * 5/9;
        explanation = `(${inputTemperature} °F - 32) x 5/9 = ${result} °C`;
    } else {
        explanation = "Konversi ini tidak didukung.";
    }

    document.getElementById("result").innerText = `Hasil: ${result} ${toUnit}`;
    document.querySelector(".explanation p").innerText = explanation;
}
