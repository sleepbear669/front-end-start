/**
 * Created by sleepbear on 2015-04-30.
 */
$(document).ready(function(){
    var $board = $('#board');
    var boxColor = ["white", "black"];
    var previousBox = null;
    for( var i = 0 ; i < 4 ; i++)
        for(var j = 0 ; j<4 ;j++)
                $board.append( $("<div>").addClass( "box " + boxColor[(i+j)%2] ) );
    $board.click(function(event){
        var $target = $(event.target);
        if(previousBox !== null){
            previousBox.toggleClass("red");
        }
        previousBox = $target.toggleClass("red");
    });
    console.log("Hello World");
});