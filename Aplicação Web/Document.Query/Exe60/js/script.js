const botao = document.querySelector("#botao");

botao.addEventListener("click",function(){
     if(botao.textContent ==="Ligar"){
        botao.textContent ="Deligar";

     }else{
        botao.textContent="Ligar";
     }
})