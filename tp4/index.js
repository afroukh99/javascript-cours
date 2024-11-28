var redLight = document.getElementById("light-red")
var orangeLight = document.getElementById("light-orange")
var greenLight = document.getElementById("light-green")

function switchLight(event) {
    activeLight = event.target.innerText;
    switch (light) {
        case "Red":
            redLight.style.backgroundColor = light;
            greenLight.style.backgroundColor = "";
            orangeLight.style.backgroundColor = "";
            break;
        case "Orange":
            orangeLight.style.backgroundColor = light;
            greenLight.style.backgroundColor = "";
            redLight.style.backgroundColor = "";
            break;
        case "Green":
            greenLight.style.backgroundColor = light;
            redLight.style.backgroundColor = "";
            orangeLight.style.backgroundColor = "";
            break;
        default:
    }
}