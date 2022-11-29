import { Vector } from "~/types";

export class Paddle {
  private paddleImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor(
    private speed: number,
    private paddleWidth: number,
    private paddleHeight: number,
    private position: Vector,
    image: string
  ) {
    this.speed = speed;
    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
    this.position = position;
    this.paddleImage.src = image;
    this.moveLeft = false;
    this.moveRight = false;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp)
  }


  //getters
  get _speed(): number{
    return this.speed
  }

  get pos(): Vector{
    return this.position
  }

  get width(): number{
    return this.paddleWidth
  }

  get height(): number{
    return this.paddleHeight
  }
  get image(): HTMLImageElement { 
    return this.paddleImage
  }

  get _moveRight(): boolean { 
    return this.moveRight
  } 
  get _moveLeft(): boolean{ 
    return this.moveLeft
  }

  movePaddle(): void{ 
    if(this.moveLeft) this.position.x -= this.speed;
    if(this.moveRight) this.position.x += this.speed
  }

  
  handleKeyUp = (e: KeyboardEvent): void => { 
    if(e.code === "ArrowLeft" || e.key === "ArrowLeft"){
        this.moveLeft = false
    }
    if(e.code == "ArrowRight" || e.key === "ArrowRight")[
        this.moveRight = false
    ]
  }

  handleKeyDown = (e: KeyboardEvent): void => { 
        if(e.code == "ArrowLeft" || e.key === "ArrowLeft"){
            this.moveLeft = true
        }
        if(e.code == "ArrowRight" || e.key === "ArrowRight"){
            this.moveRight = true
        }
  }

}

