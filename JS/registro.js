let inputEdad = document.getElementById('edad'); 
    inputEdad.addEventListener('input', function(event) {
        if (inputEdad.value <= 0) {
            inputEdad.setCustomValidity("La edad no es válida");            
        } else {
            inputEdad.setCustomValidity("");
        }
    });

    let inputPass = document.getElementById('pass2'); 
    inputPass.addEventListener('input', function(event) {
        let passw2= $('#pass2').val();
        console.log(passw2);
        let passw1= $('#pass1').val();
        console.log(passw1);
        if (passw1 != passw2) {
            inputPass.setCustomValidity("Las contraseñas no coinciden");            
        } else {
            inputPass.setCustomValidity("");
        }
    });  
    
    
    //seleccion pais    
    $.ajax({
        url: "https://restcountries.com/v3.1/all",
        method: "GET",
        dataType: "json",
        success: function(data) {
            let selectPais = $('#selePais');
            
            data.sort(function(a, b) {
                var nameA = a.name.common;
                var nameB = b.name.common;
                return nameA.localeCompare(nameB);
              });   
            let pais = data;               
            for(let i = 0; i < pais.length; i++) {
                
                let optionPais = $('<option>').text(pais[i].name.common).val(pais[i].ccn3);
                selectPais.append(optionPais);
                }
            },
        error: function() {
            alert("Error al obtener paises")
            }
    });

    //seleccion provincia
    $.ajax({
        url: "https://apis.datos.gob.ar/georef/api/provincias",
        method: "GET",
        dataType: "json",
        success: function(data) {
            let selectProv = $('#seleProvincias');
            let provi = data.provincias.sort(function(a,b) {return a.nombre.localeCompare(b.nombre)});            
                 
            for(let i = 0; i < provi.length; i++) {
                let optionPro = $('<option>').text(provi[i].nombre).val(provi[i].id);
                selectProv.append(optionPro);                              
            }    
            },
        error: function() {
            alert("Error al obtener provincias")
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
                let ciudad = data.municipios.sort(function(a,b) {return a.nombre.localeCompare(b.nombre)});                 
            for(let i = 0; i < ciudad.length; i++) {       
                    let optionMuni = $('<option>').text(ciudad[i].nombre);
                    selectMuni.append(optionMuni);    
            }
            },
            error: function() {
                alert("Error al obtener ciudades")
            }
        });
    });
    
    
    //evento submit del formulario
    $('#formuTP').submit(function(event) {        
        event.preventDefault();  
        let usuarioNom = document.getElementById('nombre').value; 
        console.log(usuarioNom);
        localStorage.setItem('nombre',usuarioNom);
        location.href="index.html";
     });     