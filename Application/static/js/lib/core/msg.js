Core.msg = function(){};
Core.msg.prototype.displayError = function(v){
    this.displayMsg('erro', v);
}

Core.msg.prototype.displaySuccess = function(v){
    this.displayMsg('success', v);
}

Core.msg.prototype.displayAlert = function(v){
    this.displayMsg('alert', v);
}

Core.msg.prototype.displayPopUp = function(v){
    this.displayMsg('popup', v);
}

Core.msg.prototype.displayMsg = function(target, v){
    try{
        var msg = '';
        if(typeof(v) == 'object' || typeof(v) == 'undefined'){
            if(typeof(v[target]) == 'undefined'){
                console.log('Variável indefinida em Core.msg.displayMsg(error)');
                return;
            } 
            msg = v[target];
        }else msg = v;
        $('#'+target).html(msg).slideDown(500, function(){
            $(this).delay(4000).slideUp(500);
        });
    }catch(e){
       console.log('Exceção lançada em Core.msg.displayMsg(error): ' + JSON.stringify(v));
    }
}