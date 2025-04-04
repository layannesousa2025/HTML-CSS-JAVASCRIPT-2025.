function soma() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    somar = num1 + num2;

    if(somar) {
        document.getElementById('resultado').innerText = 'O resultado da soma é:' +somar;
    } else {
        document.getElementById('resultado').innerText = 'numero invalido'
    }

}

function subtracao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    subtraçao = num1 - num2;

    if(subtraçao) {
        document.getElementById('resultado').innerText = ' o resultado da subtracao é:' +subtraçao;
    } else if(subtraçao == 0) {
        document.getElementById('resultado').innerText = ' o numero é: 0';
    }else{
        document.getElementById('resultado').innerText ='calculo invalido';
    }

}

function multipliçao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    multi = num1 * num2;

    if(multi) {
        document.getElementById('resultado').innerText = 'O resultado da multiplicacao é:' +multi;
    } else {
        document.getElementById('resultado').innerText = 'numero invalido'
    }


}

function divisao() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    divisão = num1 / num2;


    if(divisão) {
        document.getElementById('resultado').innerText = 'O resultado da divisao é:' +divisão;
    } else {
        document.getElementById('resultado').innerText = 'numero invalido'
    }


    

}