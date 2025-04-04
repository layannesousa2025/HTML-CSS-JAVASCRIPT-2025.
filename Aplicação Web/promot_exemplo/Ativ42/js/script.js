function multipliqueNumeros(){
    let numero1 = window.prompt('Digiter o primeiro Numero: ')
    let numero2 = window.prompt('Digiter o segundo Numero: ')
    let numero3 = window.prompt('Digiter o terceiro Numero: ')
  

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);

    let resultado = numero1 * numero2 * numero3;

    alert('O resultado da Multipliçao é: '+resultado)
}