function calcularNumeros(){
    let numero1 = window.prompt('Digiter o primeiro Numero: ')
    let numero2 = window.prompt('Digiter o segundo Numero: ')

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 + numero2;

    alert('A Soma dos dois numero é: '+resultado)
}