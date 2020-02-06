/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    function ajoutXmen() {
        

        let nomH = document.getElementById("hero-name").value
        let alterH = document.getElementById("hero-alter-ego").value // recupere les donnée entré dans le site
        let powH = document.getElementById("hero-powers").value

        
        fetch('http://localhost:3000/heroes/', { // demande de fetch...
            method: 'POST', // ajoutera a la suite des autres contenu

            headers: { // pas bien compris mais gere ce qui peut être fait ou pas dans le fichier dans le serveur
                'Accept': 'application/json , text/plain',
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({name:nomH,alterEgo:alterH,abilities:powH}) // ajout les information et les converti pour qu'ils puissent être lu dans le serveur

        }).then((res)=>res.json()) // recupere les valeur qui viennent d etre ajouter au fetch 
          .then((data)=>console.log(data)) // affiche les valeurs BESOIN DE PLUS D EXPLICATION
    }


    document.getElementById('run').addEventListener("click", () => { ajoutXmen(); })

})();