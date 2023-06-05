document.body.onload = function() {

let nombreReg=localStorage.getItem('nombre');
    if (localStorage.length>0){    
        console.log(nombreReg)
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
        
       // let nombreUsu;
       /* $('#testlocal').change(function() {
            nombreUsu = $('#testlocal').val();
            //nombreUsu = event.val();
        });  
        console.log(nombreUsu);
        localStorage.setItem('nombre',nombreUsu);    */
 

localStorage.removeItem('nombre');

    
    //Mostrar u ocultar formulario
    
    function mostrarFormulario() {
    document.getElementById("formuTP").classList.toggle("ocultar");
    }

    //boton para probar aplicar clase error
    $('#error').click(function() {
        $('input').addClass("error")});

    //funcion para aplicar la clase error a los input cuando sea necesario
    function errorFun(){ 
        $('input').addClass("error");
        }

   /*
    //seleccion pais    
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        method: "GET",
        dataType: "json",
        success: function(data) {
            let selectPais = $('#selePais');
            let pais = data;        
            for(let i = 0; i < pais.length; i++) {
                let optionPais = $('<option>').text(pais[i].name.common).val(pais[i].ccn3);
                selectPais.append(optionPais);
                }
            },
        error: function() {
            alert("Error al obtener data")
            }
    });

    //seleccion provincia
    $.ajax({
        url: "https://apis.datos.gob.ar/georef/api/provincias",
        method: "GET",
        dataType: "json",
        success: function(data) {
            let selectProv = $('#seleProvincias');
            let provi = data.provincias;        
            for(let i = 0; i < provi.length; i++) {
                let optionPro = $('<option>').text(provi[i].nombre).val(provi[i].id);
                selectProv.append(optionPro);
            }
            },
        error: function() {
            alert("Error al obtener data")
            }
    });

    //seleccion ciudad
    $('#seleProvincias').change(function() {
        let provi = $('#seleProvincias').val();
        let selectMuni = $('#seleMuni').text("Ingrese una ciudad");
        $.ajax({    
            url: `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provi}&max=150`,
            method: "GET",
            dataType: "json",
            success: function(data) { 
                selectMuni = $('#seleMuni');    
                let ciudad = data.municipios;    
            for(let i = 0; i < ciudad.length; i++) {       
                    let optionMuni = $('<option>').text(ciudad[i].nombre);
                    selectMuni.append(optionMuni);    
            }
            },
            error: function() {
                alert("Error al obtener data")
            }
        });
    });
    */
    
    //evento submit
    $('#formuTP').submit(function(event) {        
       event.preventDefault(); 
       let edad = document.getElementById('edad').value; 
       console.log(edad); 
       if(edad < 0) {
        $('#errorEdad').addClass('mostrar');
        $('#errorEdad').text("Por favor ingrese una edad valida");

       }       
       let usuarioNom = document.getElementById('nombre').value; 
       console.log(usuarioNom);
       localStorage.setItem('nombre',usuarioNom);
       location.href="index.html";

    });

       
    
        //document.getElementById("formuTP").classList.toggle("ocultar");
             
   function respuesta() {
    let adivina = $('#seleAdivi').val();
        console.log(adivina);
        document.getElementById("adivi1").classList.toggle("ocultar");
   } 
       
function alertar() {
    alert("se esta x enviar");
}


    function alerta1(event) {
        let respu=event.this.val();
        console.log(respu);
        if(respu == 2) {
            alert ("has adivinado");
        } else {
            alert ("NO NO");
        }
    }

    };