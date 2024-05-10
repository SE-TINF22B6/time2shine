import {Sprite} from "./pixi.mjs";

class Tile {

    constructor(x, y, width, height, sprite) {
        
        this.sprite = sprite;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.draw();
        return this;
    }

    draw() {
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.width = this.width;
        this.sprite.height = this.height;

        //this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

export {Tile};