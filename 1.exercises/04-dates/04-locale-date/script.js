/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => { 

    

    let semaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let mois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decemnbre"]
    let date=new Date();
    let jour=date.getUTCDate();
    let t=date.getDay();
    let m=date.getMonth();
    let annee=date.getFullYear();
    let H=date.getHours();
    let Min=date.getMinutes();


   document.getElementById("target").innerHTML = semaine[t]+ " le "+jour +' ' + mois[m] +' '+ annee +'  '+ H +':'+Min;
    
    // to change the content of a tag: 
    // your code here
})();
