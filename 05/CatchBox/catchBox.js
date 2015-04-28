/**
 * Created by sleepbear on 2015-04-23.
 */
$( document ).ready(function() {
    $(".container").height($(window).innerHeight());
    var $box = $("<div>")
        .attr("id", "game_box")
        .height(30)
        .width(30)
        .appendTo("#game_screen");
    console.log($box);
});

