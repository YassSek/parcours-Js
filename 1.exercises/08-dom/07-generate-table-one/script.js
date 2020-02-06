/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let tab = document.createElement("TABLE");


    document.getElementById('target').appendChild(tab);

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        tab.appendChild(tr);
        td.innerHTML = 'test';
        tr.appendChild(td); // append child c'est pour soumetre un enfant a 
                            // la variable qui precede le point

    }

})();