function somaNumeros(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

     soma = numero1 + numero2;

    document.getElementById('resultado').innerText ='A soma é:' +soma;
}