// function executar(){  // mudar no botao evento
//     $('#caixa').load('dados.txt')
// }
$(document).ready(function(){ //evento direto na função
$('#cmd').click(function(){
    $('#caixa').load('dados.txt')
})
})
