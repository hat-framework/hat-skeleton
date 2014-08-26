filtherApp.controller('filtro_acoesController',function($scope,$http, $rootScope, $filter, cfpLoadingBar) {
        $scope.indicadores = [];
        $scope.filtros     = [];
        $scope.hideCol     = [];
        $scope.fakeIntro   = true;
        $scope.predicate   = '';
        $scope.reverse     = false;
        $scope.pagesize    = 10;
        $scope.total       = 0;
        $scope.atual       = 1;
        $scope.all         = [];
        $scope.lstipo      = 2;
        $scope.search      = "";
        $scope.ordenar = function (orderProp) {
            
            if($scope.predicate === orderProp){
                $scope.reverse = !$scope.reverse;
            }else{$scope.reverse = false;}
            $scope.predicate = orderProp;
            
            $scope.acoes.sort(function(a, b){
                if(typeof a[$scope.predicate] === 'undefined' && typeof b[$scope.predicate] === 'undefined'){return 0;}
                if(typeof a[$scope.predicate] === 'undefined'){return -1;}
                if(typeof b[$scope.predicate] === 'undefined'){return 1;}

                if($scope.predicate === '0'){
                    var str1 = new String( a[$scope.predicate] );
                    var str2 = new String( b[$scope.predicate] );
                    return str1.localeCompare(str2) ;
                }

                var v = parseFloat(a[$scope.predicate] ) - parseFloat(b[$scope.predicate]);
                if(v !== 0) return v;
                var str1 = new String( a[0] );
                var str2 = new String( b[0] );
                return str2.localeCompare(str1) ;
            });
            if($scope.reverse){
                $scope.acoes.reverse();
            }
            
        };

        $scope.start = function() {
            cfpLoadingBar.start();
        };

        $scope.complete = function () {
            cfpLoadingBar.complete();
        };
        
        $scope.calculaPaginas = function(pageNumber){
            pageNumber        = (typeof pageNumber === 'undefined')?1:pageNumber;
            $scope.pages      = Math.ceil($scope.total/$scope.pagesize)-1;
            $scope.atual      = pageNumber;
        };

        $scope.setPage = function (pageNumber) {
            if(pageNumber <= 0)return;
            if(pageNumber > $scope.pages)return;
            $scope.atual = pageNumber;
            var i        = pageNumber * $scope.pagesize;
            var max      = i + $scope.pagesize;
            $scope.acoes = $scope.all[$scope.lstipo].slice(i, max);
            $scope.calculaPaginas(pageNumber);
        };

        $rootScope.$on('filtro_indicadores', function(ev, indicadores){
            $scope.indicadores = indicadores;
            $scope.indicadores.unshift({cod:'0', dsnome:"Ação"});
            $scope.hideCol[0]  = true;
            $scope.hideCol[14] = true;
            $scope.hideCol[15] = true;
            $scope.hideCol[16] = true;
        });

        $rootScope.$on('filtro_filtrar', function(ev, cod, min, max){
            $scope.filtros[cod] = {min:min, max:max};
            $scope.page         = 1;
        });

        $rootScope.$on('filtro_toggle', function(ev, cod, value){
            $scope.hideCol[cod] = value;
        });

        $scope.$watch('filtros', function() {
            
        }, true);
        
        $scope.$watch('pagesize', function() {
            $scope.calculaPaginas();
        }, true);
        
        $scope.$watch('lstipo', function() {
            $scope.acoes = $scope.all[$scope.lstipo];
        }, true);
        
        $scope.$watch('search', function() {
            $scope.page = 1;
        }, true);
        
        $scope.$watch('atual', function() {
            if($scope.atual > $scope.pages){
                $scope.atual = $scope.pages;
            }
            
            if($scope.atual < 1){
                $scope.atual = 1;
            }
        }, true);
        
        /*$scope.$watchCollection('all', function (array) {
            $scope.acoes = $filter('filter')(array, $scope.search);
        });*/
        
        $scope.init = function(){
            $scope.start();
            var url = '/static/js/plugins/filtro/acoes.js';
            $http({method: 'GET', url: url}).success(function(data) {
                $scope.acoes      = data[$scope.lstipo];
                $scope.all        = data;
                $scope.ordenar('0');
                $scope.total      = $scope.acoes.length;
                $scope.calculaPaginas();
                $scope.complete();
                $scope.fakeIntro = false;
            });
        }();

});