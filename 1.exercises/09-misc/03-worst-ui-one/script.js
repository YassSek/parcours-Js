/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    
    let numero = document.getElementById("target");
    let slider=document.getElementById("slider");
    
    

    document.getElementById("slider").addEventListener("change",()=>{


        // document.getElementById("target").innerHTML="";
        numero.innerHTML=slider.value;
        
    })

    
    // your code here
})();
