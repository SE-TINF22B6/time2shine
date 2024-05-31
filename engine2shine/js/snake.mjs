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
const urlBase = 'https://api.maiwald.cc/highscores';
const debug = false;
var tickTime = 100;

var wasdDirection = "right";
var ijklDirection = "right";
var tick = true;
var tack = false;
var roehrigCountdown = 5;
var score = 0;
var bonus = false;
var tempBody;
const startSize = 25;
const gridSize = 30;
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

var roehrigs = new Array();

var scoreText = new Text(score, {
    fontFamily: 'Arial',
    fontSize: 32,
    fill: 0x040e0f,
    align: 'right',
    //anchor: (1,1),
});

var usernameText = new Text(username, {
    fontFamily: 'Arial',
    fontSize: 32,
    fill: 0x040e0f,
    align: 'right',
    //anchor: (1,1),
});

const button = new Button(screenSize + 50, screenSize - 200);
    button.sprite.interactive = true;
    button.sprite.cursor = 'pointer';
    button.sprite.eventMode = 'static';
    button.sprite.on('pointerdown', function() {
        newGame();
    }
);

//snakes[0] = [new PlayerBody(0, 0, tileSize, tileSize, fullBoard[0][0]), new PlayerBody(1, 0, tileSize, tileSize, fullBoard[0][1]), new PlayerHead(2, 0, tileSize, tileSize, fullBoard[0][2])]
//snakes[1] = [new PlayerBody(0, 1, tileSize, tileSize, fullBoard[1][0]), new PlayerBody(1, 1, tileSize, tileSize, fullBoard[1][1]), new PlayerHead(2, 1, tileSize, tileSize, fullBoard[1][2])]
//var player = new PlayerBody(0, 0, tileSize, tileSize);

