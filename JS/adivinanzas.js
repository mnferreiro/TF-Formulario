//Completo el select de respuesta
let valorSelect;
document.getElementById('seleAdivi').addEventListener('change', function(e) {
    valorSelect = this.value;
    if(this.value != '') {
      document.getElementById('res').innerHTML = document.getElementById(`alternativa-${this.value}`).innerHTML;   
    } else {
      document.getElementById('res').innerText = 'Selecciona una adivinanza'
    } return valorSelect;
  });
  
  //Juego
  let contador = 0;
  let resultadoAdivinar=0;
  function irAdivinando () {  
    if(document.getElementById('seleAdivi').selectedIndex == 0) {
    }  else {
        contador++; 
           if(contador < 3) { 
           let yyy= $('#res').val();           
           if(yyy == 3) { 
                 resultadoAdivinar ++;                                                                 
                  }           
          document.getElementById('seleAdivi').selectedIndex=0
          document.getElementById(`${valorSelect}`).classList.toggle('ocultar');                       
          return resultadoAdivinar;
        } else if (contador == 3){
          let yyy= $('#res').val(); 
              if(yyy == 3) { 
                 resultadoAdivinar ++;                                  
                  }

            document.getElementById('butEnviarResAdi').textContent = "Resultado";            
            return resultadoAdivinar;
          } 
          else if (contador == 4) {            
            $('#mensajeFinal').text(`Felicitaciones !!! Has respondido las tres adivinanzas, has adivinado ${resultadoAdivinar} de ellas`);
            document.getElementById(`mensajeFinal`).classList.remove('ocultar');
          }
          else {
            document.getElementById(`butEnviarResAdi`).classList.add('ocultar');
            $('#mensajeFinal').text(`Para volver a jugar, por favor presiona "Reiniciar Juego"`);

          }  
        }               
    };
   
  document.getElementById('butEnviarResAdi').addEventListener('click',irAdivinando,true);

 
//Reiniciar Juego
  function reiniciarAdivi(){
    contador = 0;
    resultadoAdivinar=0;
    document.getElementById('seleAdivi').selectedIndex=0
    document.getElementById(`A`).classList.remove('ocultar');
    document.getElementById(`B`).classList.remove('ocultar');
    document.getElementById(`C`).classList.remove('ocultar');
    document.getElementById(`mensajeFinal`).classList.add('ocultar');
    document.getElementById(`butEnviarResAdi`).classList.remove('ocultar');
    document.getElementById('butEnviarResAdi').textContent = "Responder"
  };

  document.getElementById('butReiniciarAdi').addEventListener('click',reiniciarAdivi,true);
                
                  
  
    

    
    
    