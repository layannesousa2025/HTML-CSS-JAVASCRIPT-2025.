function Numeros() {
    // Obtém os valores dos inputs
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    
    // Calcula a diferença
     diferenca = (num1 - num2);
    
    // Exibe a diferença no documento
    document.getElementById("resultado").innerText = "A diferença é: " +diferenca;


}