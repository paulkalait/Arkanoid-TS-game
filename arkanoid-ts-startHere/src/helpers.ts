import { Brick } from "./sprites/Brick";
import { 
    BRICK_IMAGES,
    LEVEL,
    STAGE_COLS,
    STAGE_PADDING,
    BRICK_WIDTH,
    BRICK_HEIGHT,
    BRICK_PADDING,
    BRICK_ENERGY,
    
} from './setup';

export function createBricks(): Brick[] { 
    return LEVEL.reduce((accumlator, element, i) => { 
        //gives current row for each brick
        const row = Math.floor((i + 1) / STAGE_COLS);
        const col = i % STAGE_COLS;

        const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING);
        const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

        if(element === 0) return accumlator;

        //create the brick
        return [
            ...accumlator,
            new Brick(
                BRICK_WIDTH,
                BRICK_HEIGHT,
                {
                    x,
                    y
                },
                BRICK_ENERGY[element],
                BRICK_IMAGES[element]
            )
        ]
    }, [] as Brick[])
}