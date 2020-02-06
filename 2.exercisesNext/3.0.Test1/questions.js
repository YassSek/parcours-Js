/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let rep = texte1 + texte2;
    return rep;
}
let afficherCar5 = (texte) => {
    let car = texte[6];
    return car;

}
let afficher9Car = (texte) => {
    // let car=[];
    // for(let i=0;i<9;i++){
    //     car[i]=texte[i];

    //  }
    // car=car.join(''); return car;
    return texte.slice(0, 9);
}

let majusculeString = (texte) => {
    return texte.toUpperCase();
}
let minusculeString = (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString = (texte) => {
    return texte.trim();
}
let IsString = (texte) => {

    if (typeof texte == "string") {
        return true;
    }
}

let AfficherExtensionString = (texte) => {

    return texte.slice((texte.lastIndexOf('.') - 1 >>> 0) + 2)
}
let NombreEspaceString = (texte) => {
    let rep = 0;
    for (let i = 0; i < texte.length; i++) {

        if (texte[i] == ' ') {
            rep++;
        }
    }
    return rep;


}
let InverseString = (texte) => {

    let rep = texte.split('').reverse().join('');
    return rep;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray = (array) => {
    let rep=[];
    for(i=0;i<array.length;i++){
        rep[i]=Math.abs(array[i]) 
    }
    return rep;
}
let sufaceCercle = (rayon) => {
    
    
    return Math.round(Math.PI*(rayon*rayon))  // math round arrondis le chiffre 
}
let hypothenuse = (ab, ac) => {
return Math.hypot(ab,ac)
}
let calculIMC = (poids, taille) => {
    taille=Math.pow(taille,2)
    let rep=(poids/taille).toFixed(2);
    return parseFloat(rep);
}