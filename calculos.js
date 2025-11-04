var formulario = document.getElementById("calcularPrecio");

function Calcular() {
    //alert("Si funciona mi botón");

    var cantidad = document.getElementById("cantidad").value;
    
    //var tamanio = document.getElementsByName("tam").value;

    //var tamChico = document.getElementById("chico");

    var tamanio = formulario.tam.value;
    alert(tamanio);

    var total = 0;

    if(tamanio == "chico")
    {
        total = 100;
    }
    else if (tamanio == "mediano")
    {
        total = 150;
    }
    else if (tamanio == "grande")
    {
        total = 200;
    }

    formulario.total.value = total;
}