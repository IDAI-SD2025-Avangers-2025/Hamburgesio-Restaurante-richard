var formulario = document.getElementById("calcularPrecio");
let carrito = [];

function procesarPedido() {
    let precio = calcularPrecio();
    if (precio === null) return;
    
    let ingredientes = obtenerIngredientes();
    
    let item = {
        cantidad: formulario.cantidad.value,
        tamanio: formulario.tam.value,
        pan: formulario.pan.value,
        ingredientes: ingredientes,
        combo: formulario.combo.value,
        precio: precio
    };
    
    carrito.push(item);
    mostrarCarrito();
    limpiarFormulario();
}

function calcularPrecio() {
    var cantidad = formulario.cantidad.value;
    var tamanio = formulario.tam.value;
    var pan = formulario.pan.value;
    var total = 0;

    if(tamanio == "chico") {
        total = 100;
    } else if (tamanio == "mediano") {
        total = 150;
    } else if (tamanio == "grande") {
        total = 200;
    } else {
        alert("Por favor selecciona un tamaño");
        return null;
    }

    if (pan == "integral") {
        total = total + 0;
    } else if (pan == "blanco") {
        total = total + 20;
    } else if(pan == "papa") {
        total = total + 50;
    } else if(pan == "parmesano") {
        total = total + 60;
    } else {
        alert("Por favor selecciona un tipo de pan");
        return null;
    }

    if (formulario.tomate.checked) total += 10;
    if (formulario.cebolla.checked) total += 10;
    if (formulario.aguacate.checked) total += 10;
    if (formulario.jamon.checked) total += 10;
    if (formulario.tocino.checked) total += 10;
    if (formulario.pina.checked) total += 10;
    if (formulario.quesoBlanco.checked) total += 10;
    if (formulario.quesoAmarillo.checked) total += 10;
    if (formulario.champiniones.checked) total += 10;
    if (formulario.salami.checked) total += 10;

    if (formulario.combo.value == "si") {
        total += 75;
    }
    
    let precioTotal = total * cantidad;
    formulario.total.value = precioTotal;
    return precioTotal;
}

function obtenerIngredientes() {
    let ingredientes = [];
    if (formulario.tomate.checked) ingredientes.push("Tomate");
    if (formulario.cebolla.checked) ingredientes.push("Cebolla");
    if (formulario.aguacate.checked) ingredientes.push("Aguacate");
    if (formulario.jamon.checked) ingredientes.push("Jamón");
    if (formulario.tocino.checked) ingredientes.push("Tocino");
    if (formulario.pina.checked) ingredientes.push("Piña");
    if (formulario.quesoBlanco.checked) ingredientes.push("Queso Blanco");
    if (formulario.quesoAmarillo.checked) ingredientes.push("Queso Amarillo");
    if (formulario.champiniones.checked) ingredientes.push("Champiñones");
    if (formulario.salami.checked) ingredientes.push("Salami");
    return ingredientes;
}

function mostrarCarrito() {
    let html = '';
    let total = 0;
    
    carrito.forEach((item, index) => {
        html += `<div class="item-carrito">
            <p><strong>Hamburguesa ${item.tamanio}</strong></p>
            <p>Pan: ${item.pan}</p>
            <p>Cantidad: ${item.cantidad}</p>
            ${item.ingredientes.length > 0 ? `<p>Extras: ${item.ingredientes.join(', ')}</p>` : ''}
            ${item.combo === 'si' ? '<p>Con combo</p>' : ''}
            <p><strong>$${item.precio} MXN</strong></p>
            <button onclick="eliminarItem(${index})" class="btn-eliminar">❌</button>
        </div>`;
        total += parseInt(item.precio);
    });
    
    document.getElementById('items-carrito').innerHTML = html;
    document.getElementById('total-carrito').textContent = total;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function limpiarCarrito() {
    carrito = [];
    mostrarCarrito();
}

function limpiarFormulario() {
    formulario.cantidad.value = 1;
    formulario.total.value = '';
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    formulario.combo.value = 'no';
}

function Calcular() {
    calcularPrecio();
}
