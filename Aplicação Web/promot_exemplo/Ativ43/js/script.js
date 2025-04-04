function mediaNumeros() {
    let numero1 = window.prompt('Digiter o primeiro numero')
    let numero2 = window.prompt('Digiter o segundo numero')
    let numero3 = window.prompt('Digiter o terceiro numero')

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);

    let mediaNumeros = (numero1 + numero2 + numero3) /3;
    alert('O resultado da media dos tres numero é: ' +mediaNumeros)

}