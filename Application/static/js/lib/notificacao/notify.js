function CheckMessages(title, url, changeid){
    if(typeof(title) == 'undefined'){
        title = document.title.split('(');
        title = title[0];
    }

    if(typeof(msg_name) == 'undefined'){
        msg_name = $(changeid).html();
    }

    $.ajax({
        url: url,
        data:{'ajax':'true'},
        type:'post',
        dataType: 'json',
        success: function(json) {
            if(json.total == 0 || typeof json.total == 'undefined') {
                document.title = title;
                $(changeid).html(msg_name);
                return;
            }

            document.title = '('+json.total+') ' + title;
            $(changeid).html(msg_name +' ('+json.total+')');
        }
    });
}