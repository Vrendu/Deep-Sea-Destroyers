const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

import GameObject from "./game_object";
import Projectile from "./projectile";
import * as Util from "./util.js";
import Game from "./game.js";
import Explosion from "./explosion";

class Ship extends GameObject{
    
    static RADIUS = 15;

    constructor(options) {
        options.radius = Ship.RADIUS;
        options.vel = options.vel || [0, 0];
        options.health = 30;
        super(options);
        this.img = new Image();
        this.img.src = "assets/ship_1.png";
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0] + 15, this.pos[1], 30, 80);
    }

    moveShip(shipDir) {
        
        const speed = 14; 

        // Calculate the new position based on ship's direction and speed
        const newPos = [
            this.pos[0] + shipDir[0] * speed,
            this.pos[1] + shipDir[1] * speed
        ];
        if (newPos[0] <= 640 && newPos[0] >= 0){
            // Update the ship's position gradually using interpolation
            const easing = 0.1; // Adjust the easing value for smoother movement
            this.pos[0] += (newPos[0] - this.pos[0]) * easing;
            this.pos[1] += (newPos[1] - this.pos[1]) * easing;
        }
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
        const explosion = new Explosion({pos: this.pos, game: this.game, vel: this.vel});
        if (otherObject.vel[1] > 1){
            this.health -= 1;
            this.game.points -= 5;
            if (this.game.points < 0){
                this.game.points = 0;
            }
            this.game.remove(otherObject);
            this.game.add(explosion);
            setTimeout(() => {
                this.game.remove(explosion);
            }, 100);

        }
        if (this.health == 0){
            this.game.add(explosion);
            setTimeout(() => {
                this.game.remove(explosion);

            }, 1500);
           // setTimeout(() => {
            this.game.remove(this)
            //}, 1500);
        }
    }
}

export default Ship;