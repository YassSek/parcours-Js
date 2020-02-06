/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener("click",() => {
        // reagis au click sur le bouton avec id run

        window.lib.getPosts().then(articles => {// then promet une reponse en retours plus tard 

          
            articles.forEach((val)=> {
                window.lib.getComments().then(comments => { 
                    
                    // Elle doit recevoir un id d'article comme premier paramètre, ainsi qu'un callback
                    val.comments=comments;// ajout des commentaires
                    console.log(comments)
                })
            })

            
        })

        
    })
    // your code here
})();
