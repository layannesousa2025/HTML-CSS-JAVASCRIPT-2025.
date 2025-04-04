function Notas() {
    let nota = window.prompt('Digitir sua nota');

    if (nota >= 7 && nota <=10) {
        window.alert('Voce foi aprovado!!');

    } else if (nota >= 5 && nota < 7) {
        window.alert('Voce está de recuperacao!!');
    }

    else if(nota <5 && nota >=0){
        window.alert('vocer está reprovado!!')
    }
     
    else{
        window.alert('nota invalido')
    }
    
 

}