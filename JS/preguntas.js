//Inicio juego
function respon0() {
    document.getElementById('pregu1').classList.toggle('ocultar');
    document.getElementById('respo0').classList.toggle('ocultar');
}
document.getElementById('respo0').addEventListener('click',respon0,true);

//Primer respuesta
let contadorRespuestasCorrectas=0;
function respon1() {    
    if($(`input[name="res1"]`)[0].checked == false && $(`input[name="res1"]`)[1].checked == false && $(`input[name="res1"]`)[2].checked == false) { 
        $('#noSeleccion').text("Por favor elija alguna respuesta");
        document.getElementById('noSeleccion').classList.remove('ocultar');        
        } else {     
    document.getElementById('pregu1').classList.toggle('ocultar');
    document.getElementById('pregu2').classList.toggle('ocultar');
    document.getElementById('noSeleccion').classList.add('ocultar');    
    let respuesta1 = $('input[name="res1"]:checked').val();
    if(respuesta1 == 3) {
        contadorRespuestasCorrectas++;
        document.getElementById('respuPreguntas').innerText = `Bien, tu respuesta es correcta, ya tienes ${contadorRespuestasCorrectas} correctas`
    } else {
        document.getElementById('respuPreguntas').innerText = `Que lástima, tu respuesta NO es correcta, aun no tienes respuestas correctas`
    }
}
}
document.getElementById('respo1').addEventListener('click',respon1,true);

//Segunda respuesta
function respon2() {
    if($(`input[name="res2"]`)[0].checked == false && $(`input[name="res2"]`)[1].checked == false && $(`input[name="res2"]`)[2].checked == false) { 
        $('#noSeleccion').text("Por favor elija alguna respuesta"); 
        document.getElementById('noSeleccion').classList.remove('ocultar');
    } else { 
    document.getElementById('pregu3').classList.toggle('ocultar');
    document.getElementById('pregu2').classList.toggle('ocultar');
    document.getElementById('noSeleccion').classList.add('ocultar');
    let respuesta2 = $('input[name="res2"]:checked').val();
    if(respuesta2 == 3) {
        contadorRespuestasCorrectas++;
        document.getElementById('respuPreguntas').innerText = `Bien, tu respuesta es correcta, ya tienes ${contadorRespuestasCorrectas} correctas`
    } else {
        document.getElementById('respuPreguntas').innerText = `Que lástima, tu respuesta NO es correcta, sigues con ${contadorRespuestasCorrectas} correctas`
    } }
}
document.getElementById('respo2').addEventListener('click',respon2,true);

//Tercer respuesta
function respon3() {
    if($(`input[name="res3"]`)[0].checked == false && $(`input[name="res3"]`)[1].checked == false && $(`input[name="res3"]`)[2].checked == false) { 
        $('#noSeleccion').text("Por favor elija alguna respuesta"); 
        document.getElementById('noSeleccion').classList.remove('ocultar');
    } else { 
    document.getElementById('pregu3').classList.toggle('ocultar');
    document.getElementById('pregu4').classList.toggle('ocultar');
    document.getElementById('noSeleccion').classList.add('ocultar');
    let respuesta3 = $('input[name="res3"]:checked').val();
    if(respuesta3 == 3) {
        contadorRespuestasCorrectas++;
        document.getElementById('respuPreguntas').innerText = `Bien, tu respuesta es correcta, ya tienes ${contadorRespuestasCorrectas} correctas`
    } else {
        document.getElementById('respuPreguntas').innerText = `Que lástima, tu respuesta NO es correcta, sigues con ${contadorRespuestasCorrectas} correctas`
    } }
}
document.getElementById('respo3').addEventListener('click',respon3,true);

//Cuarta respuesta
function respon4() {
    if($(`input[name="res4"]`)[0].checked == false && $(`input[name="res4"]`)[1].checked == false && $(`input[name="res4"]`)[2].checked == false) { 
        $('#noSeleccion').text("Por favor elija alguna respuesta");
        document.getElementById('noSeleccion').classList.remove('ocultar'); 
    } else { 
    document.getElementById('pregu5').classList.toggle('ocultar');
    document.getElementById('pregu4').classList.toggle('ocultar');
    document.getElementById('noSeleccion').classList.add('ocultar');
    let respuesta4 = $('input[name="res4"]:checked').val();
    if(respuesta4 == 3) {
        contadorRespuestasCorrectas++;
        document.getElementById('respuPreguntas').innerText = `Bien, tu respuesta es correcta, ya tienes ${contadorRespuestasCorrectas} correctas`
    } else {
        document.getElementById('respuPreguntas').innerText = `Que lástima, tu respuesta NO es correcta, sigues con ${contadorRespuestasCorrectas} correctas`
    } }
}
document.getElementById('respo4').addEventListener('click',respon4,true);

//Quinta respuesta
function respon5() {
    if($(`input[name="res5"]`)[0].checked == false && $(`input[name="res5"]`)[1].checked == false && $(`input[name="res5"]`)[2].checked == false) { 
        $('#noSeleccion').text("Por favor elija alguna respuesta"); 
        document.getElementById('noSeleccion').classList.remove('ocultar');
    } else { 
    document.getElementById('pregu5').classList.toggle('ocultar'); 
    document.getElementById('noSeleccion').classList.add('ocultar');   
    let respuesta5 = $('input[name="res5"]:checked').val();
    if(respuesta5 == 3) {
        contadorRespuestasCorrectas++;
        document.getElementById('respuPreguntas').innerText = `Bien, tu respuesta es correcta. En total tuviste ${contadorRespuestasCorrectas} correctas`
    } else {
        document.getElementById('respuPreguntas').innerText = `Que lástima, tu respuesta NO es correcta. En total tuviste ${contadorRespuestasCorrectas} correctas`
    } }
}
document.getElementById('respo5').addEventListener('click',respon5,true);

//Reiniciar Juego
function reiniPregu() {
    document.getElementById('pregu1').classList.add('ocultar');
    document.getElementById('pregu2').classList.add('ocultar');
    document.getElementById('pregu3').classList.add('ocultar');
    document.getElementById('pregu4').classList.add('ocultar');
    document.getElementById('pregu5').classList.add('ocultar');
    document.getElementById('noSeleccion').classList.add('ocultar');
    document.getElementById('respo0').classList.toggle('ocultar');
    contadorRespuestasCorrectas = 0;
    document.getElementById('respuPreguntas').innerText ="";
        for (let j=1; j<6;j++) {
            for (let i=0; i<$('input[name="res1"]').length;i++) {
                $(`input[name="res${j}"]`)[i].checked = false;           
        }};
    
}
document.getElementById('reiniPregu').addEventListener('click',reiniPregu,true);
