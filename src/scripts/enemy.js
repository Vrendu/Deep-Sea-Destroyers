import GameObject from "./game_object";
import * as Util from "./util.js";
import Projectile from "./projectile";

class Enemy extends GameObject{

    static COLOR = "black";
    static RADIUS = 15;
    static SPEED = 4;

    constructor(options = {}) {
        
        options.pos = options.pos || options.game.generateEnemyPosition();
        options.color = Enemy.COLOR;
        options.radius = Enemy.RADIUS;
        options.vel = options.vel || Util.enemyVec(Enemy.SPEED);
        options.health = 30;
        super(options);
        this.img = new Image();
        this.img.src = "assets/vehicle-2.png";
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0], this.pos[1], 70, 70);
    }

    fireProjectile() {
        const projVel = Util.projectileVec(4);

        const enemyProj = new Projectile({
            pos: this.pos,
            vel: projVel,
            color: "black",
            game: this.game
        });

        this.game.add(enemyProj);
    }
    
    collideWith(otherObject) {
        if (otherObject.vel[1] < 0) {
            this.health -= 1;
            this.game.remove(otherObject);
            this.game.points += 10;
        }
        if (this.health ==- 0){
            this.game.remove(this);
        }
    }
}

export default Enemy; 