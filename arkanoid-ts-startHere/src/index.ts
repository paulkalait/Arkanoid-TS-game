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
} from './setup.ts';

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
    ball: Ball,
) {}

function startGame(view: CanvasView){}

    //create a new view
const view = new CanvasView("#playField")
view.initStartButton(startGame)