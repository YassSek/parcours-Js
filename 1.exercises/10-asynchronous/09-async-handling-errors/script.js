/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


  async function prendPers() { 
      try { console.log('fonction est lancee et le try aussi mais attends resultat :')
        const perso= await window.lib.getPersons();
        console.log(perso);
      }catch(e){
          err='erreur pas cool man';
          console.error(err);
         
      }

   
}
document.getElementById('run').addEventListener("click", () => {    prendPers(); }); // execute directe la fonction apres click ou aurais pus mettre tout le code a l'interieur aussi <3  })

})();
