var viendoEnlacesComidas = false;

var viendoEnlacesBebidas = false;

var viendoEnlacesPostres = false;

var articulosEnPedido = 0;

var valorPedido = 0;

var id = 1;

window.onclick = function aparecerBotonPedido() {
    if (articulosEnPedido===0) {
        document.getElementById("boton-revisar-pedido").style.opacity = 0;
        document.getElementById("boton-revisar-pedido").style.transform = "scaleY(0)";
        document.getElementById("pedido-sin-empezar").style.display = "inline";
        document.getElementById("precio-total-pedido").style.display = "none";
    } else{
        document.getElementById("boton-revisar-pedido").style.opacity = 1;
        document.getElementById("boton-revisar-pedido").style.transform = "scaleY(1)";
        document.getElementById("pedido-sin-empezar").style.display = "none";
        document.getElementById("precio-total-pedido").style.display = "inline-flex";
    }
}

window.onscroll = function aparecerBotonArriba() {
    document.getElementById("enlaces-comidas").style.top = "0";
    document.getElementById("enlaces-comidas").style.opacity = 0;
    document.getElementById("enlaces-comidas").style.transform = "scaleY(0)";
    viendoEnlacesComidas = false;
    document.getElementById("enlaces-bebidas").style.top = "0";
    document.getElementById("enlaces-bebidas").style.opacity = 0;
    document.getElementById("enlaces-bebidas").style.transform = "scaleY(0)";
    viendoEnlacesBebidas = false;
    document.getElementById("enlaces-postres").style.top = "0";
    document.getElementById("enlaces-postres").style.opacity = 0;
    document.getElementById("enlaces-postres").style.transform = "scaleY(0)";
    viendoEnlacesPostres = false;
    if(window.pageYOffset < 100){
        document.getElementById("boton-subir-arriba").style.opacity = 0;
        document.getElementById("boton-subir-arriba").style.transform = "scaleY(0)";
    }
    if(window.pageYOffset >= 100){
        document.getElementById("boton-subir-arriba").style.opacity = 1;
        document.getElementById("boton-subir-arriba").style.transform = "scaleY(1)";
    }
}

function aumentarImagen(imagen) {
    document.getElementById(imagen).style.transform="scale(1.2)";
    setTimeout(() => {
    document.getElementById(imagen).style.transform="scale(1)";
    }, 150);
}

function añadirProducto(elemento, precio, tipo) {
    producto = document.getElementById(elemento).innerHTML;
    escribirProducto(producto, precio, tipo);
}


function escribirProducto(producto, precioProducto, tipo) {
    var pedido = document.getElementById('pedido').innerHTML;
    document.getElementById('pedido').innerHTML = pedido + 
    `<div id="pedido${ id }">
    <div class="contenedor-boton-quitar" onclick="restarPrecio(${ precioProducto },pedido${ id })">
        <img src="./images/quitar.png" alt="Quitar" id="quitar${ id }">
    </div>
    <div class='pedido-individual' >
        <div>${ tipo } ${ producto }</div>
        <div><span>${ precioProducto }€</span></div>
    </div>
    <hr>
    </div>`
    articulosEnPedido = articulosEnPedido + 1;
    valorPedido = parseFloat(valorPedido) + parseFloat(precioProducto);
    document.getElementById('precio-total').innerHTML =valorPedido.toFixed(2);
    pedidoVacio = false;
    id = id  + 1;
}

function añadirSaborHelado(tipo, sabor, precio) {
    var pedido = document.getElementById('pedido').innerHTML;
    document.getElementById('pedido').innerHTML = pedido + 
    `<div id="pedido${ id }">
    <div class="contenedor-boton-quitar-helado" onclick="restarPrecio(${ precio },pedido${ id })">
        <img src="./images/quitar.png" alt="Quitar" id="quitar${ id }">
    </div>
    <div class='pedido-individual' >
        <div>${ tipo } <br>(${ sabor })</div>
        <div><span>${ precio }€</span></div>
    </div>
    <hr>
    </div>`
    articulosEnPedido = articulosEnPedido + 1;
    valorPedido = parseFloat(valorPedido) + parseFloat(precio);
    document.getElementById('precio-total').innerHTML =valorPedido.toFixed(2);
    pedidoVacio = false;
    id = id  + 1;
}

