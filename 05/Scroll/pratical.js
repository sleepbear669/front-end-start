/**
 * Created by sleepbear on 2015-04-23.
 */
var $body = $(document.body);
var $top = "";

$top = $('<div>')
    .addClass('top')
    .hide()
    .click(function(){
        $body.animate({scrollTop:0},1000)
    })
    .appendTo($body);

$(window).scroll(function () {
    var y = $(this).scrollTop();
    if(y >= 100) {
        $top.fadeIn();
    }else
        $top.fadeOut();
});