/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function LesXmen(id){
        let target = document.getElementById("target");
        let perso = await fetch('http://localhost:3000/heroes/');
        let data = await perso.json();

        target.innerHTML=data[id].name;
        }
document.getElementById('run').addEventListener("click",() =>{

        let id=document.getElementById("hero-id").value;

        LesXmen(id);



    })
    // your code here



   
})();
