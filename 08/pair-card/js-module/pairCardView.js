/**
 * Created by sleepbear on 2015-06-04.
 */
(function($, global, app){
    app.render = function(){
        var $cardBox = $("#card_box");
        for(var i in this.cardDeck) {
            $cardBox.append($("<div>").addClass("card"));
        }
    }
})(jQuery, Window, cardContainer);