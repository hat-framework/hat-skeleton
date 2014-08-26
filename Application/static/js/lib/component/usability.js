$('a.apagar_nn').on('click', function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    drop_js(url, $(this).parent());
    return false;
});

$('a.apagar, a.drop').on('click', function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    drop_js(url, $(this).parent().parent());
    return false;
});

function drop_js(url, dropitem){
    if(!confirm('Você realmente deseja excluir?'))return false;
    $.ajax({
        url: url,
        data:{'ajax':'true'},
        type:'post',
        dataType: 'json',
        success: function(json) {
                if(json.status == 1){
                    dropitem.fadeOut('slow', function(){
                        $(this).hide();
                    });
                }else{
                    if (typeof json.erro != 'undefined') $('#erro').html(json.erro).fadeIn("slow");
                    else $('#erro').html('Erro ao apagar dados do site').fadeIn("slow");
                }
        },
        error: function(erro){
            $('#alert').html('Erro ao apagar dados no site').fadeIn("slow");
        }
    });
    return false;
}