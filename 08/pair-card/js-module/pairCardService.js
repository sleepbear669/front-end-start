/**
 * Created by sleepbear on 2015-06-04.
 */
(function ($, app){
    app.setCard = function(){
        for(var i = 0 ; i<app.row*app.column; i++){
            app.cardDeck[i] = $.extend({},card);
        }
    };
    app.selectColor = function(){
        this.cardColor = cardColor().slice(0,this.totalCard()/2);
    };
    app.shuffle = function(){
        this.selectColor();
        for(var i in this.cardDeck){
            this.cardDeck[i].class = this.cardColor[parseInt(i%this.totalCard()/2)];
        }
        this.cardDeck.sort(function () {
            return 0.5 * Math.random()
        });
    };
    app.makeCardDeck = function(){
        this.setCard();
        this.selectColor();
        this.shuffle();
    }

})(jQuery, cardContainer);