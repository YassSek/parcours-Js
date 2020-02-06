/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let valMin=parseInt(document.getElementById("part-one").getAttribute('data-min'))
    let valMax=parseInt(document.getElementById("part-one").getAttribute('data-max'))
    // your code here
    let valMinN=parseInt(document.getElementById("part-two").getAttribute('data-min'))
    let valMaxX=parseInt(document.getElementById("part-two").getAttribute('data-max'))


    document.getElementById("part-one").addEventListener("click",() => {    
        if(valMin==valMax){
            valMin=460;
        }
        else if (valMin<=valMax){
            valMin=valMin+1;
            document.getElementById("part-one").innerHTML=valMin;
        }
        
    }) // PREMIER BOUTON 

    document.getElementById("part-two").addEventListener("click",() => {    
        if(valMinN==valMaxX){
            valMinN=00;
        }
        else if (valMinN<=valMaxX){
            valMinN=valMinN+1;
            document.getElementById("part-two").innerHTML=valMinN;
        }
        
    })

            // MEME PRINCIPE POUR LES 2 AUTRES BOUTONS CHANGER NOM DES VARIABLE ET DES ELEMENT ID
            
    // document.getElementById("part-three").addEventListener("click",() => {    
    //     if(valMinN==valMaxX){
    //         valMin=00;
    //     }
    //     else if (valMinNN<=valMaxXX){
    //         valMinN=valMinN+1;
    //         document.getElementById("part-three").innerHTML=valMinN;
    //     }
        
    // })

    // document.getElementById("part-four").addEventListener("click",() => {    
    //     if(valMinN==valMaxX){
    //         valMin=00;
    //     }
    //     else if (valMinN<=valMaxX){
    //         valMinN=valMinN+1;
    //         document.getElementById("part-four").innerHTML=valMinN;
    //     }
        
    // })

})();
