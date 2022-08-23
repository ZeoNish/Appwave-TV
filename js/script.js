$(document).ready(function () {
    // setHeight();

    //
    /*
    $('.sidebar__list-item').myTooltip({
        'offset': 10,
        'theme': 'anitime',
        'direction': 'right',
        // 'showArrow': 'false',
        'dinamicContent': 'true',
        'content': '<div class="pre-loader"><div class="box1"></div><div class="box2"></div><div class="box3"></div><div class="box4"></div><div class="box5"></div></div>'
    });

    $('.calendar__day').myTooltip({
        'offset': 10,
        'theme': 'anitime',
        // 'action': 'click',
        // 'showArrow': 'false',
        'dinamicContent': 'true',
        'content': ''
    });
    */

    $('.js-photon').myTooltip({
        'offset': 1,
        'showArrow': 'false',
        'theme': 'photon'
    });

    $('.js-photon-dropdown').myTooltip({
        'offset': 10,
        'action': 'click',
        // customClass: '',
        // 'showArrow': 'false',
        animateOffsetPx: 1,
        'theme': 'photon'
    });

    $( '.nav-group-item-header' ).on( "click", function() {
        const item = $(this).attr('data-title');
        $('[data-title-alfavit='+ item +']').toggleClass( 'active', '' );
        $( this ).children('span').toggleClass( 'icon-right-open icon-down-open', 'icon-right-open' );
        $('[data-title-items='+ item +']').toggle();
    });

    $( '.alfavit' ).on( "click", 'button', function() {
        const item = $(this).attr('data-title-alfavit');
        $( this ).toggleClass( 'active', '' );
        $('[data-title='+ item +']').children('span').toggleClass( 'icon-right-open icon-down-open', 'icon-right-open' );
        $('[data-title-items='+ item +']').toggle();
    });


    /*
    $( ".calendar__day" ).hover(function() {
        $( this ).fadeOut( 100 );
    });
    */

    /*
    $('.user--profile').myTooltip({
        'offset': 10,
        'theme': 'anitime',
        'direction': 'bottom',
        'dinamicContent': 'true',
        'customClass': 'mini--profile'
    });
    */

});

$(window).resize(function() {
    // setHeight();
});

function setHeight() {
    var h_contain = $('.calendar-contain').height();
    var h_title_bar = $('.title-bar').height();

    $(".calendar__days").css("height", h_contain - h_title_bar - 20);
}