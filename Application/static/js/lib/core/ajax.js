Core.ajax = function(){
    this.defaltCallback = false;
    this.dataType = "json"; 
    this.type     = 'POST';
    this.ret      = new Core.result();
    this.async    = true;
    this.urls     = "";
    this.isTest   = false;
}; 

Core.ajax.prototype.enableDefaultCallback = function(){
    this.defaltCallback = true;
};

Core.ajax.prototype.disableDefaultCallback = function(){
    this.defaltCallback = false;
};

Core.ajax.prototype.setDataType = function(type){
    this.dataType = type;
};

Core.ajax.prototype.setUrl = function(type){
    this.urls = type;
};

Core.ajax.prototype.setType = function(type){
    this.type = type;
};

Core.ajax.prototype.setAssync = function(type){
    this.async = type;
};

Core.ajax.prototype.getResponse = function(){
    return this.ret;
};

Core.ajax.prototype.defaultCallbackFunction = function(ret, context){
    var json = ret.getResponse();
    var msg  = new Core.msg();
    if(ret.getStatus()){
        if (typeof json.success != 'undefined' && json.success != '') msg.displaySuccess(json.success);
        else if(typeof json.alert != 'undefined' && json.alert != '') msg.displayAlert(json.alert);
        else msg.displayError('Dados enviados corretamente, mas sem a confirmação do servidor.');
    }else{
        if (typeof json.erro != 'undefined') displaySuccess(json.erro);
        else if(typeof json.alert != 'undefined' && json.alert != '') displayAlert(json.alert);
        else msg.displayError('Dados enviados corretamente, mas sem a confirmação do servidor.');
    }
};

Core.ajax.prototype.exCallback = function(callback, ret, context){
    try{
        if(typeof callback === 'function') {
            callback(ret, context);
        }else if(this.defaltCallback){
            this.defaultCallbackFunction(ret);
        }
    }catch(e){console.log('core.ajax: Exceção lançada no callback ' + JSON.stringify(e));}
};

Core.ajax.prototype.send = function(data, callback, context){
    
    var r  = this.ret;
    var ajax = this;
    try{
        $.ajax({
            async: this.async,
            url: this.urls,
            type: this.type,
            data: data,
            dataType: this.dataType,
            success: function(json) {
                try{
                    r.setResponse(json);
                    r.setStatus(true);
                    r.setError('Operação concluída com sucesso!');
                    ajax.ret = r;
                    ajax.exCallback(callback, r, context);
                    return r;
                }catch(e){
                    console.log('core.ajax: Erro na função ao executar a função de retorno! ' + JSON.stringify(e));
                }
            },

            error: function(erro){
                try{
                    r.setError("Erro na comunicação com o site.<hr/> Detalhes: "+erro['responseText']);
                    r.setStatus(false);
                    r.setResponse(erro);
                    ajax.r = r;
                    ajax.exCallback(callback, r, context);
                    return r;
                }catch(e){
                    console.log('core.ajax: Erro ao executar tratamento de erros! ' + e.message);
                }
            }

        });
        
    }catch(e){
        try{
            r.setError('Erro ao executar o script: ' + e.message); 
            r.setStatus(false);
            r.setException(e);
            ajax.ret = r;
            ajax.exCallback(callback, r);
            return r;
        }catch(f){
            console.log('core.ajax: Erro no tratamento de exeções! ' +JSON.stringify(f));
        }
    }
};