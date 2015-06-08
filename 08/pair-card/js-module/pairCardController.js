/**
 * Created by sleepbear on 2015-05-18.
 */
(function ($, app){
    app.reversCard = {
        count : 0,
        cardIndex : [],
        cardElement : []
    };
    app.clickCard = function(card){
        var index = card.index();
        if(app.reversCard.count < 2) {
            var cardCount = app.reversCard.count++;
            app.reversCard.cardIndex[cardCount] = index;
            app.reversCard.cardElement[cardCount] = card;
            card.addClass(app.cardDeck[index].class);
            if(app.reversCard.count  == 2) {
                setTimeout(app.cardMatch, 1000)
            }
        }
    };
    app.cardMatch = function(){
        var cardIndex = app.reversCard.cardIndex;
        var card1 = app.cardDeck[cardIndex[0]];
        var card2 = app.cardDeck[cardIndex[1]];
        var reversCard = app.reversCard.cardElement;
        if(app.isCardMatch(card1, card2)){
            reversCard[0].addClass("match");
            reversCard[1].addClass("match");
            app.reversCard.count = 0;
        }else{
            reversCard[0].removeClass(card1.class);
            reversCard[1].removeClass(card2.class);
            app.reversCard.count = 0;
        }
    }
    app.isCardMatch = function(card1, card2){

        if(card1.class == card2.class) {
            return true;
        }else return false;
    }
})(jQuery, cardContainer);