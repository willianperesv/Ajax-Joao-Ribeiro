$(document).ready(
    function(){
        $("#cmd").click(
            function(){
                $("#caixa").load("dados.txt", function(responseTxt, statusTxt, xhr){
                    if(statusTxt == "success", xhr){
                        alert("SuuuuuuuuuuuuCessooo")
                    }else if (statusTxt == "error"){
                        alert("ERROU", xhr.status + ": " + xhr.statusText)
                    }

            })
        }
    )   
}
)