import { Application, Sprite, SCALE_MODES } from './pixi.mjs';

const app = new Application({
    resizeTo: window
});
document.body.appendChild(app.view);

// Load the bunny texture
app.loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png')
    .load(startup);

function startup()
{
    const { texture } = app.loader.resources.bunny;
    texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
    var bunny = new Sprite(texture);

    // Center the sprite's anchor point
    bunny.anchor.set(0.5);
    bunny.scale.set(5);

    // Move the sprite to the center of the screen
    bunny.x = -50;
    bunny.y = -35;

    app.stage.addChild(bunny);

    // Listen for animate update
    app.ticker.add(function(delta)
    {
        // Rotate mr rabbit clockwise
        bunny.rotation += 0.1 * delta;
        moveObject(bunny);
    });
}

function moveObject(obj) {
    obj.y += 2;
    obj.x += 5;
}
