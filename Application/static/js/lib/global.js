function getSiteURL() {
    return window.location.protocol+"//"+window.location.host+"/";
};

function isNotEmpty(array, index){
    return (typeof(array[index]) !== 'undefined' && array[index] !== "");
};

function isUndefined(item){
    return (typeof item=== 'undefined');
};