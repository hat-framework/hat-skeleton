$(document).ready(function(){
    $(" .dropdown ul ").css({display: "none"}); // Opera Fix
    $(" .dropdown li").hover(function(){
        $(this).find('ul:first').css({visibility: "visible",display: "none"}).show();
    },function(){
        $(this).find('ul:first').css({visibility: "hidden"});
    });
});