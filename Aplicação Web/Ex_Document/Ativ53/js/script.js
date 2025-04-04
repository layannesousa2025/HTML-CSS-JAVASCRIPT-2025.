function calcularMedia(){
    let num1 = parseFloat(document.getElementById('portugues').value);
    let num2 = parseFloat(document.getElementById('raciocinio').value);
    let num3 = parseFloat(document.getElementById('orientacao').value);
    let num4 = parseFloat(document.getElementById('web').value);
    let num5 = parseFloat(document.getElementById('mobile').value);

    soma = num1 + num2 + num3 + num4 + num4 + num5;

    media = soma /5;


    document.getElementById('resultado').innerText = 'A media das materia é:' + media;
}