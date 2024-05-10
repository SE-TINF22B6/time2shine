import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';
import { Button } from './Button.mjs';
import { Tile } from './Tile.mjs';
import { PlayerBody, PlayerHead } from './Player.mjs';
import { Roehrig } from './Roehrig.mjs';

const app = new Application({
    resizeTo: window
});

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const email = urlParams.get('email');
const game = 'snake';
const debug = false;

var wasdDirection = "right";
var ijklDirection = "right";
var tick = true;
var tack = false;
var roehrigCountdown = 5;
const startSize = 9;
const gridSize = 15;
const screenSize = app.renderer.height - 20;
const tileSize = screenSize / gridSize;

document.body.appendChild(app.view);

document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        if (tick == false) {
            tack = true;
        }
        if (tack == false) {
            tick = true;
        }
    }

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
    .add('grass_light', 'graphic/grass_light.png')
    .add('snake_body', 'graphic/snake_body.png')
    .add('snake_head', 'graphic/snake_head.png')
    .load(startup);

var fullBoard = new Array();

for (let j = 0; j < gridSize; j++) {
    fullBoard[j] = [];
    for (let i = 0; i < gridSize; i++) {
        if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
            fullBoard[j][i] = new Tile(i * tileSize, j * tileSize, tileSize, tileSize, Sprite.from('graphic/grass_light.png'));
        } else {
            fullBoard[j][i] = new Tile(i * tileSize, j * tileSize, tileSize, tileSize, Sprite.from('graphic/grass_dark.png'));
        }
        
    }
}

var snakes = new Array();
snakes[0] = [];
snakes[1] = [];
for (let i = 0; i < startSize; i++) {
    snakes[0][i] = new PlayerBody(i, 0, tileSize, tileSize, fullBoard[0][i]);
    if (i == startSize-1) {
        snakes[0][i+1] = new PlayerHead(i+1, 0, tileSize, tileSize, fullBoard[0][i+1], "wasd");
    }
}
var roehrigs = new Array();

//snakes[0] = [new PlayerBody(0, 0, tileSize, tileSize, fullBoard[0][0]), new PlayerBody(1, 0, tileSize, tileSize, fullBoard[0][1]), new PlayerHead(2, 0, tileSize, tileSize, fullBoard[0][2])]
//snakes[1] = [new PlayerBody(0, 1, tileSize, tileSize, fullBoard[1][0]), new PlayerBody(1, 1, tileSize, tileSize, fullBoard[1][1]), new PlayerHead(2, 1, tileSize, tileSize, fullBoard[1][2])]
//var player = new PlayerBody(0, 0, tileSize, tileSize);

function startup() {

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
            checkCollision();
            /*
            for (let i = 0; i < snakes.length; i++) {
                move(snakes[i], wasdDirection);
            }
            */

            for (let j = 0; j < snakes.length; j++) {
                console.log(snakes[j])
                if (snakes[j].length > 0) {
                    console.log(snakes[j][snakes[j].length-1].movement);
                    switch (snakes[j][snakes[j].length-1].movement) {
                        case "wasd": move(snakes[j], wasdDirection);
                            break;
                        case "ijkl": move(snakes[j], ijklDirection);
                            break;
                    }
                }

                for (let i = 0; i < snakes[j].length; i++) {
                    snakes[j][i].draw();
                }
                
            }
            if (!debug) {
                gameClock("startEnemyClock");
            }
            //move(snakes[1], ijklDirection);
        }
        if (tack) {
            tack = false;
            checkCollision();

            for (let i = 0; i < roehrigs.length; i++) {
                moveRoehrig(roehrigs[i]);
                roehrigs[i].draw();
            }

            if (roehrigCountdown > 0) {
                roehrigCountdown--;
            } else {
                var roehrigDir = getRandomInt(1, 5);
                var roehrigPlace = getRandomInt(0, gridSize);
                if (roehrigDir == 1) {
                    roehrigs[roehrigs.length] = new Roehrig(roehrigPlace, 0, tileSize, tileSize, fullBoard[0][roehrigPlace]);
                    roehrigs[roehrigs.length-1].direction = "down";
                }
                if (roehrigDir == 2) {
                    roehrigs[roehrigs.length] = new Roehrig(gridSize-1, roehrigPlace, tileSize, tileSize, fullBoard[roehrigPlace][gridSize-1]);
                    roehrigs[roehrigs.length-1].direction = "left";
                }
                if (roehrigDir == 3) {
                    roehrigs[roehrigs.length] = new Roehrig(roehrigPlace, gridSize-1, tileSize, tileSize, fullBoard[gridSize-1][roehrigPlace]);
                    roehrigs[roehrigs.length-1].direction = "up";
                }
                if (roehrigDir == 4) {
                    roehrigs[roehrigs.length] = new Roehrig(0, roehrigPlace, tileSize, tileSize, fullBoard[roehrigPlace][0]);
                    roehrigs[roehrigs.length-1].direction = "right";
                }
                app.stage.addChild(roehrigs[roehrigs.length-1].sprite);
                roehrigCountdown = getRandomInt(3, 10);
            }
            console.log("cd: "+ roehrigCountdown);
            

            if (!debug) {
                gameClock("startPlayerClock");
            }
        }
    }
    );
}

