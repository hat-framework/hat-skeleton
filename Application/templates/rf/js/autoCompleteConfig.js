try{
    $().ready(function() {
        function log(event, data, formatted) {
            window.location = linkAutocomplete + data.name;
        }
        
        function aplicar_rf_autocomplete(seletor, cities){
            $(seletor).each(function(){
                $(this).autocomplete(cities, {
                    minChars: 0,
                    max: 12,
                    mustMatch: true,
                    matchContains: true,
                    scrollHeight: 220,
                    formatItem: function(row, i, max) {
                        return row.to;
                    },
                    formatMatch: function(row, i, max) {
                        return row.name + " " + row.to;
                    },
                    formatResult: function(row) {
                        return row.to;
                    },
                });
            });
            $(seletor).result(log).next().click(function() {
                $(this).prev().search();
            });
        }
        aplicar_rf_autocomplete("#course", cities);
        aplicar_rf_autocomplete("#search_empresa", cities);
    });
}catch(e){console.log(e);}