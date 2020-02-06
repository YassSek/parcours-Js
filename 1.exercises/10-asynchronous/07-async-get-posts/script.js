/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {


  async function Prendarticle() { 
            console.log('fonction est lancee mais attends resultat :')
           const post= await window.lib.getPosts();
           console.log(post);
        }

    document.getElementById('run').addEventListener("click", () => {

      

        Prendarticle();


    })


    // your code here
})();







//######TIPS DU WEB
// Créez une promesse pour chaque appel asynchrone. Ajoutez toutes les promesses à un tableau. 
// Ensuite, passez le tableau de promesses à Promise. Tout Cela retourne à son tour une seule promesse pour laquelle nous pouvons utiliser await