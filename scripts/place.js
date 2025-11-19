const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`

const temperature = 10;
document.getElementById("temp").innerHTML = temperature;
const windSpeed = 5;
document.getElementById("wind").innerHTML = windSpeed;

function calculateWindChill(temperature, windSpeed) {
    const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16))  + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    return Math.round(windChill);;
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").innerHTML = windChill
} else {
    document.getElementById("windChill").innerHTML = "N/A"
}