const body = document.querySelector("#body");
const botao = document.querySelector("#botao");

botao.addEventListener("click", function () {
     if(body.style.backgroundColor === "white"){
         body.style.backgroundColor = "blue";
     }else{
        body.style.backgroundColor ="white";
     }
})