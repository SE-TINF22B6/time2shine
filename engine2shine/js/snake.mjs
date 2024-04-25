import { Application, Sprite, SCALE_MODES, Text, Container, Rectangle, Graphics, GraphicsGeometry} from './pixi.mjs';
import { Button } from './Button.mjs';

const app = new Application({
    resizeTo: window
});

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const email = urlParams.get('email');
const game = 'snake';

document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x35654d;
app.renderer.resize(app.renderer.width-20, app.renderer.height-20);

function startup() {

    app.ticker.add(function(delta) {
        console.log(42);
    }
    );
}