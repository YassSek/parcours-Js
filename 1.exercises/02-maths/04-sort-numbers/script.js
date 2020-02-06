/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// to get the value of an input: document.getElementById("element-id").value






// if (num[i] < b) {
                        //     ordre = num[i];
                        // } else {
                        //     b = num[i];
                        // }
let ordre = 0;
let b = 11;
let h=2;





document.getElementById("run").addEventListener("click", () => {
            // your code here
            let num = (document.getElementById("numbers").value);
            

            for (let i = 0; i < num.length; i++) {

                h++;

                if (isNaN(num[i])) {
                    alert('pas nb');
                    num[i]=' ';

                }
                else {
                        if(num[i] < b){
                            // console.log(num[i]);
                        }
                        else{

                            b=num[i];
                            num[h]=b;
                            
                        }
                       

                    }



            }



            });