function moveRoehrig(entity) {
    if (entity.direction == "right") {
        entity.xpos += 1;
    }
    if (entity.direction == "left") {
        entity.xpos -= 1;
    }
    if (entity.direction == "up") {
        entity.ypos -= 1;
    }
    if (entity.direction == "down") {
        entity.ypos += 1;
    }

    if (entity.xpos >= 0 && entity.xpos < gridSize && entity.ypos >= 0 && entity.ypos < gridSize) {
        entity.tile = fullBoard[entity.ypos][entity.xpos];
    } else {
        app.stage.removeChild(roehrigs[roehrigs.indexOf(entity)].sprite);
        roehrigs.splice(roehrigs.indexOf(entity), 1);
    }
}

function move(entity, direction) {
    
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
    for (let r = 0; r < roehrigs.length; r++) {
        for (let j = 0; j < snakes.length; j++) {
            for (let k = 0; k < snakes[j].length; k++) {
                if (snakes[j][k].xpos == roehrigs[r].xpos && snakes[j][k].ypos == roehrigs[r].ypos) {
                    if (k == 0 || k == snakes[j].length-1) {
                        for (let s = 0; s < snakes[j].length; s++) {
                            app.stage.removeChild(snakes[j][s].sprite);
                        }
                        snakes[j] = [];

                    } else {
                        var tempSnake = snakes[0];
                        snakes[0] = [];
                        snakes[1] = [];
                        app.stage.removeChild(tempSnake[k].sprite);
                        for (let i = 0; i < k; i++) {
                            if (i != 0) {
                                snakes[1][k-1-i] = tempSnake[i];
                                snakes[1][k-1-i].direction = uTurn(tempSnake[i+1].direction);
                    
                            } else {
                                snakes[1][k-1-i] = new PlayerHead(tempSnake[i].xpos, tempSnake[i].ypos, tileSize, tileSize, tempSnake[i].tile, "ijkl");
                                snakes[1][k-1-i].direction = uTurn(tempSnake[i+1].direction);
                                ijklDirection = uTurn(tempSnake[i].direction);
                                app.stage.addChild(snakes[1][k-1-i].sprite);
                                app.stage.removeChild(tempSnake[i].sprite);
                            }
                        }
                    
                        for (let i = k+1; i < tempSnake.length; i++) {
                            snakes[0][i-k-1] = tempSnake[i];
                        }
                    }
                }
            }
        }
    }
}

async function gameClock(action) {
    await new Promise(r => setTimeout(r, 500));
    console.log(tick);
    console.log(tack);

    if (action == "startPlayerClock") {
        tick = true;
    }
    if (action == "startEnemyClock") {
        tack = true;
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  