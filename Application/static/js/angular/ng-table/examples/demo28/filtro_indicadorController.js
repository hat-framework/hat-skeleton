filtherApp.controller('filtro_indicadorController', function($scope, $http, $rootScope, cfpLoadingBar) {
    
        $scope.formValues  = {min:[], max:[], show:[]};
        $scope.indicadores = [];
        $scope.fakeIntro   = true;
        
        $scope.changeVal = function(cod){
            var min = (typeof $scope.formValues.min[cod] !== "undefined")?$scope.formValues.min[cod]:'';
            var max = (typeof $scope.formValues.max[cod] !== "undefined")?$scope.formValues.max[cod]:'';
            $rootScope.$emit("filtro_filtrar", cod, min, max);
        };

        $scope.notifyIndicadores = function(){
            var out = [];
            for(var i in $scope.indicadores){
                var temp = [];
                temp.cod    = $scope.indicadores[i].cod;
                temp.dsnome = $scope.indicadores[i].dsnome;
                out.push(temp);
            }
            $rootScope.$emit("filtro_indicadores", out);  
        };

        $scope.toggle = function(cod){
            if(typeof $scope.formValues.show[cod] === 'undefined' || $scope.formValues.show[cod] === false){
                $scope.formValues.show[cod] = true;
            }
            else {$scope.formValues.show[cod] = false;}
            $rootScope.$emit("filtro_toggle", cod, $scope.formValues.show[cod]);
        };
       
        $scope.init = function(){
            cfpLoadingBar.start();
            var url = '/static/js/plugins/filtro/indicador.js';
            $http({method: 'GET', url: url}).success(function(data) {
                $scope.indicadores = data;
                $scope.notifyIndicadores();
                cfpLoadingBar.complete();
                console.log(data);
                $scope.fakeIntro = false;
            });
        }();
});