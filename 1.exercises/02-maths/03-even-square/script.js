/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let chif=1;
let rep=0;
(() => {
    
    
    document.getElementById("run").addEventListener("click", () => {
        
        do{
            if(chif%2==0){
                rep=Math.pow(chif, 2);
                alert(rep);
                chif++;
                
                
            }
            else{
                alert(chif+' impair');
                chif++;
            }
            
        }
        while(chif!=21){
            chif++;
            rep=0;
        }
        // your code here
    });
})();
