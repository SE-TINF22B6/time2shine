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
const startSize = 9;
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

    if (event.key === 'q') {
        checkCollision();
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

var snakes = new Array();
snakes[0] = [];
for (let i = 0; i < startSize; i++) {
    snakes[0][i] = new PlayerBody(i, 0, tileSize, tileSize, fullBoard[0][i]);
    if (i == startSize-1) {
        snakes[0][i+1] = new PlayerHead(i+1, 0, tileSize, tileSize, fullBoard[0][i+1]);
    }
}

//snakes[0] = [new PlayerBody(0, 0, tileSize, tileSize, fullBoard[0][0]), new PlayerBody(1, 0, tileSize, tileSize, fullBoard[0][1]), new PlayerHead(2, 0, tileSize, tileSize, fullBoard[0][2])]
//snakes[1] = [new PlayerBody(0, 1, tileSize, tileSize, fullBoard[1][0]), new PlayerBody(1, 1, tileSize, tileSize, fullBoard[1][1]), new PlayerHead(2, 1, tileSize, tileSize, fullBoard[1][2])]
//var player = new PlayerBody(0, 0, tileSize, tileSize);

function startup() {
    console.log(fullBoard[1][1]);

    for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
            app.stage.addChild(fullBoard[j][i].sprite);
        }
    }

    for (let j = 0; j < snakes.length; j++) {
        for (let i = 0; i < snakes[j].length; i++) {
            app.stage.addChild(snakes[j][i].sprite);
        }
    }
    
    app.ticker.add(function(delta) {  
        if (tick) {
            tick = false;
            console.log("pre move sneks" + snakes.length);

            for (let j = 0; j < snakes.length; j++) {
                move(snakes[j], wasdDirection);
                for (let i = 0; i < snakes[j].length; i++) {
                    console.log("length"+snakes);
                    snakes[j][i].draw();
                }
                console.log("sneks");
            }
            console.log("post move sneks" + snakes.length);
            //move(snakes[1], ijklDirection);
        }
    }
    );
}

async function move(entity, direction) {
    console.log(entity.length);
    for (let i = 0; i < entity.length; i++) {
        if(i != entity.length-1) {
            entity[i].direction = entity[i+1].direction;
        } else {
            if (!isOpposite(entity[entity.length-1].direction, direction)) {
                entity[i].direction = direction;
            }
        }
        
        if (entity[i].direction == "right") {
            entity[i].xpos += 1;
            if (entity[i].xpos >= gridSize) {
                entity[i].xpos = 0;
            }
        }
        if (entity[i].direction == "left") {
            entity[i].xpos -= 1;
            if (entity[i].xpos < 0) {
                entity[i].xpos = gridSize-1;
            }
        }
        if (entity[i].direction == "down") {
            entity[i].ypos += 1;
            if (entity[i].ypos >= gridSize) {
                entity[i].ypos = 0;
            }
        }
        if (entity[i].direction == "up") {
            entity[i].ypos -= 1;
            if (entity[i].ypos < 0) {
                entity[i].ypos = gridSize-1;
            }
        }
        entity[i].tile = fullBoard[entity[i].ypos][entity[i].xpos];
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

function uTurn(dir) {
    if (dir == "up") {
        return "down";
    }
    if (dir == "down") {
        return "up";
    }
    if (dir == "right") {
        return "left";
    }
    if (dir == "left") {
        return "right";
    }
}

function checkCollision() {
    var tempSnake = snakes[0];
    snakes[0] = [];
    snakes[1] = [];
    snakes[2] = []; 
    app.stage.removeChild(tempSnake[5].sprite);
    for (let i = 0; i < 5; i++) {
        if (i != 0) {
            snakes[1][i] = tempSnake[i];
            snakes[1][i].direction = uTurn(tempSnake[i].direction);

        } else {
            snakes[1][i] = new PlayerHead(tempSnake[i].xpos, tempSnake[i].ypos, tileSize, tileSize, tempSnake[i].tile);
            snakes[1][i].direction = uTurn(tempSnake[i].direction);
            app.stage.addChild(snakes[1][i].sprite);
            app.stage.removeChild(tempSnake[i].sprite);
        }
    }

    for (let i = 6; i < tempSnake.length; i++) {
        snakes[0][i-6] = tempSnake[i];
    }
}