import MovingObject from "./moving_object";
import Projectile from "./projectile";
import * as Util from "./util.js";
class Ship extends MovingObject{
    
    constructor(options) {
        options.radius = Ship.RADIUS;
        options.vel = options.vel || [0, 0];
        options.color = "black";
        options.health = 200;
        super(options);
        
    }

    static RADIUS = 15;

    moveShip(shipDir) {
        this.pos[0] += shipDir[0];
        this.pos[1] += shipDir[1];
    }

    fireProjectile(){
        const projVel = Util.projectileVec(-4);

        const proj = new Projectile({
            pos: this.pos,
            vel: projVel,
            color: "black",
            game: this.game
        });

        this.game.add(proj);
    }

    collideWith(otherObject){
        if (otherObject.vel[1] > 1){
            this.health -= 1;
            this.game.remove(otherObject);
        }
        if (this.health == 0){
            this.game.remove(this)
        }
    }
}

export default Ship;