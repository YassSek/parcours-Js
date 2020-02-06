function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

function ajtClass(div) {
    let element = document.getElementById(div);

    element.classList.add("highlight");
}

function retirerClass(div) {
    let element = document.getElementById(div)

    element.classList.remove("highlight");
}


let handleKey = (e) => {
    switch (e.code) {
        case "ArrowDown":
            document.getElementById("Down").style.backgroundColor = "brown";
            ajtClass("Down");
            document.addEventListener("keyup", () => retirerClass("Down"));

            break;
        case "ArrowUp":
            document.getElementById("Up").style.backgroundColor = "lightblue";
            ajtClass("Up");
            document.addEventListener("keyup", () => retirerClass("Up"));
            break;
        case "ArrowLeft":
            document.getElementById("Left").style.backgroundColor = "red";
            ajtClass("Left");
            document.addEventListener("keyup", () => retirerClass("Left"));
            break;
        case "ArrowRight":
            document.getElementById("Right").style.backgroundColor = "green";
            ajtClass("Right");
            document.addEventListener("keyup", () => retirerClass("Right"));
            break;
            // couleur pour chiffres de 0 à 9
        case "Numpad0":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad1":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad2":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad3":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad4":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad5":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad6":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad7":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad8":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character"));
            break;
        case "Numpad9":
            document.getElementById("character").style.backgroundColor = generateRandomColor()
            ajtClass("character");
            document.addEventListener("keyup", () => retirerClass("character")); // appelle de la fonction retirer class utiliser avec un addEventListener pour laisser le temps a la premiere fonction de se lancer sans etre interompu avec retirer class
            break;
    }
};
document.onkeydown = handleKey;