
// Exercice 00:
function sayHello() {
    var nom = document.getElementById("nom").value
    console.log("hello "+nom)
}




// Exercice 01:

function somme (a , b) {
    var a = parseInt(document.getElementById("a").value)
    var b = parseInt(document.getElementById("b").value)
    var result = document.getElementById("result")
    result.innerHTML = a+b
}



// Exercice 02:

function changeColor() {
    var div = document.getElementById("div")
    var coleur = document.getElementById("colorPicker").value
    div.style.backgroundColor = coleur
}

// Exercice 03:
//a-
//b-
//c-Ameliorer le programme en remplacant le cercle par une image
//GIF animme 


var active = false;

function updatePosition (event)  {
    var x = event.clientX
    var y = event.clientY
    var cercle = document.getElementById  ("cercle")
    if (active) {
        cercle.style.left = (x - cercle.clientWidth /2) + "px"
        cercle.style.top = (y - cercle.clientHeight / 2) + "px"
    }

}


function move () {
    active = !active;
}



// Exercice 03 :

