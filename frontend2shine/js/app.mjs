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
        fontSize: 48,
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
        hand.drawRoundedRect(app.renderer.width / 2, app.renderer.height / 2, 500, 100, 30);
        cardDeck.x = app.renderer.width / 2;
        cardDeck.y = app.renderer.height / 3;
        cardValueText.x = app.renderer.width - 100;
        cardValueText.y = app.renderer.height - 100;
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
class PlayerBoard {
    constructor() {
        //const handContainer = new Container();
        const playerHandBorder = new Graphics();
        playerHandBorder.drawRoundedRect(app.renderer.width / 2, app.renderer.height / 2, 500, 100, 30);
        playerHandBorder.backgroundColor = 0x040e0f;
        //handContainer.addChild(playerHandBorder);
        return playerHandBorder;
    }
}
