Core.ajaxform = function(form){
    this.form   = form;
    this.ajax   = new Core.ajax();
    this.result = '';
};

Core.ajaxform.prototype.beforeSend = function(){
    blockUI_wait('Salvando...');
    $('#erro').hide();
    $('#success').hide();
    $('.erro').delay('1200').fadeOut('slow');
    $('.valid_msg').delay('1200').fadeOut('slow');
};

Core.ajaxform.prototype.afterSend = function(){
    blockUI_unwait();
};

Core.ajaxform.prototype.success = function(json){
    if(typeof json.redirect != 'undefined') {
        window.location.href = json.redirect;
    }

    if(json.status == 1){
        if(json.is_editing != 1){this.form[0].reset();}
        if (typeof json.success != 'undefined' && json.success != '') blockUI_success(json.success);
        else if(typeof json.alert != 'undefined' && json.alert != '') blockUI_alert(json.alert);
        else blockUI_error('Dados enviados corretamente, mas sem a confirmação do servidor.');
    }else{
        if (typeof json.erro != 'undefined') blockUI_error(json.erro);
        else if(typeof json.alert != 'undefined' && json.alert != '') blockUI_alert(json.alert);
        else blockUI_error('Dados enviados corretamente, mas sem a confirmação do servidor.');
        for (var camp in json){
             $('#v'+camp).text(json[camp]).fadeIn('slow').addClass('erro').removeClass('valid_msg');
        }
    }
    return json.status;
};

Core.ajaxform.prototype.erro = function(data){
    blockUI_error("Erro na comunicação com o site.<hr/> Detalhes: "+data.erro);
};

Core.ajaxform.prototype.getResult = function(){
    return this.result;
};

Core.ajaxform.prototype.sendform = function(){
    try{
        this.beforeSend();
        var data = this.ajax.send(this.form.attr('action'), this.form.serialize());
        this.afterSend();
        if(data.status == false){this.erro(data); return false;}
        return this.success(data.response);
    }catch(e){
        ret.erro = e.message; ret.status = false;
        this.erro();
    }
};
