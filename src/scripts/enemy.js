import GameObject from "./game_object";
import * as Util from "./util.js";
import Projectile from "./projectile";
import Explosion from "./explosion";
class Enemy extends GameObject{

    static RADIUS = 15;
    static SPEED = 4;

    constructor(options = {}) {   
        options.radius = Enemy.RADIUS;
        options.vel = options.vel || Util.enemyVec(Enemy.SPEED);
        options.health = 30;
        super(options);
        this.img = new Image();
        this.img.src = "assets/scout_enemy.png";
        this.pos = options.pos;
        this.id = options.id;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.pos[0] - 20, this.pos[1] - 10, 120, 120);
        if (this.health === 0){
            let image = new Image();
            image.src = "assets/explosion.png";
            ctx.drawImage(image, this.pos[0] - 20, this.pos[1] - 10, 120, 120);
        }
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
        const explosion = new Explosion({pos: this.pos, game: this.game, vel: this.vel});
        if (otherObject.vel[1] < 0) {
            this.health -= 1;
            this.game.remove(otherObject);
            this.game.points += 10;
            
            this.game.add(explosion);
            setTimeout(() => {
                this.game.remove(explosion);
            }, 100);    
        }
        if (this.health === 0){     
            this.game.add(explosion);
            setTimeout(() => {
                this.game.remove(explosion);  
                  
            }, 1500);
            this.game.remove(this, this.id);
        }
       
    }
}

export default Enemy; 