import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';

const app = new Application({
    resizeTo: window
});

document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x35654d;
app.renderer.resize(app.renderer.width-20, app.renderer.height-20);


app.loader.add('cardDeck', 'graphic/CardBackTemp.jpg')
    .load(startup);

var cardValue = 0;

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
    
    var cardValueText = new Text(cardValue, {
        fontFamily: 'Arial',
        fontSize: 96,
        fill: 0x040e0f,
        align: 'right',
        //anchor: (1,1),
    });

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
    //cardDeck[cardDeck.length].sprite.on('pointerdown', function() {drawCard(hand, playerCards, cardValue); app.stage.addChild(playerCards[playerCards.length-1].sprite);}); // mouse-only
    cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {cardDeck[cardDeck.length-1].sprite.y -= 50; playerCards.push(cardDeck[cardDeck.length-1]); cardDeck.pop();}); // mouse-only


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
function drawCard(handBorder, playerHand) {

    playerHand.push(new Card(handBorder.x + 130 * playerHand.length, handBorder.y));
    cardValue += playerHand[playerHand.length-1].value;
}

class PlayerBoard {
    obj;

    constructor(x, y, width, height, radius) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.obj = new Graphics();
        this.obj.lineStyle(5, 0x040e0f);
        this.draw()
        //draw(this.borderRect, this.x, this.y, this.width, this.height, this.radius);
        return this;
    }

    draw() {
        this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

class Card {

    constructor(x, y) {
        this.sprite = Sprite.from('graphic/CardBackTemp.jpg');
        this.width = 130;
        this.height = 200;
        this.radius = 30;
        this.x = x;
        this.y = y;
        this.value = 5;
        this.draw();
        return this;
    }

    draw() {
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.width = this.width;
        this.sprite.height = this.height;

        //this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }

    getWidth() {
        return this.width;
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

class Card {
    constructor(value, symbol) {
        this.value = value;
        this.symbol = symbol;
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