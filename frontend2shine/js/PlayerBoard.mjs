import {Graphics} from "./pixi.mjs";

class PlayerBoard {
    obj;

    constructor(x, y, width, height, radius) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.obj = new Graphics();
        this.obj.lineStyle(5, 0x040e0f);
        this.draw()
        //draw(this.borderRect, this.x, this.y, this.width, this.height, this.radius);
        return this;
    }

    draw() {
        this.obj.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
    }
}

export {PlayerBoard};
