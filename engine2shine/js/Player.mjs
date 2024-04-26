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
        this.sprite.x = tile.x;
        this.sprite.y = tile.y;
        this.sprite.width = width;
        this.sprite.height = height;

        //this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

class PlayerBody extends Player {
    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.sprite = Sprite.from('graphic/button.png');
        this.draw();
        return this;
    }
}

class PlayerHead extends Player {
    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.sprite = Sprite.from('graphic/button.png');
        this.draw();
        return this;
    }
}

export {PlayerBody, PlayerHead};