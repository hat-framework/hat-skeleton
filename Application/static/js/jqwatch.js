jQuery.fn.watch = function( id, fn ) {
 
    return this.each(function(){
 
        var self = this;
 
        var oldVal = self[id];
        $(self).data(
            'watch_timer',
            setInterval(function(){
                if (self[id] !== oldVal) {
                    fn.call(self, id, oldVal, self[id]);
                    oldVal = self[id];
                }
            }, 100)
        );
 
    });
 
    return self;
};
 
jQuery.fn.unwatch = function( id ) {
 
    return this.each(function(){
        clearInterval( $(this).data('watch_timer') );
    });
 
};

jQuery.fn.valuechange = function(fn) {
    return this.bind('valuechange', fn);
};
 
jQuery.event.special.valuechange = {
 
    setup: function() {
 
        jQuery(this).watch('value', function(){
            jQuery.event.handle.call(this, {type:'valuechange'});
        });
 
    },
 
    teardown: function() {
        jQuery(this).unwatch('value');
    }
 
};