import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';
import { Button } from './Button.mjs';
import { Tile } from './Tile.mjs';
import { PlayerBody, PlayerHead } from './Player.mjs';

const app = new Application({
    resizeTo: window
});

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const email = urlParams.get('email');
const game = 'snake';

const gridSize = 15;
const screenSize = app.renderer.height - 20;
const tileSize = screenSize / gridSize;

document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x35654d;
app.renderer.resize(app.renderer.width-20, app.renderer.height-20);

app.loader.add('cardDeck', 'graphic/CardBackTemp.jpg')
    .add('button', 'graphic/button.png')
    .load(startup);

var fullBoard = new Array();

for (let j = 0; j < gridSize; j++) {
    fullBoard[j] = [];
    for (let i = 0; i < gridSize; i++) {
        fullBoard[j][i] = new Tile(i * tileSize, j * tileSize, tileSize, tileSize);
    }
}

var player = new PlayerBody(0, 0, tileSize, tileSize);



function startup() {
    console.log(fullBoard[1][1]);

    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            app.stage.addChild(fullBoard[j][i].sprite);
            console.log(j);
            console.log(i);
            console.log("blub");
        }
    }
    app.stage.addChild(player.sprite);
    

    app.ticker.add(function(delta) {
        move(player);
        console.log(player.x);
    }
    );
}

async function move(entity) {
    await new Promise(r => setTimeout(r, 500));
    entity.sprite.x += tileSize;
}