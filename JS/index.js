document.body.onload = function() {
//localStorage.removeItem('nombre');
let nombreReg=localStorage.getItem('nombre');
    if (localStorage.length>0){        
            $('#bienvenida').text(`Hola ${nombreReg}, esta pagina te brinda dos juegos para que te diviertas`);
            $('#butRegistro').addClass('ocultar'); 
            $('#butReg').addClass('ocultar'); 
            $('#butJuego1').addClass('mostrar');
            $('#butJuego2').addClass('mostrar');
            $('#nomJuga').text(nombreReg);
        } else {
            $('#bienvenida').text(`Hola, para poder jugar debes registrarte, presiona el siguiente boton`);
            $('#butRegistro').addClass('mostrar'); 
            $('#butJuego1').addClass('ocultar');
            $('#butJuego2').addClass('ocultar');
        }         
              
    };