function startup() {
    for (let i = 0; i < startSize; i++) {
        snakes[0][i] = new PlayerBody(i, Math.floor(gridSize/2), tileSize, tileSize, fullBoard[0][i], "wasd");
        if (i == startSize-1) {
            snakes[0][i+1] = new PlayerHead(i+1, Math.floor(gridSize/2), tileSize, tileSize, fullBoard[0][i+1], "wasd");
        }
    }

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
    app.stage.addChild(scoreText);
    app.stage.addChild(usernameText);
    
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
                if (snakes[j].length > 0) {
                    switch (snakes[j][snakes[j].length-1].movement) {
                        case "wasd": moveSnake(snakes[j], wasdDirection);
                            break;
                        case "ijkl": moveSnake(snakes[j], ijklDirection);
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

            updateRoehrigTimer();
            

            if (!debug) {
                gameClock("startPlayerClock");
            }

            /*
            if (bonus == true) {
                console.log("BONUS1");
                bonus == false;
                for (let i = 0; i < snakes.length; i++) {
                    if (snakes[i].length != 0) {
                        console.log(tempBody);
                        snakes[i][snakes[i].length] = tempBody;
                        //console.log(snakes[i][snakes[i].length]);
                    }
                }
                
            }
            if (score % 100 == 0 && score != 0) {
                console.log("BONUS2");
                for (let i = 0; i < snakes.length; i++) {
                    if (snakes[i].length != 0) {
                        tempBody = new PlayerBody(snakes[i][snakes[i].length-1].xpos, snakes[i][snakes[i].length-1].ypos, tileSize, tileSize, fullBoard[snakes[i][snakes[i].length-1].ypos][snakes[i][snakes[i].length-1].xpos]);
                        bonus = true;
                        
                        //var tempBody = new PlayerBody(snakes[i][snakes[i].length-1].xpos, snakes[i][snakes[i].length-1].ypos, tileSize, tileSize, snakes[i][snakes[i].length-1].fullBoard);
                    }
                }
            }
            */
        }

        updateScreenDraw();
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

function moveSnake(entity, direction) {
    
    for (let i = 0; i < entity.length; i++) {
        if(i != entity.length-1) {
            entity[i].direction = entity[i+1].direction;
        } else {
            if (!isOpposite(entity[entity.length-1].direction, direction)) {
                entity[i].direction = direction;
                turnSnakeHead(entity[i]);
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
    //check for all roehrigs
    for (let r = 0; r < roehrigs.length; r++) {
        //check for all snakes
        for (let j = 0; j < snakes.length; j++) {
            //check for all items in a snake
            for (let k = 0; k < snakes[j].length; k++) {
                //check if item collides with roehrig
                if (snakes[j][k].xpos == roehrigs[r].xpos && snakes[j][k].ypos == roehrigs[r].ypos) {
                    console.log("k:"+k)
                    var fullSnakeList = true;
                    for (let o = 0; o < snakes.length; o++) {
                        if (snakes[o].length == 0) {
                            console.log("EMPTY" + snakes[o].length);
                            fullSnakeList = false;
                        }
                    }
                    //check if item is snake head
                    if (k > snakes[j].length-4 || fullSnakeList == true) {
                        for (let s = 0; s < snakes[j].length; s++) {
                            app.stage.removeChild(snakes[j][s].sprite);

                        }
                        snakes[j] = [];
                    
                    //check if item is snake tail
                    } else if (k < 3) {
                        console.log("asldalf")
                        for (let d = k; d >= 0; d--) {
                            app.stage.removeChild(snakes[j][d].sprite);
                            snakes[j].splice(snakes[j].indexOf(snakes[j][d]), 1);
                        }
                    //split snake
                    } else {
                        if (j == 0) {
                            var tempSnake = snakes[0];
                            snakes[0] = [];
                            snakes[1] = [];
                            app.stage.removeChild(tempSnake[k].sprite);
                            //snake 1
                            for (let i = 0; i < k; i++) {
                                //create snake body
                                if (i != 0) {
                                    snakes[1][k-1-i] = new PlayerBody(tempSnake[i].xpos, tempSnake[i].ypos, tileSize, tileSize, tempSnake[i].tile, "ijkl");
                                    snakes[1][k-1-i].direction = uTurn(tempSnake[i+1].direction);
                        
                                //create snake head
                                } else {
                                    snakes[1][k-1-i] = new PlayerHead(tempSnake[i].xpos, tempSnake[i].ypos, tileSize, tileSize, tempSnake[i].tile, "ijkl");
                                    snakes[1][k-1-i].direction = uTurn(tempSnake[i+1].direction);
                                    ijklDirection = uTurn(tempSnake[i].direction);
                                    turnSnakeHead(snakes[1][k-1-i]);
                                }
                                app.stage.addChild(snakes[1][k-1-i].sprite);
                                app.stage.removeChild(tempSnake[i].sprite);
                            }
                        
                            //snake 2
                            for (let i = k+1; i < tempSnake.length; i++) {
                                snakes[0][i-k-1] = tempSnake[i];
                            }
                        }
                        if (j == 1) {
                            var tempSnake = snakes[1];
                            snakes[0] = [];
                            snakes[1] = [];
                            app.stage.removeChild(tempSnake[k].sprite);
                            //snake 1
                            for (let i = 0; i < k; i++) {
                                //create snake bodydl
                                if (i != 0) {
                                    snakes[0][k-1-i] = new PlayerBody(tempSnake[i].xpos, tempSnake[i].ypos, tileSize, tileSize, tempSnake[i].tile, "wasd");
                                    snakes[0][k-1-i].direction = uTurn(tempSnake[i+1].direction);
                        
                                //create snake head
                                } else {
                                    snakes[0][k-1-i] = new PlayerHead(tempSnake[i].xpos, tempSnake[i].ypos, tileSize, tileSize, tempSnake[i].tile, "wasd");
                                    snakes[0][k-1-i].direction = uTurn(tempSnake[i+1].direction);
                                    wasdDirection = uTurn(tempSnake[i].direction);
                                    turnSnakeHead(snakes[0][k-1-i]);
                                    
                                }
                                app.stage.addChild(snakes[0][k-1-i].sprite);
                                app.stage.removeChild(tempSnake[i].sprite);
                            }
                        
                            //snake 2
                            for (let i = k+1; i < tempSnake.length; i++) {
                                snakes[1][i-k-1] = tempSnake[i];
                            }
                        }
                    }
                }
            }
        }
    }
}

async function gameClock(action) {
    await new Promise(r => setTimeout(r, tickTime));

    if (action == "startPlayerClock") {
        tick = true;
        if (snakes[0].length != 0 || snakes[1].length != 0) {
            if (snakes[0].length != 0 && snakes[1].length != 0) {
                score += 50; 
            } else {
                score +=10;
            }
        } else {
            app.stage.addChild(button.sprite);
            tick = false;
            tack = false;
            console.log("NEW GAME");
            sendScore();
        }
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
  

function turnSnakeHead(snake) {
    if (snake.direction == "right") {
        snake.sprite.rotation = 0;
    }
    if (snake.direction == "down") {
        snake.sprite.rotation = 1.57;
    }
    if (snake.direction == "left") {
        snake.sprite.rotation = 2*1.57;
    }
    if (snake.direction == "up") {
        snake.sprite.rotation = 3*1.57;
    }
}

  function updateRoehrigTimer() {
    if (roehrigCountdown > 0) {
        roehrigCountdown--;
    } else {
        for (let i = 0; i < (score/1000); i++) {
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
        }
        roehrigCountdown = getRandomInt(3, 10);
    }
    console.log("cd: "+ roehrigCountdown);
  }

  function updateScreenDraw() {
    scoreText.x = screenSize + 50;
    scoreText.y = 75;
    scoreText.text = "Score: " + score;

    usernameText.x = screenSize + 50;
    usernameText.y = 25;
    usernameText.text = "Username: " + username;
  }

  function newGame() {
    app.stage.removeChild(button.sprite);
    for (let j = 0; j < snakes.length; j++) {
        for (let i = 0; i < snakes[j].length; i++) {
            app.stage.removeChild(snakes[j][i].sprite);
        }
    }

    for (let i = 0; i < roehrigs.length; i++) {
        app.stage.removeChild(roehrigs[i].sprite);
    }

    snakes[0] = [];
    snakes[1] = [];
    roehrigs = [];
    score = 0;
    roehrigCountdown = getRandomInt(3, 10);
    tick = true;
    tack = false;
    wasdDirection = "right";
    ijklDirection = "right";

    startup();

  }

  function sendScore() {

    const params = new URLSearchParams({
        username: username,
        email: email,
        game: game,
        score: score
      });
      
      const url = `${urlBase}?${params.toString()}`;
      
      fetch(url, {
        method: 'POST'
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }