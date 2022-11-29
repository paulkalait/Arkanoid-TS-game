import { Vector } from "~/types";


export class Brick { 
    private brickImage: HTMLImageElement = new Image();

    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private positon: Vector,
        private brickEnergy: number,
        image: string
    ){
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.positon = positon,
        this.brickEnergy = brickEnergy,
        this.brickImage.src = image
    }

    //getters
    get width(): number { 
        return this.brickWidth
    }

    get height(): number { 
        return this.brickHeight;
    }
    get position(): Vector { 
        return this.position
    }
    get image(): HTMLImageElement { 
        return this.brickImage
    }
    
    get energy(): number { 
        return this.brickEnergy
    }

    //setters 
    set energy(energy: number){ 
        this.brickEnergy = energy
    }
}