/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };

    document.getElementById('run').addEventListener("click", ()=>{

        
            console.log(Object.keys(person),Object.entries(person));
        
        

    })
    // your code here

    // Let’s step away from the individual data structures and talk about the iterations over them.

    // In the previous chapter we saw methods map.keys(), map.values(), map.entries().
    
    // These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.
    
    // They are supported for:
    
    //     Map
    //     Set
    //     Array
    
    // Plain objects also support similar methods, but the syntax is a bit different.
    // Object.keys, values, entries
    
    // For plain objects, the following methods are available:
    
    //     Object.keys(obj) – returns an array of keys.
    //     Object.values(obj) – returns an array of values.
    //     Object.entries(obj) – returns an array of [key, value] pairs.
    


})();
