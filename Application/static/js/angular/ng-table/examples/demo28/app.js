var filtherApp = angular.module('filtherApp', ['ngTable', 'chieffancypants.loadingBar', 'ngAnimate']);
        
filtherApp.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
});

filtherApp.filter('filtherIndicadores', [function() {
    return function(items,filter) {
        if(typeof filter === 'undefined' || filter === ""){
            return true;
        }
        //console.log(filter);
        var out   = [];
        var add   = true;
        for(var i in items){
            add = true;
            for(var f in filter){
                if(add === false){break;}
                if(typeof items[i][f] === 'undefined' || items[i][f] === ""){ add = false; break; }
                var val = parseFloat(items[i][f]);
                if(typeof filter[f].max !== 'undefined' && filter[f].max !== ""){
                    if(parseFloat(filter[f].max) < val){
                        add = false;
                        break;
                    }
                }

                if(add === false){break;}
                if(typeof filter[f].min !== 'undefined' && filter[f].min !== ""){ 
                    if(parseFloat(filter[f].min) > val){
                        add = false;
                        break;
                    }
                }
            }
            if(add === true) {
                out.push(items[i]);
            }
        }
        return out;
    };
}]);