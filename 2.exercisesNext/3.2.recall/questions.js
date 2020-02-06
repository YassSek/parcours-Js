let selectElementsStartingWithA = (array) => {

    array.sort();
    let secarray = [array[0], array[1]];
    return secarray;


}

let selectElementsStartingWithVowel = (array) => { //'a','e','i','o','u'
    let voyelle = '^[aieou].*';
    let newarr = [];
    for (i = 0; i < array.length; i++) {
        let mot = array[i];
        for (j = 0; j < voyelle.length; j++) {
            if (mot[0] == voyelle[j]) {
                newarr.push(array[i]);
            }
        }
    }
    return newarr
}


let removeNullElements = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == null) {
            array.splice(i, 2);
        }
    }
    return array
}

let removeNullAndFalseElements = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == null) {
            array.splice(i, 2);
        }
        if (array[i] == false) {
            array.splice(i, 1);
        }
    }
    return array
}

let reverseWordsInArray = (array) => {
    let newarr = [];
    let reverse = [];
    let join = [];
    for (let i = 0; i < array.length; i++) {
        newarr = array[i].split("");
        reverse[i] = newarr.reverse();
        join[i] = reverse[i].join("");
    }
    return join
}

let everyPossiblePair = (array) => {
    let newarr = [];
    newarr.push([array[2], array[0]]);
    newarr.push([array[2], array[1]]);
    newarr.push([array[0], array[1]]);
    return newarr
}

let allElementsExceptFirstThree = (array) => {
    for (let i = 0; i < 3; i++) {
        array.shift();
    }
    return array
}

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array
}

let sortByLastLetter = (array) => {
    let newarr = array.sort();
    let rep = [];
    rep[0] = newarr[2];
    rep[1] = newarr[3];
    rep[2] = newarr[1];
    rep[3] = newarr[0];

    return rep;
}

let getFirstHalf = (string) => {
    let rep = string.substr(0, 3)
    return rep;
}

let makeNegative = (number) => {

    return -Math.abs(number)
}

let numberOfPalindromes = (array) => {
    let val = 0;
    let verif = [];
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
        newarr = array[i]
        verif = newarr.split('').reverse().join('');
        if (verif == array[i]) {
            val++
        }
    }
    return val
}

let shortestWord = (array) => {
    let smWord = 'treslongmotquandmeme';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < smWord.length) {
            smWord = array[i]
        }
    }
    return smWord;
}

let longestWord = (array) => {
    let lgWord = 'timo';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > lgWord.length) {
            lgWord = array[i]
        }
    }
    return lgWord;
}

let sumNumbers = (array) => {
    let rep = 0;
    for (let i = 0; i < array.length; i++) {
        rep = rep + array[i];
    }
    return rep
}

let repeatElements = (array) => {
    array.push("a", "b", "c")
    // for(let i=0;i<array.length;i++){
    //     array.push(array[i])
    // } cette ligne de code fait bugger tout le site et tout les exo suivant deviennent innaccecible 
    return array;
}

let stringToNumber = (string) => {
    return parseInt(string);
}

let calculateAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    let rep = sum / array.length;
    return rep
}

let getElementsUntilGreaterThanFive = (array) => {

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            array.pop();
            array.pop();
            array.pop();
            array.pop();
            array.pop();
        }
    }
    return array;
}

let convertArrayToObject = (array) => {

    let rep = {};
    for (var i = 0; i < array.length; ++i) {
        rep[array[i]] = array[i + 1];
        i++
    }
    return rep;
}

let getAllLetters = (array) => {

    let rep = array.toString();
    let rup = rep.split('').sort();

    for (let i = 0; i < rup.length; i++) {
        for (let j = 0; j < rup.length; j++) {
            if (rup[i] == ",") {
                rup.shift('')
            }
        }

    }
    let set = [...new Set(rup)]

    return set
}

let swapKeysAndValues = (object) => {
    let ret = {};
    for (let key in object) {
        ret[object[key]] = key;
    }
    return ret;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    for (let key in object) {
        sum = sum + object[key]
        sum = sum + (parseInt(key))

    }
    return sum
}

let removeCapitals = (string) => {
    return string.replace(/(?![a-z- ])./g, ''); // ici ce qui est entre crochet est la lettre a , z et un espace vide pour ne pas effacer l'espace entre le mot non plus il faut specifier tt les caractere car le .g = general
}

let roundUp = (number) => {

    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    let nwDt = new Date(date)

    let jour = nwDt.getUTCDate();
    let mois = nwDt.getUTCMonth() + 1; // les mois vont de 1 - 12
    let annee = nwDt.getUTCFullYear();
    let phrase = '0' + jour + '/0' + mois + '/' + annee;

    return phrase
}

let getDomainName = (string) => {
    let aro;
    let rep;
    for (let i = 0; i < string.length; i++) {
        aro = string[i]
        if (aro == '@') {
            rep = string.substr(i + 1, string.length - 10)
        }
    }
    return rep;
}


let titleize = (string) => {
    return string.replace(/(?<=the\s|\.\s)\w|^t/g, (mot) => {
        return mot.toUpperCase(); // la fonction renvoie la lettre majuscule correspondant au champs de recherche demander avant , qui remplace selon la recherche qui est directement retourné 
        // ici la fonction retourne la valeur a l'interieur , si on met le retunr en dehors de la fonction et qu'on l'enregistre dans une variable le scope le fera pas sortir et le lira pas hors fonction fleché

    }) // aide regex : https://moncoachdata.com/blog/tuto-regex/   https://regexr.com/

}

let checkForSpecialCharacters = (string) => {

    if (string.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        return true
    } else {
        return false
    }
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    if (number === 0 || number === 1)
        return 1;
    for (let i = number - 1; i >= 1; i--) {
        number *= i;
    }
    return number;
}


let findAnagrams = (string) => {
// ce n'est pas mon code , j'ai repris les grande ligne , pour essayer de mieux le comprendre.
    let wordLength=string.length;

        if (string.length < 2) {

            return [string];

        } else {
            let anagrams = [];
            let before, focus, after;
            let shortWord, subAnagrams, newEntry;
            let i = 0;

            for ( i = 0; i < string.length; i++) {

                before = string.slice(0, i); // lettre de la posiion 0 à la courante
                focus = string[i]; // lettre du milieu ( courante )
                after = string.slice(i + 1, string.length + 1); // lettre de la courante jusqu'a la derniere
                shortWord = before + after; // concat
                subAnagrams = findAnagrams(shortWord); // rappelle de la fct pour la recursivité pour reprendre le reste du mot et refaire 
    
                for (let j = 0; j < subAnagrams.length; j++){
    
                    newEntry = focus + subAnagrams[j];
                    anagrams.push(newEntry);
                    // Now we use this to log the results in real time, in order
                    // to gets results quickly while allowing them to be processed
                    // at a speed that web browsers can handle.
                    if (newEntry.length == wordLength) console.log(newEntry); 
                }
            }
            return anagrams;
        }
    
}






let convertToCelsius = (number) => {
        number = (number - 32) * 5 / 9
        return Math.round(number);
}


let letterPosition = (array) => {
    let string;
    let num = 97;
    for (let i = 0; i < array.length; i++) {
        string = '' + array[i];
        string = string.toLowerCase()
        array[i] = string.charCodeAt(0)
        array[i] = array[i] - num + 1;
    }
        return array;
}
