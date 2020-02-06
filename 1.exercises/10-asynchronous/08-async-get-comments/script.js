/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

  async function Prendarticle() { 

   const post= await lib.getPosts();
   post.forEach(async(elem) => {
    console.log('dans le for each')
      let comm= await lib.getComments(elem.id) // getComments a besoin de la proprieté dans la quel il boucle  , et a besoin de l'id de son element post

      elem['commentaires ']=comm; // comm prends les valeurs des commentaires dans elem
      
   })
   console.log(post)
}

document.getElementById('run').addEventListener("click", () => {


Prendarticle();


})

    // your code here
})();
