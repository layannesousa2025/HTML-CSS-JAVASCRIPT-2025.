function subtracao(){
    let numero1=window.prompt('Digite o primeiro numero')
    let numero2= window.prompt('Digite o segundo numero')

    numero1=parseFloat(numero1)
    numero2=parseFloat(numero2)

    let subtracao = numero1 - numero2;
    alert('O resultado da subtracao é: ' +subtracao)
}