function añadirSaborHelado2Sabores(sabor, id1, id2){
    var cambiarSabor = 0; 
    if (document.getElementById(id2).innerHTML==="") {
        cambiarSabor = 2;
    }
    if (document.getElementById(id1).innerHTML==="") {
        cambiarSabor = 1;
    }
    switch (cambiarSabor) {
        case 1:
            document.getElementById(id1).innerHTML = sabor;
            document.getElementById("quitarSabor731").style.opacity = 1;
        break;

        case 2:
            document.getElementById(id2).innerHTML = sabor;
            document.getElementById("quitarSabor732").style.opacity = 1;
        break;

        default:
        break;
    }
    if(document.getElementById(id1).innerHTML!=="" && document.getElementById(id2).innerHTML!==""){
        document.getElementById("anadir73").style.opacity = 1;
        document.getElementById("anadir73").style.transform = "scaleY(1)";
    }
}



function añadirSaborHelado3Sabores(sabor, id1, id2, id3){
    var cambiarSabor = 0;  
    if (document.getElementById(id3).innerHTML==="") {
        cambiarSabor = 3;
    }
    if (document.getElementById(id2).innerHTML==="") {
        cambiarSabor = 2;
    }
    if (document.getElementById(id1).innerHTML==="") {
        cambiarSabor = 1;
    }
    switch (cambiarSabor) {
        case 1:
            document.getElementById(id1).innerHTML = sabor;
            document.getElementById("quitarSabor741").style.opacity = 1;
        break;

        case 2:
            document.getElementById(id2).innerHTML = sabor;
            document.getElementById("quitarSabor742").style.opacity = 1;
        break;

        case 3:
            document.getElementById(id3).innerHTML = sabor;
            document.getElementById("quitarSabor743").style.opacity = 1;
        break;

        default:
        break;
    }
    if(document.getElementById(id1).innerHTML!=="" && document.getElementById(id2).innerHTML!=="" && document.getElementById(id3).innerHTML!==""){
        document.getElementById("anadir74").style.opacity = 1;
        document.getElementById("anadir74").style.transform = "scaleY(1)";
    }
}

function añadirHeladoDefinitivoVariosSabores(cantidad, tipo, id1, id2, id3, precio) {
    switch (cantidad) {
        case "2":
            var pedido = document.getElementById('pedido').innerHTML;
            document.getElementById('pedido').innerHTML = pedido + 
            `<div id="pedido${ id }">
            <div class="contenedor-boton-quitar-helado" onclick="restarPrecio(${ precio },pedido${ id })">
                <img src="./images/quitar.png" alt="Quitar" id="quitar${ id }">
            </div>
            <div class='pedido-individual' >
                <div>${ tipo } <br>(${ document.getElementById(id1).innerHTML } + ${ document.getElementById(id2).innerHTML })</div>
                <div><span>${ precio }€</span></div>
            </div>
            <hr>
            </div>`
            articulosEnPedido = articulosEnPedido + 1;
            valorPedido = parseFloat(valorPedido) + parseFloat(precio);
            document.getElementById('precio-total').innerHTML =valorPedido.toFixed(2);
            pedidoVacio = false;
            id = id  + 1;
        break;

        case "3":
            var pedido = document.getElementById('pedido').innerHTML;
            document.getElementById('pedido').innerHTML = pedido + 
            `<div id="pedido${ id }">
            <div class="contenedor-boton-quitar-helado" onclick="restarPrecio(${ precio },pedido${ id })">
                <img src="./images/quitar.png" alt="Quitar" id="quitar${ id }">
            </div>
            <div class='pedido-individual' >
                <div>${ tipo } <br>(${ document.getElementById(id1).innerHTML } + ${ document.getElementById(id2).innerHTML } + ${ document.getElementById(id3).innerHTML })</div>
                <div><span>${ precio }€</span></div>
            </div>
            <hr>
            </div>`
            articulosEnPedido = articulosEnPedido + 1;
            valorPedido = parseFloat(valorPedido) + parseFloat(precio);
            document.getElementById('precio-total').innerHTML =valorPedido.toFixed(2);
            pedidoVacio = false;
            id = id  + 1;
        break;
    
        default:
            break;
    }
    
}

function restarPrecio(precio, id) {
    articulosEnPedido = articulosEnPedido - 1;
    valorPedido = parseFloat(valorPedido) - parseFloat(precio);
    document.getElementById('precio-total').innerHTML =valorPedido.toFixed(2);
    document.getElementById('pedido').removeChild(id);
}

