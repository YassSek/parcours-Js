/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    class Animal {


        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class dog extends Animal {

        static greeting = 'Wouf'
        constructor(name){
            super(Animal);
            this.name = name;}

    }

    class cat extends Animal{
        static greeting = 'meown'
        constructor(name) {
            super(Animal);
            this.name = name;
        }
    }
    // your code here
    document.getElementById('run').addEventListener("click", () => {

        let chien = new dog('Rex');

        let chat = new cat('Rukia')


        console.log(chien.sayHello(),chat.sayHello());
    })

})();