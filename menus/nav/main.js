//Menú hamburguesa
const hamburguesa = document.getElementById("hamburguesa");
let abierto=false;

function cambiar(){
    if (abierto==false){
        document.getElementById("nav").classList.add('nav_enlaces2');
        abierto=true;
    }else{
        document.getElementById("nav").classList.remove('nav_enlaces2');
        abierto=false;
    }
};

hamburguesa.addEventListener("click",()=>{
    cambiar();
    
});


window.addEventListener("resize",()=>{
        if (abierto==true){
            cambiar();
        }
});


/*Menú que cambia segun scroll*/
window.addEventListener("scroll",()=>{//evento scroll
    let actual= window.pageYOffset;// Obtengo la posición en Y actual del documento
    let menu= document.getElementById("menu");
    if (actual>=100){//A partir de esta altura el menú deja de ser transparente
        menu.classList.add("nav_container2");
    }else{
        menu.classList.remove("nav_container2");
    }
    
})


 