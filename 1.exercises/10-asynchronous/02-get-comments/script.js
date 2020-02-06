/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener("click",() => {
        // reagis au click sur le bouton avec id run

        window.lib.getPosts((error, articles) => {
            // recupere dans la librairie window les articles ( le mot article change en fonction de ce qu'on cherche dans la librairie)
            articles.forEach((val)=> {
                window.lib.getComments(articles.id,(error,comments) => { 
                    
                    // Elle doit recevoir un id d'article comme premier paramètre, ainsi qu'un callback
                    val.comments=comments;
                })
            })

            console.log(articles)
        })

        
    })
    // your code here
    
})();
