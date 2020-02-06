/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
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
    let val = rand(1, 100);
    let correct = false;

    let num = prompt("quel valeur vous pensez que j'ai generer ?");

    while (!correct) {

        if (val == num) {
            alert('BIEN JOUER MGAMIN la valeur etait' + val);
            console.log(num, val);
            correct=true;
        } 
        else if (val > num) {
            num = prompt('ton numero est trop petit ;)' + num);
            console.log(num, val);

        } 
        else if (val < num) {
            num = prompt('ton numero est trop Grand ;)' + num);
            console.log(num, val);
        }

    }



    console.log(num, val);






})();