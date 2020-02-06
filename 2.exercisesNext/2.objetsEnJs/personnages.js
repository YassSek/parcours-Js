
let mainCharacter={
    name:"Joseph-u" ,
    level:20,
    life:100,
    weapon:{
        name:"Hache",
        damage:20,
    },
    attack : () => {
              console.log(mainCharacter.name+' is attacking with: '+mainCharacter.weapon.name+' degats: '+mainCharacter.weapon.damage*mainCharacter.level)
            } 
        }
       
mainCharacter.attack();