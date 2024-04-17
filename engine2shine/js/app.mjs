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

//var newGameButton = new Rectangle(0, 0, 100, 100, 5);

var buttonContainer = new Graphics()
    .beginFill(0xCCCCCC)
    .lineStyle(5, 0xCCCCCC)
    .drawRoundedRect((app.renderer.width) / 2, 0, 100, 100, 5);


//buttonContainer.on('pointerdown', function() {console.log(42);});

var newGameButtonText = new Text("Start new Game!", {
    fontFamily: 'Arial',
    fontSize: 32,
    fill: 0x040e0f,
    align: 'right',
    //anchor: (1,1),
});

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
    cardValue = 0;
    var cardDeck = new Array();
    console.log("Deck: " + cardDeck.length);
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
    
    console.log("Hand: " + playerCards.length);

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
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {drawCard(playerCards, hand);}); // mouse-only
    cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {newGame(playerCards, cardDeck);}); // mouse-only
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {cardDeck[cardDeck.length-1].sprite.y -= 50; playerCards.push(cardDeck[cardDeck.length-1]); cardDeck.pop(); console.log("Deck:"+cardDeck.length); console.log("Playercards:"+playerCards.length);}); // mouse-only
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {drawCard(playerCards, cardDeck); app.stage.addChild(playerCards[playerCards.length-1].sprite); console.log(playerCards.length);}); // mouse-only

    for (let i = 0; i < playerCards.length; i++) {
        app.stage.addChild(playerCards[i].sprite);
    }

    for (let i = 0; i < 10; i++) {
        app.stage.addChild(cardDeck[i].sprite);
    }

    //app.stage.addChild(playerCards[0].bunny);
    app.stage.addChild(buttonContainer);
    app.stage.addChild(cardValueText);
    app.stage.addChild(hand.obj);

    // Listen for animate update

    gameStart(playerCards, hand, cardValue);
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
async function drawCard(playerHand, hand) {
    console.log("Punktzahl auf der Hand: " + cardValue);
    if (playerHand.length < 8 && cardValue < 21) {
        //playerHand.push(new Card(hand.x + 30, hand.y));
        playerHand.push(new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 3));
        //playerHand[playerHand.length-1].sprite.x += playerHand[playerHand.length-1].sprite.width * (playerHand.length - 1);
        drawCardAnimation(playerHand[playerHand.length-1], hand, playerHand.length-1)
        app.stage.addChild(playerHand[playerHand.length-1].sprite)
        cardValue += playerHand[playerHand.length-1].value;
        console.log("Gezogene Karte: " + playerHand[playerHand.length-1].value);
        if (cardValue > 21) {
            for (let i = 0; i < playerHand.length; i++) {
                if (playerHand[i].value == 11) {
                    playerHand[i].value = 1;
                    cardValue -= 10;
                    break;
                }
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
    console.log("Neuer Punktestand: " + cardValue);
}

async function drawCardAnimation(playerCard, hand, length) {
    while (playerCard.sprite.x != hand.x+30+playerCard.sprite.width*length || playerCard.sprite.y != hand.y) {
        await new Promise(r => setTimeout(r, 5));
        playerCard.sprite.x -= (playerCard.sprite.x-(hand.x+30+playerCard.sprite.width*length))/10;
        playerCard.sprite.y -= (playerCard.sprite.y-hand.y)/10;
    }
}

async function gameStart(playerCards, hand, cardValue) {
    await new Promise(r => setTimeout(r, 500));
    drawCard(playerCards, hand, cardValue);
    await new Promise(r => setTimeout(r, 500));
    drawCard(playerCards, hand, cardValue);

}

function newGame(cards, deck) {
    for (let i = 0; i < cards.length; i++) {
        app.stage.removeChild(cards[i].sprite);
    }

    for (let i = 0; i < 10; i++) {
        app.stage.removeChild(deck[i].sprite);
    }
    startup();
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