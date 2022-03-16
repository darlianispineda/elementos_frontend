//slider
const imagenes= ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg"]
let slider_img= document.querySelector(".slider_img");
const intervalo=4000;
let cont=0;



//Script del slider automático
setInterval(function(){
    slides();
},intervalo);

function slides(){
    
    slider_img.src= imagenes[cont];
    cont++;

    if (cont==imagenes.length ){
        
        cont=0;
    }
};

//script
let slider_prev= document.getElementById("slider_prev");
let slider_next=document.getElementById("slider_next");


slider_prev.addEventListener("click", function(){
    cont--;
    
    if (cont<0 ){
        cont=imagenes.length-1;
    }
    
    slider_img.src= imagenes[cont];
    
    
});

slider_next.addEventListener("click", function(){
    
    slides();
    
});
