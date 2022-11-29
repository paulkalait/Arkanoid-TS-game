import { CanvasView } from "./views/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'

//Level and colors
import { 
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY
} from './setup';
import {createBricks} from "./helpers"

let gameOver: boolean = false;
let score: number = 0;

function setGameOver(view: CanvasView){ 
    view.getInfo("Game Over!");
    gameOver = false;
}

function setGameWin(view: CanvasView){
    view.getInfo("Game Won");
    gameOver = false
}

function gameLoop(
    view: CanvasView, 
    bricks: Brick[],
    paddle: Paddle,
    // ball: Ball,
) {
console.log("Action");
view.clear();
view.drawBricks(bricks)
view.drawSprite(paddle)

//Move paddle and check so it wont exit the playfield
if((paddle._moveLeft && paddle.pos.x > 0) || 
    (paddle._moveRight && paddle.pos.x < view.canvas.width - paddle.width)
){ 
    paddle.movePaddle();
}

requestAnimationFrame(() => gameLoop(view, bricks, paddle));
}

function startGame(view: CanvasView){
    // Reset display 
    score = 0;
    view.getInfo('');
    view.drawScore(0);
    // create all bricks
    const bricks = createBricks();

    //create paddle 
    const paddle = new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x: PADDLE_STARTX,
            y: view.canvas.height - PADDLE_HEIGHT - 5
        },
        PADDLE_IMAGE
    )


    gameLoop(view, bricks, paddle)
}

    //create a new view
const view = new CanvasView("#playField")
view.initStartButton(startGame)