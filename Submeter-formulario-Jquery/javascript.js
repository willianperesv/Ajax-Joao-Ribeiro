function Submeter(id_formulario){
    let frm = $('#'+id_formulario)

    frm.submit(function(e){
        e.preventDefault();//imprede submissão tradicional
       

        //submissão do formulario em AJAX
        $ajax({
            type:frm.attr('method'), // ele vai buscar no form o metodo que POST
            url: frm.att('action'),// envia pro arquivo selecionado no form
            data: frm.serialize(),
            //sucesso
            success: function(i){
               $('#info').html('Enviado com sucesso')
            },
            error: function(){
                $('#info').html("aconteceu um erro");
            }
        })
    })
}