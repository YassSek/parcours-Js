/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    

    
    let rep=0;
    let opone = parseInt(document.getElementById("op-one").value);
    let optwo = parseInt(document.getElementById("op-two").value);
    // to get the value of an input: document.getElementById("element-id").value
    

    const performOperation = operation => {
        // perform the operation

        switch (operation){

            case "addition":
                rep=opone+optwo;
                alert(rep);
                break;
            
            case "substraction":
                rep=opone-optwo;
                alert(rep);
                break;
            
            case "multiplication":
                rep=opone*optwo;
                alert(rep);
                break;
            
            case "division":
                rep=opone/optwo;
                alert(rep);
            break;
            


        }
        
        
       
    };
    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
  
})();