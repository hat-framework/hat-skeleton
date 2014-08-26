Core.dom = function(){};
Core.dom.prototype.hide = function(item, speed){
    if(typeof speed == 'undefined') speed = "1500";
    item.slideUp(speed);
}
Core.dom.prototype.show = function(item, speed){
    if(typeof speed == 'undefined') speed = "1500";
    item.slideDown(speed);
}