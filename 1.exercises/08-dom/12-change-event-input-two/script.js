/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let pass1 = document.getElementById("pass-one").value;
    let cpt=0;
    let valide=false;
    for ( let i=0 ; i<pass1.length ; i++){
        console.log(pass1[1]);
    }
    if(pass1.length>8){
        alert('YOUHOU');

    }
})();
