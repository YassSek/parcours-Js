

let item=[
    {
        title:"Glaive",
        physic:12,
        magic:4,
        minLevel:5,
        available:true
    },
    {
        title:"Hache",
        physic:18,
        magic:0,
        minLevel:10,
        available:false
    },
    {
        title:"Sceptre",
        physic:5,
        magic:10,
        minLevel:5,
        available:true
    },
    {
        title:"Baguette",
        physic:2,
        magic:15,
        minLevel:10,
        available:false
    },
    {
        title:"Dague",
        physic:8,
        magic:0,
        minLevel:1,
        available:true
    }
] 





// premiere fct
for(let key in item){
    console.log( item[key] ) 
}


// available
for(let i=0; i< key.length;i++){
    for(key in item){
   
        if(item[key].available==true){
            console.log(item[key].title+' is available')
        }
        
    }

}

// level 10

for(let i=0; i< key.length;i++){
    for(key in item){
        if(item[key].minLevel==10){
            console.log(item[key].title+' need level 10')
        }
        
    }

}

