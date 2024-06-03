import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';
import { Card } from './Card.mjs';
import { PlayerBoard } from './PlayerBoard.mjs';
import { Button } from './Button.mjs';

const app = new Application({
    resizeTo: window
});

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const email = urlParams.get('email');
const game = 'blackjack';
const urlBase = 'https://api.maiwald.cc/highscores';

document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x35654d;
app.renderer.resize(app.renderer.width-20, app.renderer.height-20);

app.loader.add('cardDeck', 'graphic/CardBackTemp.jpg')
    .add('button', 'graphic/button.png')
    .add('new_game_btn', 'graphic/new_game_btn.png')
    .add('end_turn_btn', 'graphic/end_turn_btn.png')
    .add('submit_score_btn', 'graphic/submit_score_btn.png')
    .load(startup);

var isBtnLoading = false;
var isEndTurn = false;
var cardValue = 0;
var kiCardValue = 0;
var score = 0;
var endTurnButton;
var newGameButton;
var deckId;

function startup() {
    /*
    const { texture } = app.loader.resources.cardDeck;
    texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;

     */
    isBtnLoading = false;
    isEndTurn = false
    cardValue = 0;
    kiCardValue = 0;

    var scoreText = new Text(score, {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: 0x040e0f,
        align: 'right',
        //anchor: (1,1),
    });

    var cardValueText = new Text(cardValue, {
        fontFamily: 'Arial',
        fontSize: 96,
        fill: 0x040e0f,
        align: 'right',
        //anchor: (1,1),
    });

    var kiCardValueText = new Text(kiCardValue, {
        fontFamily: 'Arial',
        fontSize: 96,
        fill: 0x040e0f,
        align: 'right',
        //anchor: (1,1),
    });

    var usernameText = new Text(username, {
        fontFamily: 'Arial',
        fontSize: 32,
        fill: 0x040e0f,
        align: 'center',
        //anchor: (1,1),
    });

    var cardDeck = new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 2, 0, Sprite.from('https://www.deckofcardsapi.com/static/img/back.png'));
    cardDeck.sprite.interactive = true;
    cardDeck.sprite.cursor = 'pointer';
    cardDeck.sprite.eventMode = 'static';
    //cardDeck[0] = new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 2, playingCardsDeck[i].value, Sprite.from(playingCardsDeck[i].image));
    //var cardDecks = new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 3);
    //cardDeck.sprite.interactive = true;
    //cardDeck.sprite.cursor = 'pointer';

    var playerCards = new Array();

    var kiCards = new Array();
    
    console.log("Hand: " + playerCards.length);

   const hand = new PlayerBoard(
       (app.renderer.width - 1100) / 2,
       app.renderer.height -250,
       1100,
       200,
       30
   );

   const kiHand = new PlayerBoard(
    (app.renderer.width - 1100) / 2,
    50,
    1100,
    200,
    30
);

    endTurnButton = new Button(cardDeck.sprite.x + cardDeck.sprite.width + 50, (app.renderer.height/2), Sprite.from('graphic/end_turn_btn.png'));
    endTurnButton.sprite.interactive = true;
    endTurnButton.sprite.cursor = 'pointer';
    endTurnButton.sprite.eventMode = 'static';
    endTurnButton.sprite.on('pointerdown', function() {
        if(!isBtnLoading) {
            if(!isEndTurn) {
                endTurn(kiCards, kiHand, true);
            }
        }
    });

    newGameButton = new Button(cardDeck.sprite.x + cardDeck.sprite.width + 50, (app.renderer.height/2), Sprite.from('graphic/new_game_btn.png'));
    newGameButton.sprite.interactive = true;
    newGameButton.sprite.cursor = 'pointer';
    newGameButton.sprite.eventMode = 'static';
    newGameButton.sprite.on('pointerdown', function() {
        if(!isBtnLoading) {
            if(isEndTurn) {
                newGame(playerCards, kiCards, cardDeck);
            }
        }
    });

    const submitScoreButton = new Button(-1000, (app.renderer.height/2), Sprite.from('graphic/submit_score_btn.png'));
    submitScoreButton.sprite.x = cardDeck.sprite.x - submitScoreButton.sprite.width - 50;
    submitScoreButton.sprite.interactive = true;
    submitScoreButton.sprite.cursor = 'pointer';
    submitScoreButton.sprite.eventMode = 'static';
    submitScoreButton.sprite.on('pointerdown', function() {
        if(!isBtnLoading && score != 0) {
            sendScore();
        }
    });

    //drawTable();

    // Center the sprite's anchor point
    //cardDeck.anchor.set(0.5);
    //cardDeck.scale.set(0.1);

    // Move the sprite to the center of the screen
    //cardDeck.sprite.on('pointerdown', drawCard(hand, playerCards));
    cardDeck.sprite.on('pointerdown', function() {
        if(cardValue < 21 && !isEndTurn) {
            drawCard(playerCards, hand, false).then(() => {
                if(kiCardValue < 19) {
                    drawCard(kiCards, kiHand, true);
                }
            })
        }
    }); // mouse-only
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {cardDeck[cardDeck.length-1].sprite.y -= 50; playerCards.push(cardDeck[cardDeck.length-1]); cardDeck.pop(); console.log("Deck:"+cardDeck.length); console.log("Playercards:"+playerCards.length);}); // mouse-only
    //cardDeck[cardDeck.length-1].sprite.on('pointerdown', function() {drawCard(playerCards, cardDeck); app.stage.addChild(playerCards[playerCards.length-1].sprite); console.log(playerCards.length);}); // mouse-only

    for (let i = 0; i < playerCards.length; i++) {
        app.stage.addChild(playerCards[i].sprite);
    }

    for (let i = 0; i < kiCards.length; i++) {
        app.stage.addChild(kiCards[i].sprite);
    }

    //app.stage.addChild(playerCards[0].bunny);
    app.stage.addChild(cardDeck.sprite);
    app.stage.addChild(endTurnButton.sprite);
    app.stage.addChild(submitScoreButton.sprite);
    app.stage.addChild(cardValueText);
    app.stage.addChild(kiCardValueText);
    app.stage.addChild(usernameText);
    app.stage.addChild(hand.obj);
    app.stage.addChild(kiHand.obj);
    app.stage.addChild(scoreText);


    fillCardDeck().then(() => {
        gameStart(playerCards, hand, false).then(() => {
            gameStart(kiCards, kiHand, true);
        })
        
    });
    // Listen for animate update
    
    
    app.ticker.add(function(delta) {
        /*
        for (let i = 0; i < playerCards.length; i++) {
            drawCardAnimation(playerCards[i], hand);
            console.log(playerCards[i].sprite.x);
        }
        */

        cardValueText.x = app.renderer.width - 150;
        cardValueText.y = app.renderer.height - 150;
        usernameText.x = 450;
        usernameText.y = app.renderer.height - 290;
        scoreText.x = 20;
        scoreText.y = app.renderer.height - 100;
        scoreText.text = "Score: " + score;
        cardValueText.text = cardValue;

        newGameButton.sprite.x = cardDeck.sprite.x + cardDeck.sprite.width + 50;
        newGameButton.sprite.y = (app.renderer.height/2);

        kiCardValueText.x = app.renderer.width - 150;
        kiCardValueText.y = 150;
        if(isEndTurn) {
            kiCardValueText.text = kiCardValue;
        } else {
            kiCardValueText.text = "?";
        }
        
        
        
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
async function drawCard(playerHand, hand, isKi) {
    
    let response = await fetch("https://www.deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=6");
    let json = await response.json();
    let randomCard = json.cards[0];
    console.log(json);
    switch (randomCard.value) {
        case "ACE":
            randomCard.value = 11;
            break;
        case "KING":
        case "QUEEN":
        case "JACK":
            randomCard.value = 10;
        default:
            randomCard.value = Number(randomCard.value);
    }
    if(isKi) {
        console.log("Punktzahl auf der Hand KI: " + kiCardValue);
        if (playerHand.length < 8 && kiCardValue < 21) {
            //playerHand.push(new Card(hand.x + 30, hand.y));
            playerHand.push(new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 3, Number(randomCard.value), Sprite.from(randomCard.image)));
            //playerHand[playerHand.length-1].sprite.x += playerHand[playerHand.length-1].sprite.width * (playerHand.length - 1);
            drawCardAnimation(playerHand[playerHand.length-1], hand, playerHand.length-1)
            app.stage.addChild(playerHand[playerHand.length-1].sprite)
            kiCardValue += playerHand[playerHand.length-1].value;
            console.log("Gezogene Karte KI: " + playerHand[playerHand.length-1].value);
            if (kiCardValue > 21) {
                for (let i = 0; i < playerHand.length; i++) {
                    if (playerHand[i].value == 11) {
                        playerHand[i].value = 1;
                        kiCardValue -= 10;
                        break;
                    }
                }
            } 
        }
        
        /*
        if (cardValue > 21) {
            cardValueText = new Text(cardValue, {
                fontFamily: 'Arial',
                fontSize: 96,
                fill: 0xff0000,
                align: 'right',
                //anchor: (1,1),
            });
        }
        */
        console.log("Neuer Punktestand KI: " + kiCardValue);
    } else {
        console.log("Punktzahl auf der Hand: " + cardValue);
        if (playerHand.length < 8 && cardValue < 21) {
            //playerHand.push(new Card(hand.x + 30, hand.y));
            playerHand.push(new Card((app.renderer.width - 130) / 2,(app.renderer.height - 200) / 3, Number(randomCard.value), Sprite.from(randomCard.image)));
            //playerHand[playerHand.length-1].sprite.x += playerHand[playerHand.length-1].sprite.width * (playerHand.length - 1);
            drawCardAnimation(playerHand[playerHand.length-1], hand, playerHand.length-1)
            app.stage.addChild(playerHand[playerHand.length-1].sprite)
            cardValue += playerHand[playerHand.length-1].value;
            console.log("Gezogene Karte: " + playerHand[playerHand.length-1].value);
            if (cardValue > 21) {
                for (let i = 0; i < playerHand.length; i++) {
                    if (playerHand[i].value == 11) {
                        playerHand[i].value = 1;
                        cardValue -= 10;
                        break;
                    }
                }
            } 
        }
        
        /*
        if (cardValue > 21) {
            cardValueText = new Text(cardValue, {
                fontFamily: 'Arial',
                fontSize: 96,
                fill: 0xff0000,
                align: 'right',
                //anchor: (1,1),
            });
        }
        */
        console.log("Neuer Punktestand: " + cardValue);
    }
    await new Promise(r => setTimeout(r, 500));
}

async function drawCardAnimation(playerCard, hand, length) {
    while (playerCard.sprite.x != hand.x+30+playerCard.sprite.width*length || playerCard.sprite.y != hand.y) {
        await new Promise(r => setTimeout(r, 5));
        playerCard.sprite.x -= (playerCard.sprite.x-(hand.x+30+playerCard.sprite.width*length))/10;
        playerCard.sprite.y -= (playerCard.sprite.y-hand.y)/10;
    }
}

async function gameStart(playerCards, hand, isKi) {
    drawCard(playerCards, hand, isKi).then(() => {
        drawCard(playerCards, hand, isKi);
        
    })
    await new Promise(r => setTimeout(r, 1250));
    
}

async function endTurn(playerCards, hand, isKi) {
    isBtnLoading = true;
    app.stage.removeChild(endTurnButton.sprite);
    app.stage.addChild(newGameButton.sprite);
    while(kiCardValue < 19) {
        drawCard(playerCards, hand, isKi);
        await new Promise(r => setTimeout(r, 500));
    }
    isEndTurn = true;
    if((cardValue <=21 && kiCardValue < cardValue) || (cardValue <=21 && kiCardValue > 21)) {
        console.log("You WIN!");
        score += 3;
        /*
        await fetch(`https://api.maiwald.cc/highscores?${params.toString()}`, {
            method: 'POST',
        })
            .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        */

    } else {
        if((cardValue == kiCardValue) || (cardValue > 21 && kiCardValue > 21)) {
            console.log("It's a DRAW!");
            score += 1;
        } else {
            console.log("You LOOSE!");
            score -= 1;
        }
    }
    isBtnLoading = false;
}

function newGame(cards, kiCards, deck) {
    isBtnLoading = true
    app.stage.removeChild(newGameButton.sprite);
    for (let i = 0; i < cards.length; i++) {
        app.stage.removeChild(cards[i].sprite);
    }

    for (let i = 0; i < kiCards.length; i++) {
        app.stage.removeChild(kiCards[i].sprite);
    }

    app.stage.removeChild(deck.sprite);
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
      score = 0;

  }

  async function fillCardDeck() {
    try {
        let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6");
        let json = await response.json();
        deckId = json.deck_id;
        //let remainingCards = json.remaining;
        console.log(deckId);

        //await drawCard();
        //console.log("All cards drawn:", playingCardsDeck);

    } catch (error) {
        console.error("Error generating deck:", error);
    }
}
/*
async function drawCard() {
    try {
        let response = await fetch("https://www.deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=1");
        let json = await response.json();
        var randomCard = json.cards[0];
        playingCardsDeck.push(randomCard);
    } catch (error) {
        console.error("Error drawing card:", error);
    }
    
}


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