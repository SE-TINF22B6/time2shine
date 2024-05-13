import {Sprite} from "./pixi.mjs";

class Player {

    constructor(xpos, ypos, width, height, tile) {
        this.sprite = Sprite.from('graphic/CardBackTemp.jpg');
        this.width = width;
        this.height = height;
        this.tile = tile;
        this.xpos = xpos;
        this.ypos = ypos;
        this.direction = "right";
        this.draw();
        return this;
    }

    draw() {
        this.sprite.x = this.tile.x;
        this.sprite.y = this.tile.y;
        this.sprite.width = this.width;
        this.sprite.height = this.height;

        //this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

class PlayerBody extends Player {
    constructor(xpos, ypos, width, height, tile) {
        super(xpos, ypos, width, height, tile);
        this.sprite = Sprite.from('graphic/snake_body.png');
        this.draw();
        return this;
    }
}

class PlayerHead extends Player {
    constructor(xpos, ypos, width, height, tile, movement) {
        super(xpos, ypos, width, height, tile);
        this.sprite = Sprite.from('graphic/snake_head.png');
        this.sprite.anchor.set(0.5);
        this.movement = movement;
        this.draw();
        return this;
    }

    draw() {
        this.sprite.x = this.tile.x + this.width/2;
        this.sprite.y = this.tile.y + this.height/2;
        this.sprite.width = this.width;
        this.sprite.height = this.height;

        //this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

export {PlayerBody, PlayerHead};