$(document).ready(function(){
    $('.description-hover').on('mouseover', function(){
        var desc = $(this).parent().children('.description-text');
        if(!desc.hasClass('active')){desc.fadeIn('fast');}
    });

    $('.description-hover').on('mouseleave', function(){
        var desc = $(this).parent().children('.description-text');
        if(!desc.hasClass('active')){desc.fadeOut('fast');}
    });

    $('.description-hover').on('click', function(){
        var desc = $(this).parent().children('.description-text');
        if(!desc.hasClass('active')) {
            $('.description-text').removeClass('active');
            desc.addClass('active');
            $('.description-text').each(function(){
                if(!$(this).hasClass('active')){ $(this).fadeOut('fast');}
            });
            desc.fadeIn('fast');
        }
        else{ desc.removeClass('active'); }
    });
});
