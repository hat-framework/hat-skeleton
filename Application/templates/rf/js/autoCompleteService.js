try{
    $().ready(function() {
        function loger(event, data, formatted) {
            window.open (linkacao + data.name, "mywindow","WIDTH=333, HEIGHT=333");
        }
        
        function aplicar_service_autocomplete(seletor, searchacao){
            $(seletor).each(function(){
                $(this).autocomplete(searchacao, {
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
            $("#search_cotacao").result(loger).next().click(function() {
                $(this).prev().search_cotacao();
            });
        }
        aplicar_service_autocomplete("#search_cotacao", searchacao);
    });
}catch(e){console.loger(e);}