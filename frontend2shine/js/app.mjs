import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';
import { Card } from './Card.mjs';
import { PlayerBoard } from './PlayerBoard.mjs';

const app = new Application({
    resizeTo: window
});

document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x35654d;
app.renderer.resize(app.renderer.width-20, app.renderer.height-20);


app.loader.add('cardDeck', 'graphic/CardBackTemp.jpg')
    .load(startup);

var cardValue = 0;

var cardValueText = new Text(cardValue, {
    fontFamily: 'Arial',
    fontSize: 96,
    fill: 0x040e0f,
    align: 'right',
    //anchor: (1,1),
});

function startup() {
    /*
    const { texture } = app.loader.resources.cardDeck;
    texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;

     */
    var cardDeck = new Array();
    for (let i = 0; i < 10; i++) {
        cardDeck[i] = new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 3);
        cardDeck[i].sprite.interactive = true;
        cardDeck[i].sprite.cursor = 'pointer';
        cardDeck[i].sprite.eventMode = 'static';
    }
    //var cardDecks = new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 3);
    //cardDeck.sprite.interactive = true;
    //cardDeck.sprite.cursor = 'pointer';

    var playerCards = new Array();

   const hand = new PlayerBoard(
       (app.renderer.width - 1100) / 2,
       app.renderer.height -250,
       1100,
       200,
       30
   );

    //drawTable();

    // Center the sprite's anchor point
    //cardDeck.anchor.set(0.5);
    //cardDeck.scale.set(0.1);

    // Move the sprite to the center of the screen
    //cardDeck.sprite.on('pointerdown', drawCard(hand, playerCards));
    cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {drawCard(playerCards, hand, cardValue);}); // mouse-only
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {cardDeck[cardDeck.length-1].sprite.y -= 50; playerCards.push(cardDeck[cardDeck.length-1]); cardDeck.pop(); console.log("Deck:"+cardDeck.length); console.log("Playercards:"+playerCards.length);}); // mouse-only
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {drawCard(playerCards, cardDeck); app.stage.addChild(playerCards[playerCards.length-1].sprite); console.log(playerCards.length);}); // mouse-only

    drawCard(playerCards, hand, cardValue);
    drawCard(playerCards, hand, cardValue);

    for (let i = 0; i < playerCards.length; i++) {
        app.stage.addChild(playerCards[i].sprite);
    }

    for (let i = 0; i < 10; i++) {
        app.stage.addChild(cardDeck[i].sprite);
    }

    //app.stage.addChild(playerCards[0].bunny);
    app.stage.addChild(cardValueText);
    app.stage.addChild(hand.obj);

    // Listen for animate update
    app.ticker.add(function(delta) {
        /*
        for (let i = 0; i < playerCards.length; i++) {
            drawCardAnimation(playerCards[i], hand);
            console.log(playerCards[i].sprite.x);
        }
        */
        cardValueText.x = app.renderer.width - 150;
        cardValueText.y = app.renderer.height - 150;
        cardValueText.text = cardValue;
        
        
    });
}
/*
function gameStart() {

}

function drawTable() {
    const handContainer = new Container();
    const playerHandBorder = new Graphics();
    playerHandBorder.drawRoundedRect(app.renderer.width / 2, app.renderer.height -100, 500, 100, 30);
    playerHandBorder.backgroundColor = 0x040e0f;
    handContainer.addChild(playerHandBorder);
    app.stage.addChild(handContainer);
}
*/
function drawCard(playerHand, hand) {
    console.log(cardValue);
    if (playerHand.length < 8 && cardValue <= 21) {
        playerHand.push(new Card(hand.x + 30, hand.y));
        playerHand[playerHand.length-1].sprite.x += playerHand[playerHand.length-1].sprite.width * (playerHand.length - 1);
        app.stage.addChild(playerHand[playerHand.length-1].sprite)
        cardValue += playerHand[playerHand.length-1].value;
    }
    console.log(playerHand[playerHand.length-1].value);
    if (cardValue > 21) {
        for (let i = 0; i < playerHand.length; i++) {
            if (playerHand[i].value == 11) {
                playerHand[i].value = 1;
                cardValue -= 10;
                break;
            }
        }
    }
    /*
    if (cardValue > 21) {
        cardValueText = new Text(cardValue, {
            fontFamily: 'Arial',
            fontSize: 96,
            fill: 0xff0000,
            align: 'right',
            //anchor: (1,1),
        });
    }
    */
    console.log(cardValue);
}

function drawCardAnimation(playerCard, hand) {
    while (playerCard.sprite.x != hand.x && playerCard.sprite.y != hand.y) {
        playerCard.sprite.x -= 1;
        playerCard.sprite.y -= 1;
    }
}



/*
class Account {
    constructor(username, email) {
        this.username = username;
        this.account_id = 42;
        this.email = email;
        this.highscore = 42;
        this.friends = [];
    }
}

class Player extends Account {
    constructor() {
        super();
    }

}

class BlackJackPlayer extends Player {
    constructor() {
        super();
        this.hand = [];
    }
}

class HighscoreTable {
    constructor() {
        this.highest_score = [];
    }
}

class GameRoom {
    constructor(players) {
        this.room_id = 42;
        this.players = [];
        this.game = "";
    }
}

class Game {
    constructor() {
        this.name = " ";
        this.set_of_rules = [];
    }

}

class BlackJack extends Game {
    constructor() {
        super();
        this.cards = [];
    }

}
 */