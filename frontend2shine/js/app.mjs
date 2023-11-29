import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';

const app = new Application({
    resizeTo: window
});

document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x35654d;

app.loader.add('cardDeck', 'graphic/CardBackTemp.jpg')
    .load(startup);

function startup() {
    const { texture } = app.loader.resources.cardDeck;
    texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
    var cardDeck = new Sprite(texture);

    var cardValue = 0;
    
    const cardValueText = new Text(cardValue, {
        fontFamily: 'Arial',
        fontSize: 96,
        fill: 0x040e0f,
        align: 'right',
        //anchor: (1,1),
    });

   const hand = new PlayerBoard();

    //drawTable();

    // Center the sprite's anchor point
    cardDeck.anchor.set(0.5);
    cardDeck.scale.set(0.1);

    // Move the sprite to the center of the screen
    
    

    app.stage.addChild(cardDeck);
    app.stage.addChild(cardValueText);
    app.stage.addChild(hand);

    // Listen for animate update
    app.ticker.add(function(delta) {
        cardDeck.x = app.renderer.width / 2;
        cardDeck.y = app.renderer.height / 3;
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
function draw(item, width) {
    item.drawRoundedRect((app.renderer.width - 1100) / 2, app.renderer.height -250, 1100, 200, 30);
}


class PlayerBoard {
    borderRect;
    constructor() {
        this.borderRect = new Graphics();
        this.borderRect.lineStyle(5, 0x040e0f);
        draw(this.borderRect);
        return this.borderRect;
    }


    /*
    draw(item) {
        item.drawRoundedRect((app.renderer.width - 1100) / 2, app.renderer.height -250, 1100, 200, 30);
    }
     */
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