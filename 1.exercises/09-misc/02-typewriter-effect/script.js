/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let i = 0;
    let txt = document.getElementById("target").textContent;

    document.getElementById("target").innerHTML = "";

    let vitesse = 50;


    function machine() {

        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(machine, vitesse);
        }
    }
    machine();

    // your code here
    

})();