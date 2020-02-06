let CreationTableauLangages =  () => {
 let langages=["Html","CSS","Java","PHP"]
    return langages
}

let CreationTableauNombres =  () => {
    let nombres=[0, 1, 2, 3, 4, 5 ]
    return nombres

}

let RemplacementElement =  (langages) => {
    langages[2]="Javascript"
    return langages
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python');
 
    return langages
}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1)
    return nombres
}

let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
   let reseaux_sociaux=reseaux_sociaux_chaine.split(',');
   return reseaux_sociaux

}

let ConversionTableauChaine =  (langages) => {
    let str=langages.join(',')
    return str
}

let TriTableau =  (reseaux_sociaux) => {
    reseaux_sociaux.sort();
    return reseaux_sociaux
}

let InversionTableau =  (reseaux_sociaux) =>{
    reseaux_sociaux.reverse();
    return reseaux_sociaux
}
