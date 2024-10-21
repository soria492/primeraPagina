var cont = 2;


function cambiar_imagen(){
    if(cont == 7){
        cont = 2;
    }else{
        cont = cont +1;
    }
    console.log("hola mundo");
    document.getElementById("imagen1").src="../assets.css/IMAGENES/cambio"+cont+".jpg";
    
}


    

