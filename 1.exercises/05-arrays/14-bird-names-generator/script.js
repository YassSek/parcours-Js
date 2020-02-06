/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);
    let adjs=Array.from(adjectives);

    document.getElementById('run').addEventListener("click",() => {
            
        let val=rand(1,12);
        let nom =birds[val];

        val=rand(1,10);
        let adj=adjs[val];

        if(nom.fem){

            console.log(nom,adj);

            document.getElementById('target').innerHTML="l'oiseau est :"+nom.name+' '+adj+'e';
        }
        else{
            document.getElementById('target').innerHTML="l'oiseau est :"+nom.name+' '+adj;
        }

    })
    // your code here
})();
