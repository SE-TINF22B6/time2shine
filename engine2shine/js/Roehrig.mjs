import {Sprite} from "./pixi.mjs";

class Roehrig {

    constructor(xpos, ypos, width, height, tile) {
        this.sprite = Sprite.from('graphic/roehrig.png');
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

export {Roehrig}