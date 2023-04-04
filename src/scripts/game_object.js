
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
import * as Util from "./util.js";

class GameObject {
    constructor(options = {}) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.game = options.game;
        this.health = options.health;
    }

    isCollidedWith(otherObject) {

        const centerDist = Util.dist(this.pos, otherObject.pos);
        return centerDist < 20;
    }

    collideWith(otherObject){

    }

    move(timeDelta) {
       
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale, 
            offsetY = this.vel[1] * velocityScale;

        let newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        if (newPos[0] <= 700 && newPos[0] >= 0){
             this.pos = newPos;
        }
        this.vel = this.game.wrap(this.pos, this.vel);

    }
}

export default GameObject;