function verificarNumero(){
    let Numero = window.prompt('Por favor,insira um número valido!!')

    Numero = parseInt(Numero);

    if(Numero > 0){
        alert('O número '+ Numero +' é positivo 👍' );
    }
    else if(Numero < 0){
        alert('O número '+ Numero +' é negativo 👎');
    }

    else if(Numero == 0){
        alert('o numero zero')
    }
    else{
        alert('O número é zero.')
    }

}