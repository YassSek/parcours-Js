
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function giveItem(item_to_give){
    let i=getRandomInt(8)
    let objet=item_to_give[i];
    console.log('tien prends cet objet ;) Brave vous donne: '+objet);
}


let character={
    name : "Brave",
    age : 24,
    item_to_give:["potion","antidote","chocolat","dague","poison","poulet","eponge","gluten"]
}

for(let key in character){ 
	
	console.log( key ) // affiche chaque clé de mon objet 
    console.log( character[key] ) // affiche chaque valeur 
    
}
giveItem(character.item_to_give);