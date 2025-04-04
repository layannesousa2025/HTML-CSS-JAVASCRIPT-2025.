function multNumeros(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    mult = numero1 * numero2;

    
    document.getElementById('resultado').innerText ='A multiplicacao é:' +mult;
}