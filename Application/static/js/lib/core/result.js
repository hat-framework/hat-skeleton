Core.result = function(){
    this.response  = '';
    this.status    = true;
    this.error     = '';
    this.exception = '';
};

Core.result.prototype.setResponse = function(val){
    this.response = val;
};

Core.result.prototype.setStatus = function(val){
    this.status = val;
};

Core.result.prototype.setError = function(val){
    this.error = val;
};

Core.result.prototype.setException = function(val){
    this.exception = val;
    this.status    = false;
    this.message   = this.exception.message;
};

Core.result.prototype.getResponse = function(v){
    if(typeof v != 'undefined'){
        try{
            if(typeof this.response[v] != 'undefined') {
                return this.response[v];
            }
            return "";
        }catch(e){console.log(v);}
    }
    return this.response;
};

Core.result.prototype.getStatus = function(){
    return this.status;
};

Core.result.prototype.getError = function(){
    return this.error;
};

Core.result.prototype.printError = function(){
    var e = this.getError();
    try{blockUI_unwait(); blockUI_error(e);} 
    catch(e){alert(e);}
};

/**
 * Se retornar false, não ocorreram erros
 * @returns {Boolean}
 */
Core.result.prototype.printErrorIfExists = function(){
    if(!this.getStatus()){
        var e = this.getError();
        try{blockUI_unwait(); blockUI_error(e);} 
        catch(e){alert(e);}
        return true;
    }
    return false;
};

