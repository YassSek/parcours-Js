/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let tab = document.createElement("TABLE");
    document.getElementById("target").appendChild(tab);
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let mult = 1;
    let val = 0;


    tab.appendChild(tr);
    tr.appendChild(td);

    td.innerHTML = val;

    for (let i = 1; i <= 10; i++) {

   
        let tr = document.createElement("tr");
    
        
        tab.appendChild(tr);
        tr.appendChild(td);

        val = mult*i;
        td.innerHTML = val;


        for (j = 1; j < 10; j++) {
            
            let td = document.createElement("td");

            tr.appendChild(td);
            val = mult * j;
            td.innerHTML = val;
        }
        mult=mult+1;

    }



})();