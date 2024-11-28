var redLight = document.getElementById("light-red")
var orangeLight = document.getElementById("light-orange")
var greenLight = document.getElementById("light-green")

function switchLight(event) {
    activeLight = event.target.innerText;
    switch (activeLight) {
        case "Red":
            redLight.style.backgroundColor = activeLight;
            greenLight.style.backgroundColor = "";
            orangeLight.style.backgroundColor = "";
            break;
        case "Orange":
            orangeLight.style.backgroundColor = activeLight;
            greenLight.style.backgroundColor = "";
            redLight.style.backgroundColor = "";
            break;
        case "Green":
            greenLight.style.backgroundColor = activeLight;
            redLight.style.backgroundColor = "";
            orangeLight.style.backgroundColor = "";
            break;
        default:
            console.log("default color")
    }
}