$(document).ready(function(){
    var numeroMinimo = 0;
    var numeroMassimo = 25;

    generaGriglia(numeroMassimo);
    generaMiniGriglia(numeroMassimo);

    $(".generaNumero").on("click", function(){
        var num = generaNumero(numeroMinimo, numeroMassimo - 1);
        console.log("Numero casuale: " + num);

        $(".quadrato.selected").removeClass("selected");
        $(".quadrato").eq(num).addClass("selected");

    });

    $(".quadrato").on("click", function(){
        var quadrato = $(this);
        var index = $(".quadrato").index(quadrato);
        quadrato.text(index);
    });

    $(".mini-quadrato").on("click", function(){
        $(".mini-quadrato.selected").removeClass("selected");
        var miniQuadrato = $(this);
        miniQuadrato.addClass("selected");
        $(".quadrato.selected").removeClass("selected");

        // Index è zero-based
        var index = $(".mini-quadrato").index(miniQuadrato);
        $(".quadrato").eq(index).addClass("selected");
    });
});

// Funzione per generare numero random
function generaNumero(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function generaGriglia(max) {
    for (var i = 0; i < max; i++) {
        $(".container").append('<div class="quadrato"></div>');
    }
}

function generaMiniGriglia(max) {
    for (var i = 0; i < max; i++) {
        $(".mini-container").append('<div class="mini-quadrato">' + i + '</div>');
    }
}
