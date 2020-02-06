// https://thatsthespir.it/api.



// AJAX

document.getElementById('btn').addEventListener("click", ()=> {
 let data;

 
    let Info = new XMLHttpRequest();
    Info.open('GET','https://thatsthespir.it/api');
    Info.onload=function() {
        if (this.status === 200){
              data=JSON.parse(Info.responseText)
        let phrase=data.quote;
        let image=data.photo;
        let auteur=data.author;
	
	
       
    document.getElementById("photo").innerHTML="<img src="+image+">";
    document.getElementById("phrase").innerHTML=phrase + " Auteur: "+auteur;
        }else{ alert('erreur de chargement ;)') }
      

    }
    Info.send();

    
    // 
    //    
    // 

    


})
