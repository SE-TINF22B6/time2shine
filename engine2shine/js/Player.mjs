import {Sprite} from "./pixi.mjs";

class Player {

    constructor(x, y, width, height) {
        this.sprite = Sprite.from('graphic/CardBackTemp.jpg');
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

class PlayerBody extends Player {
    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.sprite = Sprite.from('graphic/button.png');
        this.draw();
        return this;
    }
}

class PlayerHead extends Player {

}

export {PlayerBody, PlayerHead};