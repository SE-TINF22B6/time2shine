import { Application, Sprite, SCALE_MODES } from "./pixi.mjs";

const app = new Application({
    background: '#1099bb',
    resizeTo: window
});
document.body.appendChild(app.view);

const cardTexture = await app.Assets.load('./CardBackTemp.jpg').load(startup);

const graphics = new PIXI.Graphics();

graphics.beginFill(0xFFFF00);

// set the line style to have a width of 5 and set the color to red
graphics.lineStyle(5, 0xFF0000);

// draw a rectangle
graphics.drawRect(0, 0, 300, 200);
function startup() {
    //const cardImage = Sprite.from(cardTexture);
    //cardImage.baseTexture.scaleMode = SCALE_MODES.NEAREST;
    var card = new Sprite(cardTexture);

    card.anchor.set(0.5);
    card.scale.set(5);
    card.x = app.renderer.height / 2;
    card.y = app.renderer.height / 2;

    app.stage.addChild(card);
    app.stage.addChild(graphics);

    //frame loop
    app.ticker.add(function(delta)
    {
        card.rotation += 0.1 * delta;
    });
}