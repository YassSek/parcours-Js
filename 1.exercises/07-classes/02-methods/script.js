/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }

    function sayHello(person){
        
        alert('Hey Salut '+ person.firstname +' '+person.lastname);

    }
    // your code here

    document.getElementById('run').addEventListener("click",() =>{
        
        let kek1= new person ('Michael','Schofield');

        sayHello(kek1);
        
    })
})();


// https://www.youtube.com/watch?v=WdDJA3MrgyQ&t=298s 3:22
