/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }
        get Name(){
            
            return `${this.firstname}${this.lastname}`
        }

        set Name(value){
            const partie= value.split(' ');
            this.firstname=partie[0];
            this.lastname=partie[1];

        }

    }
    // your code here

    document.getElementById('run').addEventListener("click",() => {

        let kek1= new person('jean','valjean');

        console.log(kek1);


    })

    // kek1= new person('Patrick','Latrik');
    // console.log(kek1.Name);

})();
