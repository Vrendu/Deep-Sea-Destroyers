
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
import * as Util from "./util.js";

class MovingObject {
    constructor(options = {}) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
        this.health = options.health;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        
        ctx.stroke();
    }

    isCollidedWith(otherObject) {

        const centerDist = Util.dist(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
    }

    collideWith(otherObject){
        
    }

    move(timeDelta) {
       
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale, 
            offsetY = this.vel[1] * velocityScale;


        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        this.vel = this.game.wrap(this.pos, this.vel);

    }

    removeObject(){
        this.game.remove(this);
    }
}

export default MovingObject;