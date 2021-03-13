function doInputOutput() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let windspeed = parseFloat(document.getElementById('windSpeed').value);
    let windchill = windChill(temperature, windspeed);
    document.getElementById('output').innerHTML = windchill.toFixed(2);
}

function windChill(tempF, speed) {
    if (tempF <= 50 && speed >= 3) {
        let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed    ** 0.16;
        return windChillFactor;
    }
}
