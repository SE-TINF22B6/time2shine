import {Sprite} from "./pixi.mjs";

class Button {

    constructor(x, y) {
        this.sprite = Sprite.from('graphic/button.png');
        //this.width = 130;
        //this.height = 200;
        //this.radius = 30;
        this.x = x;
        this.y = y;
        this.draw();
        return this;
    }

    draw() {
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        //this.sprite.width = this.width;
        //this.sprite.height = this.height;

        //this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

export {Button};
