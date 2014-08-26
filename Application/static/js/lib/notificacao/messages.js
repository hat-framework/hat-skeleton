function message_json(json, time){
    if(typeof json.erro    !== 'undefined') message_send('erro'   , json.erro   , time);
    if(typeof json.success !== 'undefined') message_send('success', json.success, time);
    if(typeof json.alert   !== 'undefined') message_send('alert'  , json.alert  , time);
    if(typeof json.info    !== 'undefined') message_send('info'   , json.info   , time);
    if(typeof json.popup   !== 'undefined') message_send('popup'  , json.popup  , time);
}

function message_send(type, message, time){
    if(message === '') return;
    time = (typeof time !== 'undefined')?time:0;
    message_display($('#messages').children('#'+type), message);
    if(!isNaN(time) && time > 0){
        setTimeout(function(type) {
            message_hide($('#messages').children('#'+type));
        }, time, type);
    }
}

function message_erro(message, time)   {message_send('erro'   , message, time);}
function message_success(message, time){message_send('success', message, time);}
function message_alert(message, time)  {message_send('alert'  , message, time);}
function message_info(message, time)   {message_send('info'   , message, time);}
function message_popup(message, time)  {message_send('popup'  , message, time);}

function message_display(elm, message){
    elm.find('.content-msg').html(message); 
    elm.slideDown(400);
}

function message_hide(elm){
    elm.find('.content-msg').html(''); 
    elm.slideUp(400);
}

function message_close(type, time){
    if(typeof time === 'undefined') time = 0;
    setTimeout(function(type) {
        message_hide($('#messages').children('#'+type));
    }, time, type);
}

function message_close_error()  {message_close('erro'   , 400);}
function message_close_success(){message_close('success', 400);}
function message_close_alert()  {message_close('alert'  , 400);}
function message_close_info()   {message_close('info'   , 400);}
function message_close_popup()  {message_close('popup'  , 400);}


$(document).ready(function(){
    $('#messages a.close').on('click', function(){
        message_hide($(this).parent());
    });

    $('#messages .content-msg').each(function(){
        if($(this).html() !== ''){ 
            message_display($(this).parent());
        }
    });
});