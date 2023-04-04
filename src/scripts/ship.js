import GameObject from "./game_object";
import Projectile from "./projectile";
import * as Util from "./util.js";

class Ship extends GameObject{
    
    static RADIUS = 15;

    constructor(options) {
        options.radius = Ship.RADIUS;
        options.vel = options.vel || [0, 0];
        options.health = 5;
        super(options);
        this.img = new Image();
        this.img.src = "assets/ship_1.png";
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0] + 15, this.pos[1], 30, 80);
    }

    // draw(ctx){
    //      let img = new Image();
    //      img.src = "assets/vehicle-1.png";
    //      ctx.drawImage(img, this.pos[0], this.pos[1], 100, 100);
    // }

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
        console.log("fired");
    }

    collideWith(otherObject){
        if (otherObject.vel[1] > 1){
            this.health -= 1;
            this.game.points -= 5;
            if (this.game.points < 0){
                this.game.points = 0;
            }
            this.game.remove(otherObject);
        }
        if (this.health == 0){
            this.game.remove(this)
        }
    }
}

export default Ship;