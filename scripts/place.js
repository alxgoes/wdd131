document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const temperature = 12; 
const windSpeed = 15; 

function calculateWindChill(temp, speed) {
    if ((temp <= 10 && speed > 4.8)) {
        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    } else {
        return "N/A"; 
    }
}
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("wind-chill").textContent = windChill;
