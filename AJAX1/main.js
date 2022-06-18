window.onload = function(){
    document.getElementById('btn').addEventListener('click', btn_click)
}

function btn_click(){
    //  document.getElementById('caixa').innerHTML = "Texto Alterado"

    // //AJAX em XMLHttpRequest

    // //cria-se o request
     let pedido = new XMLHttpRequest();
    
    // // definir função que atua mediante resposta
     pedido.onreadystatechange = function(){
         if(pedido.readyState == 4 && pedido.status == 200){ // tratamento de erro 
            document.getElementById('caixa').innerHTML =  this.responseText   
         }else{
            document.getElementById('caixa').innerHTML = "Erro volte mais tarde!"
         }
      
     }
    
    // //Parametros 1º Metodo 2º Arquivo 3º Se é assicrono ou não
    //  pedido.open("GET", "texto.txt", true)
     pedido.open("GET", "content.php?n=Frederico&a=Do_Pai", true)
     pedido.send()
}