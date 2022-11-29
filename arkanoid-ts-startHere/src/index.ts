import { CanvasView } from "./views/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'
import { Collision } from "./Classes/Collision";

//Level and colors
import { 
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
    BALL_SPEED
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
    ball: Ball,
    collision: Collision
) {
console.log("Action");
view.clear();
view.drawBricks(bricks)
view.drawSprite(paddle)
view.drawSprite(ball)

ball.moveBall()

//Move paddle and check so it wont exit the playfield
if((paddle._moveLeft && paddle.pos.x > 0) || 
    (paddle._moveRight && paddle.pos.x < view.canvas.width - paddle.width)
){ 
    paddle.movePaddle();
}
collision.checkBallCollision(ball, paddle, view)
const collidingWithBrick = collision.isCollidingBricks(ball, bricks)

if(collidingWithBrick){
    score +=1
    view.drawScore(score)
}

//Game over when ball leaves playfield
if(ball.pos.y > view.canvas.height) gameOver = true;
//if player won... set game over and display win
if(bricks.length === 0)  { 
return setGameWin(view)
}
if(gameOver) setGameOver(view)



requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

function startGame(view: CanvasView){
    // Reset display 
    score = 0;
    view.getInfo('');
    view.drawScore(0);
    //create a collision instance
    const collision = new Collision();

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

    const ball = new Ball(
        BALL_SIZE, 
        { 
            x: BALL_STARTX,
            y: BALL_STARTY
        },
        BALL_SPEED,
        BALL_IMAGE
    )

    gameLoop(view, bricks, paddle, ball, collision)
}

    //create a new view
const view = new CanvasView("#playField")
view.initStartButton(startGame)