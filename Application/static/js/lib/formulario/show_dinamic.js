/**
 * 
 * @param {json} elements if elements is not null then they are setted
 * @returns {show_dinamic}
 */
function show_dinamic(elements){
    this.elms  = {};
    if(typeof elements !== 'undefined'){
        this.set(elements);
    }
};

show_dinamic.prototype.set = function(arr){
    for(var target in arr){
        for(var id in arr[target]){
            this.add(id, target, arr[target][id]);
        }
    }
}

show_dinamic.prototype.add = function(id, target, arr){
    if(typeof this.elms[target] === 'undefined'){
        this.elms[target] = {};
    }
    this.elms[target][id] = arr;
};

show_dinamic.prototype.bindAll = function(){
    for(var target in this.elms){
        this.bind(target);
    }
};

show_dinamic.prototype.bind = function(target){
    this.visible(target);
    this.change(target);
};

show_dinamic.prototype.visible = function(target){
    var self = this;
    if(typeof(self.elms[target]) === 'undefined') return;
    $('.'+target).each(function(){ 
        if($(this).is(':visible')) {
            var elm = $(this);
            for(var id in self.elms[target]){
                var jqarr = self.elms[target][id];
                if(jQuery.inArray(elm.val(), jqarr) === -1){
                    elm.parents('form:first').find('#'+id+':first').addClass('ishidden').hide(); 
                };
            }
        } 
    });
};

show_dinamic.prototype.change = function(target){
    var self = this;
    $('.'+target).on('change', function(){ 
        for(var id in self.elms[target]){
            var jqarr = self.elms[target][id];
            if(jQuery.inArray($(this).val(), jqarr) !== -1){
                $(this).parents('form:first').find('#'+id+':first').addClass('ishidden').slideDown('fast');
            }else{
                $(this).parents('form:first').find('#'+id+':first').removeClass('ishidden').slideUp('fast');
            }
        }
    });
};