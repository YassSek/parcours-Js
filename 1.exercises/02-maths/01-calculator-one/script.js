/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let rep = 0;




    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let opone=parseInt(document.getElementById("op-one").value);

        let optwo=parseInt (document.getElementById("op-two").value);

        console.log(opone);
        console.log(optwo);
       
        rep=opone+optwo;
        
        
       alert(rep);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let opone=document.getElementById("op-one") ;
        let optwo=document.getElementById("op-two") ;
        console.log(opone.value);
        console.log(optwo.value);
        rep=opone.value-optwo.value;
        
        
       alert(rep);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let opone=document.getElementById("op-one") ;
        let optwo=document.getElementById("op-two") ;
        console.log(opone.value);
        console.log(optwo.value);
        rep=opone.value*optwo.value;
        
        
       alert(rep);
    
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let opone=document.getElementById("op-one") ;
        let optwo=document.getElementById("op-two") ;
        console.log(opone.value);
        console.log(optwo.value);
        rep=opone.value/optwo.value;
        
        
       alert(rep);
    });

