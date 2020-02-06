/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener("click",() => {
        // reagis au click sur le bouton avec id run

        window.lib.getPersons(error,log)(persons => { 
                    
            // Elle doit recevoir un id d'article comme premier paramètre, ainsi qu'un callback
            log.persons=persons;// ajout des commentaires
            console.log(persons)
        });

        console.error();
    
    })


});
