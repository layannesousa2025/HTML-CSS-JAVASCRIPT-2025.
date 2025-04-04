function verificarNumero(){
    let Numero = window.prompt('Digiter o numero!!')

    Numero = parseFloat(Numero);


     if(Numero %2 == 0){
        window.alert('numero é par')
     }else{
        window.alert('numero é impar')
     }
      
}