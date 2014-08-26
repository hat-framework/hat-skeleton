function fkn1(model, input, pkref, pkey, refcamp, url, pkvalue){
    this.model    = model;
    this.input    = input;
    this.pkey     = pkey;
    this.pkref    = pkref;
    this.refcamp  = refcamp;
    this.pkvalue  = pkvalue;
    this.url      = url;
    //console.log("model, input, pkref, pkey, refcamp, url\n");
    //console.log(arguments);
    this.mdEdit   = '.edit';
    this.mdDrop   = '.apagar';
    this.mdApagar = '.fkremove'; 
    this.mdd      = model.replace('/', '_');
};

fkn1.prototype.bind = function(data){
    var self = this;
    $('#'+this.mdd+' tbody tr:first').hide();
    $('#'+this.mdd+' '+this.mdEdit).hide();

    //console.log(JSON.stringify(data));
    $(this.input+' .fkadd').on('click', function(ev){
        ev.preventDefault();
        self.add($(this));
    });

    $(this.input + " input, "+ this.input + " select, "+ this.input + " textarea").on('change', function(){
        self.update($(this));
    });

    $('td '+this.mdDrop).each(function(){
        $(this).removeClass('apagar').addClass('fkremove');
    });
    
    $(this.mdApagar).on('click', function(ev){
        ev.preventDefault();
        self.drop($(this));
    });
    
    for(var i in data){
        this.fillElements(data[i]);
    }
};

fkn1.prototype.addHiddenKey = function(tr){
    if(typeof tr.find(this.refcamp).val() === 'undefined'){
        var name = this.refcamp.replace("#","");
        tr.append("<input type='hidden' value='"+this.pkvalue+"' name='"+name+"'/>");
    }
};

fkn1.prototype.add = function(elm){
    //console.log(this.pkref + " - " + this.model + " - " + this.refcamp +" - " + this.mdEdit);
    var first = elm.parents('.form_item').find('tbody').find('tr:first');
    var tr    = first.clone(true,true);

    var v     = elm.parents('form').find(this.pkref).val();
    if(typeof v === 'undefined') v = this.pkvalue;
    this.addHiddenKey(tr);
    tr.find(this.refcamp).val(v);
    

    tr.find(this.mdEdit).attr('href','#/'+this.model+'/formulario');
    tr.slideDown('fast');
    //elm.parents('.form_item').find('tbody').prepend(tr);
    tr.insertAfter(first);
};

fkn1.prototype.update = function(elm){
    var link = elm.parents('tr').find(this.mdEdit);
    var u    = link.attr('href').split('#/');
    var url  = this.url + u[1];
    var tr   = link.parents('tr');
    var data = tr.find(':input').serialize();
    //console.log(data);
    var ajax = new Core.ajax();
    ajax.setUrl(url);
    ajax.send(data+'&ajax=true', function(resp, contx){
        if(resp.getStatus()){
            var json = resp.getResponse();
            if(json.status !== 1){
                if (typeof json.erro !== 'undefined') {
                    blockUI_error(json.erro);
                }
                else if(typeof json.alert !== 'undefined' && json.alert !== '') blockUI_alert(json.alert);
                else blockUI_error('Dados enviados corretamente, mas sem a confirmação do servidor.');
            }else{
                var id = json.id;
                if(typeof json.id !== 'string'){
                    id = "";
                    for(var i in json.id){
                        id += json.id[i]+"/";
                    }
                }
                if (typeof json.id !== 'undefined'){
                    var url = '#/'+contx.model+'/edit/'+id;
                    link.attr('href', url);
                }

                if (link.parents('.tabela').find('.apptable').length === 0){
                    link.parents('.tabela')
                        .prepend('<div id=\"success\" class=\"apptable container-msg success\">Modificações salvas Corretamente!</div>')
                        .find('.apptable')
                        .delay(2500)
                        .fadeOut();
                }else{
                    link.parents('.tabela').find('.apptable').fadeIn().delay(2500).fadeOut();
                }
            }
        }else{
            var erro = resp.getErro();
            blockUI_error('Erro na comunicação com o site.<hr/> Detalhes: '+erro['responseText']);
        }
    }, this);
};

fkn1.prototype.drop = function(elm){
    var u   = elm.attr('href').split('#/');
    var url = this.url + u[1];
    var tr  = elm.parents('tr:first');
    tr.slideUp('slow');
    
    var ajax = new Core.ajax();
    ajax.setUrl(url);
    ajax.send({ajax:true}, function(resp, tr){
        if(resp.getStatus()){
            var json = resp.getResponse();
            if(json.status !== 1){
                tr.slideDown('slow');
                if (typeof json.erro !== 'undefined') blockUI_error(json.erro);
                else if(typeof json.alert !== 'undefined' && json.alert !== '') blockUI_alert(json.alert);
                else blockUI_error('Dados enviados corretamente, mas sem a confirmação do servidor.');
            }
            else{tr.remove();}
        }else{
            var erro = resp.getErro();
            blockUI_error('Erro na comunicação com o site.<hr/> Detalhes: '+erro['responseText']);
        }
    }, tr);
};

fkn1.prototype.fillElements = function(data){
    var first = $('#'+this.mdd+' tbody tr:first');
    var tr    = first.clone(true, true);
    var id    = this.id2string(data);
    tr.find(this.mdEdit).attr('href','#/'+this.model+'/edit/'+id);
    tr.find(this.mdApagar).attr('href','#/'+this.model+'/apagar/'+id);
    for(var i in data){
        if(typeof data['__'+i] !== 'undefined'){
            data[i] = data['__'+i];
        }
        tr.find('#'+i).val(data[i]);
    }
    this.addHiddenKey(tr);
    tr.show();
    tr.insertAfter(first);
};

fkn1.prototype.id2string = function(data){
    var id = '';
    if(typeof data[this.pkey] === 'undefined'){
        var i2 = '';
        for(var i in this.pkey){
            i2 = "__"+this.pkey[i];
            id += ((typeof data[i2] !== 'undefined')?data[i2]:data[this.pkey[i]])+"/";
        }
    }else{id = data[this.pkey];}
    return id;
};
