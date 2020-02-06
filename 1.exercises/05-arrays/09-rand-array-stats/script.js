/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
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


    document.getElementById('run').addEventListener("click", () => {
        let num = [];
        let min = 101;
        let max = 0;
        let somme = 0;
        let moy = 0;

        for (let i = 0; i < 10; i++) {


            num[i] = rand(1, 100);

            let idD = "n-" + (i + 1);

            document.getElementById(idD).innerHTML = num[i];

            somme = somme + num[i];
            if (min > num[i]) {
                min = num[i];
            }
            if (max < num[i]) {

                max = num[i];
            }
        }

        moy = somme / 10;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = somme;
        document.getElementById("average").innerHTML = moy;


    })

})();