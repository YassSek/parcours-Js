/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener("click", () => {
        let pass1 = document.getElementById("pass-one").value;

        let pass2 = document.getElementById("pass-two").value;

        


        if(pass1==pass2){

           console.log('mdp ok');
        }
        else{
            let wann = document.getElementById("pass-one");
        wann.classList.add("error");
            let twoo = document.getElementById("pass-two");
            twoo.classList.add("error");
        }

    })

})();
