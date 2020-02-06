/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

document.getElementById('run').addEventListener("click",() => { LesXmen();

})
    

    // your code here
    async function LesXmen(){

    var target = document.getElementById("target");
    
    // var template = document.getElementById("tpl-hero");
    
   
    let perso = await fetch('http://localhost:3000/heroes/');
    let data = await perso.json();

    data.forEach( async (element)=> {
        target.innerHTML+="<li> Nom: "+element.name+" alter ego: "+element.alterEgo+" pouvoir: "+element.abilities+"</li> <br>"
    })

    

    
    }

})();
