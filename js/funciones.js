//abrir menu

// $("#iconomenu").click(function () { 
//     $("#menu").slideToggle();
// });

//funcion para el menu transparente y agrega la clase de css creada
$("#iconomenu").click(function () { 
    $("#menu").toggleClass("abrirmenu");
});

//funcion para desplazamiento del menu en posicion fixed
$("#btn_ancla").click(function () { 
    //var=variable      //atributo=attr
    var ancla = $(this).attr("href");
    $("html,body").animate(
        {
            scrollTop: $(ancla).offset().top,
        },
        1000
    );
    //agrega o quita una clase, la parte de toggle
    $("nav ul").toggleClass("abrirmenu");
});

//funcion para el boton subir
$(document).ready(function () {
    $("#subir").click(function () { 
        $("html,body").animate(
            {
                scrollTop: "0px",
            },
            1000
        );
    });
});
//funcion del responsiveslide
$(function () {
    $("#slider4").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $(".events").append("<li>before event fired.</li>");
        },
        after: function () {
            $(".events").append("<li>after event fired.</li>");
        },
    });
});
//funcion para ejecutar y crear un modal
                // variables
var fondomodal = document.getElementById("modal");
var btn = document.getElementById("btn_modal")
var cerrar = document.getElementById("cerrarbtn");

function tiempo(){
    fondomodal.style.display = "block";
}
setTimeout(tiempo, 3000);

btn.onclick =function() {
    fondomodal.style.display ="block";
}

cerrar.onclick = function () {
    fondomodal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == fondomodal) {
        fondomodal.style.display = "none";
    }
};

// funcion para la libreria tinycarrusel
$(document).ready(function()
{
    $('#slider1').tinycarousel();
});
//funcion para aggregar un mapa
function iniciarMap() {
    var coord = {lat: 21.0096914 ,lng: -89.6204808};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord //utiliza la variable coor que son las coordenadas
    }); 
    // se manda a llamar la api de maps
    //crea un marcador en el mapa
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}
