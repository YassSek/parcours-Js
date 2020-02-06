function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function collision(balleY, balleX) {

    if (posMy -50 <= posY & posY <= posMy +50 && posMx -100 <= posX & posX <= posMx +100) {
        alert('GAME OVER ')
    } else if (posMy - 50 <= balleY & balleY <= posMy + 50 & posMx <= balleX & balleX <= posMx + 90) {
        ennemies++;
        posMx = getRandomInt(700);
        posMy = getRandomInt(50);
    }
}

function aJour() {
    if(ennemies==10){
       alert('YOU WIN you had: '+ennemies+' kill ;)');
    }
    document.getElementById("finish").innerText='kill: '+ennemies;
    posMy++;
    if (posMx < posX) {
        posMx++; // fonction pour pourchasser le hero
    } else if (posMx > posX) {
        posMx--;
    }

    if (posMy == limitM) {
        posMx = getRandomInt(700);
        posMy = getRandomInt(50);
    }

    ctx.clearRect(0, 0, 800, 400); // efface tout

    ctx.drawImage(mechant, posMx, posMy); //    mechant
    if (cptB > 0) {// dessine une balle que si j'ai deja presser espace
        for (let i = 0; i < amo.length; i++) {
            collision(amo[i].posBy, amo[i].posBx); // fonction collision
            ctx.drawImage(piou, amo[i].posBx, amo[i].posBy) // A COMPRENDRE PSQ TROP FLOU
            amo[i].update(); // crée une balle dans le tableau amo pour ne pas modifier la balle tiré precedement
        }
    };
    ctx.drawImage(joueur, posX, posY);
 
    setTimeout((e) => touchePress, 10); // fonction de touche appeller en callback
    // REQUEST ANIMATION FRAME SE RENSEIGNER !!!!!!!!!!!!!
    window.requestAnimationFrame(aJour);
}

let touchePress = (e) => {
    document.querySelector("h1").innerText='Go !! ';
    if (limitD <= posX) {
        posX = posX - 10;
    }
    if (limitG >= posX) {
        posX = posX + 10
    }
    // les lignes juste au dessu empeche le vaisseau de depasser les limite du canvas
    switch (e.code) {
        case droite:
            posX = posX + 10;
            // repositionne 
            break;

        case gauche:
            posX = posX - 10;
            break;

        case space:
            cptB++;

            posBy = posY;
            posBx = posX + 50;

            let temp = new Balle(posBx, posBy);
            amo.push(temp);

            // replace la pointe de la balle sur la pointe
            // animation qui psse posbY qui la soustrait pour faire monter le projectile et le redessine a chaque sec
            break;
    }
}

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const amo = [];
class Balle {
    constructor(x, y) {
        this.posBx = x;
        this.posBy = y;
    }
    update() {
        this.posBy -= 5;
    }
}

const limitG = 0;
const limitD = 690;
const limitM = 400;

const droite = "ArrowRight"
const gauche = "ArrowLeft"
const space = "Space"

let mechant = document.getElementById('mechant');
let piou = document.getElementById('piou');
let joueur = document.getElementById('joueur');

let posX = 345;
let posY = 315;

let posBy = 290;
let posBx = posX + 51;
let cptB = 0; // compteur du nb de balle tiré

let ennemies = 0; // cpt ennemies

let posMx = getRandomInt(700);
let posMy = getRandomInt(50); //initalise le mechant a l'endroit du spawn avant de crée deplacement

// appels de fct
aJour();
document.onkeydown = touchePress;
