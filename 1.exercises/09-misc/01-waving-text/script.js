/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // your code here
    let phrase = document.getElementById("target").textContent;
    
    const texte = phrase.split("");

    
    let oui=0;
 

   
    
    


   
    for ( let i=0; i<phrase.length;i++){
        val =rand(25,35);
        oui = '<span style= font-size:'+val+'px>'+texte[i]+'</span>';

        document.getElementById("target").innerHTML+=oui;
        
    }

})();
