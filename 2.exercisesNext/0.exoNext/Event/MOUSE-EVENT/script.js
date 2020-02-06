
document.querySelectorAll(".hoverme").forEach($div => // pour selectionner plusieur class ajouté un '.' devant le nom de classe
        $div.addEventListener(                         // $div est une variable pour le foreach pour qu'il passe sur chacune des div avec la class selectionner
            "mouseover",
            () => ($div.style.visibility = "hidden")),); // cache les div


document.getElementById("reset").addEventListener("click",()=> {

    document.querySelectorAll(".hoverme").forEach($div =>// fait reaparaitre en mm temps les div de la class .hoverme au moment ou on click sur la div "reset"
        $div.style.visibility = "visible"
)});

let y=document.getElementById("axe-y")
let x=document.getElementById("axe-x")


window.addEventListener("mousemove",function (e){

    x.innerText='Souris Axe X: '+e.screenX;
    y.innerText='Souris Axe Y: '+e.screenY;
})