function html(){}
html.prototype.exception = function(e){
    var msg = 'Unamed Exception';
    if(typeof e.message !== 'undefined') msg = e.message;
    console.log(msg);
};