$('document').ready(() => {
    console.log('Mod ready');

    $('.mod-list-li-1')
        .mouseenter(() => {
            console.log('over');
            $('.before-1').css("background", "url(./sprite1.png) 0 8px");
            $('.mod-list-li-1 a').css('color', 'red');
            $('.mod-list-li-1 .after').css("background", "url(./sprite1.png) -298px -216px");
        })
        .mouseleave(() => {
            console.log('out');
            $('.before-1').css("background", "url(./sprite1.png) 0px -70px");
            $('.mod-list-li-1 a').css('color', 'black');
            $('.mod-list-li-1 .after').css("background", "url(./sprite1.png) -298px -196px");
        });

    $('.mod-list-li-2')
        .mouseenter(() => {
            console.log('over');
            $('.before-2').css("background", "url(./sprite1.png) 365px 8px");
            $('.mod-list-li-2 a').css('color', 'red');
            $('.mod-list-li-2 .after').css("background", "url(./sprite1.png) -298px -216px");
        })
        .mouseleave(() => {
            console.log('out');
            $('.before-2').css("background", "url(./sprite1.png) 365px -70px");
            $('.mod-list-li-2 a').css('color', 'black');
            $('.mod-list-li-2 .after').css("background", "url(./sprite1.png) -298px -196px");
        });
    $('.mod-list-li-3')
        .mouseenter(() => {
            console.log('over');
            $('.before-3').css("background", "url(./sprite1.png) 178px 8px");
            $('.mod-list-li-3 a').css('color', 'red');
            $('.mod-list-li-3 .after').css("background", "url(./sprite1.png) -298px -216px");
        })
        .mouseleave(() => {
            console.log('out');
            $('.before-3').css("background", "url(./sprite1.png) 178px -70px");
            $('.mod-list-li-3 a').css('color', 'black');
            $('.mod-list-li-3 .after').css("background", "url(./sprite1.png) -298px -196px");
        });
    $('.mod-list-li-4')
        .mouseenter(() => {
            console.log('over');
            $('.before-4').css("background", "url(./sprite1.png) 265px 8px");
            $('.mod-list-li-4 a').css('color', 'red');
            $('.mod-list-li-4 .after').css("background", "url(./sprite1.png) -298px -216px");
        })
        .mouseleave(() => {
            console.log('out');
            $('.before-4').css("background", "url(./sprite1.png) 265px -70px");
            $('.mod-list-li-4 a').css('color', 'black');
            $('.mod-list-li-4 .after').css("background", "url(./sprite1.png) -298px -196px");
        });
    $('.mod-list-li-5')
        .mouseenter(() => {
            console.log('over');
            $('.before-5').css("background", "url(./sprite1.png) 61px 8px");
            $('.mod-list-li-5 a').css('color', 'red');
            $('.mod-list-li-5 .after').css("background", "url(./sprite1.png) -298px -216px");
        })
        .mouseleave(() => {
            console.log('out');
            $('.before-5').css("background", "url(./sprite1.png) 61px -70px");
            $('.mod-list-li-5 a').css('color', 'black');
            $('.mod-list-li-5 .after').css("background", "url(./sprite1.png) -298px -196px");
        });

});