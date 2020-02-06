/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var age = 0;
var sexe = "hh";
var ville = "gg";





do {
    age = prompt("Quel age as-tu ?");

    sexe = prompt("Quel est ton sexe ;) ?");

    ville = prompt("tu viens d'ou poto ?");

    var conf = confirm("Tu as bien repondu a toute les question ?")
    
} while (conf == false) ; {


    if (conf == true) {


        alert("safé salina");

    } else {
        alert("tu dois quand même y repondre :)");

        age = prompt("Quel age as-tu ?");

        sexe = prompt("Quel est ton sexe ;) ?");

        ville = prompt("tu viens d'ou poto ?");
    }
}