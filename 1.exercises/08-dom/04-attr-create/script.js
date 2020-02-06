/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    let image = document.getElementById("source");
    let attr = image.getAttribute('data-image');
    let target = document.getElementById("target").innerHTML=
    '<img src="'+attr+'">';
    
    

    image.remove();

    console.log(target,image);


    


    // document.getElementById("target").innerHTML=<img  image ></img>
    // your code here
