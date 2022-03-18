//slider
const imagenes = document.getElementsByClassName("slider_img");
const indicadores = document.getElementsByClassName("indicador");

const intervalo = 4000;
let cont = 0;
let interval = setInterval(function () {
    slides();
}, intervalo);

function timer() {
    clearInterval(interval);
    interval = setInterval(function () {
        slides();
    }, intervalo);
};

function remover(aux) {
    imagenes[cont].classList.remove("slide_activo");
    indicadores[cont].classList.remove("indicador_actual");
}

function agregar(aux) {
    imagenes[cont].classList.add("slide_activo");
    indicadores[cont].classList.add("indicador_actual");
}

//Script del slider automático


function slides() {
    remover(cont);


    cont++;
    if (cont == imagenes.length) {

        cont = 0;
    }

    agregar(cont);


};

//script flechas
let slider_prev = document.getElementById("slider_prev");
let slider_next = document.getElementById("slider_next");


slider_prev.addEventListener("click", function () {
    timer();
    remover(cont);
    cont--;

    if (cont < 0) {
        cont = imagenes.length - 1;
    }

    agregar(cont);

    timer();



});

slider_next.addEventListener("click", function () {
    timer();

    slides();

});

//Indicadores
for (let i = 0; i < indicadores.length; i++) {
    indicadores[i].addEventListener("click", function () {

        remover(cont);
        cont = i - 1;
        if (cont < 0) {
            cont = imagenes.length - 1;
        }
        timer();
        slides();


    });

}


