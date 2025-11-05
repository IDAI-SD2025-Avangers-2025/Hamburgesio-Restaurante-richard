var formulario = document.getElementById("calcularPrecio");

function Calcular() {
    var cantidad = formulario.cantidad.value;
    var tamanio = formulario.tam.value;
    var pan = formulario.pan.value;

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
    else {
        alert("Por favor selecciona un tamaño");
        return;
    }

    if (pan == "integral")
    {
        total = total + 0;
    }
    else if (pan == "blanco")
    {
        total = total + 20;
    }
    else if(pan == "papa")
    {
        total = total + 50;
    }
    else if(pan == "parmesano")
    {
        total = total + 60;
    }
    else {
        alert("Por favor selecciona un tipo de pan");
        return;
    }


    if (formulario.tomate.checked) 
    {
        total += 10;
    }

    if (formulario.cebolla.checked) 
    {
        total += 10;
    }

    if (formulario.aguacate.checked)  
    {
        total += 10;
    }

    if (formulario.jamon.checked) 
    {
        total += 10;
    }

    if (formulario.tocino.checked) 
    {
        total += 10;
    }

    if (formulario.pina.checked) 
    {
        total += 10;
    }

    if (formulario.quesoBlanco.checked) 
    {
        total += 10;
    }

    if (formulario.quesoAmarillo.checked) 
    {
        total += 10;
    }

    if (formulario.champiniones.checked) 
    {
        total += 10;
    }

    if (formulario.salami.checked) 
    {
        total += 10;
    }

    if (formulario.combo.value == "si")
    {
        total += 75;
    }
    
    formulario.total.value = total * cantidad;
}
