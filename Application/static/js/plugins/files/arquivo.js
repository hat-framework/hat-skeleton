if(typeof(arquivo) == 'undefined'){
    var arquivo = '';
    $('.file_actions .drop_file').live('click', function(){
        if(!confirm('Atenção o arquivo será excluído permanentemente, deseja prosseguir?')){return false;}
        var url = $(this).attr('href');
        var li = $(this).parent().parent();
        $.ajax({
            url: url,
            type:'post',
            success: function(response) {
                if(response){
                    li.fadeOut('2500', function(){ li.remove(); });
                }
            }
        });
        return false;
    });

    $('.file_form form').live('submit', function(){
        alert('clique no botão salvar!'); 
        return false;
    });

    $('.edit_file_form').live('click', function(){
        var temp   = $(this).parent().parent();
        var edit   = $(this);
        var form   = temp.children('.file_form').children('form');
        var formid = form.attr('id');
        var saved  = [];
        var value  = '';

        var file_content = temp.children('.file_content');
        if(edit.html() == 'Editar'){
            file_content.fadeOut('500', function(){
                form.fadeIn('500');
                edit.html('Salvar');
            });
        }else{
            value     = form.children('.form_value').val();
            var url   = edit.attr('href');
            var label = form.children('.form_value').attr('id');
            $.ajax({
                url: url,
                type:'post',
                dataType: 'json',
                data: form.serialize(),
                success: function(response) {
                    form.fadeOut('500', function(){
                        var filename        = form.children('#file_label').val();
                        var filedescription = form.children('#file_descricao').val();
                        file_content.children('.name').children('.name').html(filename);
                        file_content.children('.descricao').children('.descricao').html(filedescription);
                        file_content.fadeIn('500');
                        edit.html('Editar');
                    });
                    if(response.status !== 1){
                        blockUI_error('Erro na comunicação com o servidor: as modificações não foram salvas');
                    }
                }
            });
        }
        return false;
    });
}