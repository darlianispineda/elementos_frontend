//slider

let slider1_imagenes= document.querySelector(".slider1_imagenes");
let slider1_img = document.getElementsByClassName("slider1_img");
const intervalo=4000;
let cont=1;
let width = slider1_img[0].clientWidth;


window.addEventListener("resize", function(){
    width = slider1_img[0].clientWidth;
});


//Script del slider automático
setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider1_imagenes.style.transform="translate("+(-width*cont)+"px)";
    slider1_imagenes.style.transition = "transform .8s";
    cont++;

    if (cont==slider1_img.length ){
        setTimeout(function(){
        slider1_imagenes.style.transform="translate(0px)";
        slider1_imagenes.style.transition = "transform 0s";
        cont=1;
        },intervalo/2);

    }
};

