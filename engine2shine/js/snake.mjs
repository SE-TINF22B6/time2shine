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

var wasdDirection = "right";
var ijklDirection = "right";
var tick = true;
const gridSize = 15;
const screenSize = app.renderer.height - 20;
const tileSize = screenSize / gridSize;

document.body.appendChild(app.view);

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        wasdDirection = "right";
    }
    if (event.key === 'a') {
        wasdDirection = "left";
    }
    if (event.key === 's') {
        wasdDirection = "down";
    }
    if (event.key === 'w') {
        wasdDirection = "up";
    }

    if (event.key === 'l') {
        ijklDirection = "right";
    }
    if (event.key === 'j') {
        ijklDirection = "left";
    }
    if (event.key === 'k') {
        ijklDirection = "down";
    }
    if (event.key === 'i') {
        ijklDirection = "up";
    }
});

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

var snakes = new Array(2);
snakes[0] = [new PlayerBody(0, 0, tileSize, tileSize, fullBoard[0][0]), new PlayerBody(1, 0, tileSize, tileSize, fullBoard[0][1]), new PlayerHead(2, 0, tileSize, tileSize, fullBoard[0][2])]
snakes[1] = [new PlayerBody(0, 1, tileSize, tileSize, fullBoard[1][0]), new PlayerBody(1, 1, tileSize, tileSize, fullBoard[1][1]), new PlayerHead(2, 1, tileSize, tileSize, fullBoard[1][2])]
//var player = new PlayerBody(0, 0, tileSize, tileSize);

function startup() {
    console.log(fullBoard[1][1]);

    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            app.stage.addChild(fullBoard[j][i].sprite);
        }
    }

    for (let j = 0; j < snakes.length; j++) {
        for (let i = 0; i < snakes[0].length; i++) {
            app.stage.addChild(snakes[j][i].sprite);
        }
    }
    
    app.ticker.add(function(delta) {
        if (tick) {
            tick = false;
            move(snakes[0], wasdDirection);
            move(snakes[1], ijklDirection);
        }
    }
    );
}

async function move(entity, direction) {
    
    for (let i = 0; i < entity.length; i++) {
        if(i != entity.length-1) {
            entity[i].direction = entity[i+1].direction;
        } else {
            if (!isOpposite(entity[entity.length-1].direction, direction)) {
                entity[i].direction = direction;
            }
        }
        
        if (entity[i].direction == "right") {
            entity[i].sprite.xpos += 1;
            if (entity[i].sprite.xpos >= gridSize) {
                entity[i].sprite.xpos = 0;
            }
        }
        if (entity[i].direction == "left") {
            entity[i].sprite.xpos -= 1;
            if (entity[i].sprite.xpos < 0) {
                entity[i].sprite.xpos = gridSize-1;
            }
        }
        if (entity[i].direction == "down") {
            entity[i].sprite.ypos += 1;
            if (entity[i].sprite.ypos >= gridSize) {
                entity[i].sprite.ypos = 0;
            }
        }
        if (entity[i].direction == "up") {
            entity[i].sprite.ypos -= 1;
            if (entity[i].sprite.ypos < 0) {
                entity[i].sprite.ypos = gridSize-1;
            }
        }
    }
    await new Promise(r => setTimeout(r, 1000));

    tick = true;
}

function isOpposite(dir1, dir2) {
    if(
        dir1 == "up" && dir2 == "down" ||
        dir1 == "down" && dir2 == "up" ||
        dir1 == "right" && dir2 == "left" ||
        dir1 == "left" && dir2 == "right"
    ) {
        return true;
    } else {
        return false;
    }
}