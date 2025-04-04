function comparacao() {
    let num1 = window.prompt('digiter o primeiro numero!!');
    let num2 = window.prompt('digiter o segundo numero');

    num1 = parseFloat(num1);
    num2 = parseFloat (num2);

    if (num1 > num2) {
        window.alert('o primeiro numero é maior')
    } else if (num1 < num2)
        window.alert('o segundo numero é maior')

    else if (num1 == num2) {
        window.alert('os dois numeros sao iguais')
    }
    else{
        window.alert('valor invalido')
    }
}