document.addEventListener('DOMContentLoaded', function () {
    const pedidoForm = document.getElementById('pedidoForm');
    const facturaContainer = document.getElementById('factura');

    pedidoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;

        // Obtener los valores de los productos seleccionados y calcular el costo total
        const corrientazo_pollo = parseInt(document.getElementById('corrientazo_pollo').value, 10) || 0;
        const corrientazo_cerdo = parseInt(document.getElementById('corrientazo_cerdo').value, 10) || 0;
        const corrientazo_lomo = parseInt(document.getElementById('corrientazo_lomo').value, 10) || 0;
        const sopa = document.getElementById('sopa').value;
        const jugo = document.getElementById('jugo').value;
        const gaseosa = document.getElementById('gaseosa').value;
        const helado = document.getElementById('helado').value;
        
        const precio_corrientazo_pollo = 10000;
        const precio_corrientazo_cerdo = 12000;
        const precio_corrientazo_lomo = 15000;
        const precio_sopa = 5000;
        const precio_jugo = 2000;
        const precio_gaseosa = 2500;
        const precio_helado = 3000;

        const total =
            corrientazo_pollo * precio_corrientazo_pollo +
            corrientazo_cerdo * precio_corrientazo_cerdo +
            corrientazo_lomo * precio_corrientazo_lomo +
            precio_sopa +
            precio_jugo +
            precio_gaseosa +
            precio_helado;

        // Construir la factura
        const facturaHTML = `
            <h2 class="text-center">Factura</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <h3>Productos Seleccionados</h3>
            <ul>
                ${corrientazo_pollo > 0 ? `<li>Corrientazo de Pollo (${corrientazo_pollo} x $${precio_corrientazo_pollo} pesos)</li>` : ''}
                ${corrientazo_cerdo > 0 ? `<li>Corrientazo de Cerdo (${corrientazo_cerdo} x $${precio_corrientazo_cerdo} pesos)</li>` : ''}
                ${corrientazo_lomo > 0 ? `<li>Corrientazo de Lomo (${corrientazo_lomo} x $${precio_corrientazo_lomo} pesos)</li>` : ''}
                <li>Sopa ($${precio_sopa} pesos): ${sopa}</li>
                <li>Jugo ($${precio_jugo} pesos): ${jugo}</li>
                <li>Gaseosa ($${precio_gaseosa} pesos): ${gaseosa}</li>
                <li>Helado ($${precio_helado} pesos): ${helado}</li>
            </ul>
            <h3>Total a Pagar</h3>
            <p><strong>Total:</strong> $${total} pesos</p>
        `;

        // Mostrar la factura en la alerta
        alert(facturaHTML);
    });
});
