function calcularNumeros(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);

    
     soma = numero1 + numero2 + numero3;

    document.getElementById('resultado').innerText ='O resultado dos três Números é:' +soma;
}