function enlacesSuperiores(enlace) {
    switch (enlace) {
        case "comida":
            if(viendoEnlacesComidas===false){
                document.getElementById("enlaces-comidas").style.top = "50%";
                document.getElementById("enlaces-comidas").style.opacity = 1;
                document.getElementById("enlaces-comidas").style.transform = "scaleY(1)";
            } else{
                document.getElementById("enlaces-comidas").style.top = "0";
                document.getElementById("enlaces-comidas").style.opacity = 0;
                document.getElementById("enlaces-comidas").style.transform = "scaleY(0)";
            }
            viendoEnlacesComidas=!viendoEnlacesComidas;
            if (viendoEnlacesBebidas===true) {
                viendoEnlacesBebidas = false;
                document.getElementById("enlaces-bebidas").style.top = "0";
                document.getElementById("enlaces-bebidas").style.opacity = 0;
                document.getElementById("enlaces-bebidas").style.transform = "scaleY(0)";
            }
            if (viendoEnlacesPostres===true) {
                viendoEnlacesPostres=false;
                document.getElementById("enlaces-postres").style.top = "0";
                document.getElementById("enlaces-postres").style.opacity = 0;
                document.getElementById("enlaces-postres").style.transform = "scaleY(0)";
            }
            
            break;
        case "bebida":
            if(viendoEnlacesBebidas===false){
                document.getElementById("enlaces-bebidas").style.top = "50%";
                document.getElementById("enlaces-bebidas").style.opacity = 1;
                document.getElementById("enlaces-bebidas").style.transform = "scaleY(1)";
            } else{
                document.getElementById("enlaces-bebidas").style.top = "0";
                document.getElementById("enlaces-bebidas").style.opacity = 0;
                document.getElementById("enlaces-bebidas").style.transform = "scaleY(0)";
            }
            viendoEnlacesBebidas=!viendoEnlacesBebidas;
            if (viendoEnlacesComidas===true) {
                viendoEnlacesComidas = false;    
                document.getElementById("enlaces-comidas").style.top = "0";
                document.getElementById("enlaces-comidas").style.opacity = 0;
                document.getElementById("enlaces-comidas").style.transform = "scaleY(0)";
            }
            if (viendoEnlacesPostres===true) {
                viendoEnlacesPostres=false;
                document.getElementById("enlaces-postres").style.top = "0";
                document.getElementById("enlaces-postres").style.opacity = 0;
                document.getElementById("enlaces-postres").style.transform = "scaleY(0)";
            }
            break;
        case "postre":
            if(viendoEnlacesPostres===false){
                document.getElementById("enlaces-postres").style.top = "50%";
                document.getElementById("enlaces-postres").style.opacity = 1;
                document.getElementById("enlaces-postres").style.transform = "scaleY(1)";
            } else{
                document.getElementById("enlaces-postres").style.top = "0";
                document.getElementById("enlaces-postres").style.opacity = 0;
                document.getElementById("enlaces-postres").style.transform = "scaleY(0)";
            }
            viendoEnlacesPostres=!viendoEnlacesPostres;
            if (viendoEnlacesComidas===true) {
                viendoEnlacesComidas = false;    
                document.getElementById("enlaces-comidas").style.top = "0";
                document.getElementById("enlaces-comidas").style.opacity = 0;
                document.getElementById("enlaces-comidas").style.transform = "scaleY(0)";
            }
            if (viendoEnlacesBebidas===true) {
                viendoEnlacesBebidas = false;
                document.getElementById("enlaces-bebidas").style.top = "0";
                document.getElementById("enlaces-bebidas").style.opacity = 0;
                document.getElementById("enlaces-bebidas").style.transform = "scaleY(0)";
            }
            break;
    
        default:
            break;
    }
    
   
    
}

function abrirTipos(id, imagen, contenedorImagen) {
    switch (document.getElementById(id).className) {
        case "tipos":
            document.getElementById(id).classList.add("visible");
            document.getElementById(imagen).style.top = "27%";
            document.getElementById(contenedorImagen).style.height = "4em";
        break;

        case "tipos visible":
            document.getElementById(id).classList.remove("visible");
            document.getElementById(contenedorImagen).style.height = "100%";
        break;
        default:
        break;
    }
}

function borrarSabor(id, boton, botonAñadir) {
    document.getElementById(id).innerHTML = "";
    document.getElementById(boton).style.opacity = 0;
    document.getElementById(botonAñadir).style.opacity = 0;
    document.getElementById(botonAñadir).style.transform = 'scaleY(0)';
}