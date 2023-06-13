import Enemy from "./enemy.js";
import Ship from "./ship.js";
import Projectile from "./projectile.js";
import Explosion from "./explosion.js";
import Laser from "./laser.js";

class Game {
    constructor(gameview){
        this.enemies = [];
        this.projectiles = [];
        this.ships = [];
        this.explosions = [];
        this.laser = new Laser({pos: [0, 330], game: this});
        this.points = 0;
        this.addEnemies(); 
        this.gameview = gameview;
    }


    static BG_COLOR = "#2B65EC";
    static DIM_X = 700;
    static DIM_Y = 700;

    static NUM_ENEMIES = 3;

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.allObjects().forEach((object) => {
            object.draw(ctx);
            if (object instanceof Enemy){
                ctx.font = "20px serif";
                ctx.fillText(object.health + " HP", object.pos[0] + 20, object.pos[1] + 32);
                
            }
        });
        ctx.font = "30px serif";
        ctx.textAlign = 'right';
        ctx.fillStyle = "white";
        ctx.fillText("SCORE: " + this.points, Game.DIM_X - 50,Game.DIM_Y - 100);
        if (this.ships[0]){
            ctx.fillText("HEALTH: " + this.ships[0].health, Game.DIM_X - 50, Game.DIM_Y - 50);
        }
    }

    allObjects() {
        return [].concat(this.ships, this.enemies, this.projectiles, this.explosions, this.laser);
    }

    step(delta) {
        this.moveObjects(delta);
        this.fireEnemyProjectiles();
        this.checkCollisions();
        this.deleteProjectilesOutOfBounds();        
    }

    deleteProjectilesOutOfBounds(){
        this.projectiles.forEach((proj) => {
            if (proj.pos[1] > Game.DIM_Y || proj.pos[1] < 0){
                this.remove(proj);
            }
        })
    }

    fireEnemyProjectiles(){
        this.enemies.forEach((enemy) => {
            if (this.ships[0]){
                if (enemy.pos[0] - this.ships[0].pos[0] < 2 && 
                enemy.pos[0] - this.ships[0].pos[0] > -2){
                    enemy.fireProjectile();
                }      
            }     
        });
    }

    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length - 1; i++) {
            for (let j = i + 1; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];

                if (obj1.isCollidedWith(obj2)) {
                    obj1.collideWith(obj2); 
                }
            }
        }
    }

    moveObjects(delta) {
        this.allObjects().forEach((object) => {
            if (!(object instanceof Explosion) && !(object instanceof Laser)){
                object.move(delta);
            }
        });
        
    }
    
    add(object) {
        if (object instanceof Enemy) {
            this.enemies.push(object);
        } else if (object instanceof Projectile) {
            this.projectiles.push(object);
        } else if (object instanceof Ship) {
            this.ships.push(object);
        } else if (object instanceof Explosion){
            this.explosions.push(object);
        }  
        else {
            throw new Error("unknown type of object");
        }
    }

    addEnemies() {
        let count = 0;
        for (let i = 0; i < Game.NUM_ENEMIES; i++) {
            count += 1
            this.add(new Enemy({ game: this, pos: this.generateEnemyPosition(count), id: count }));
        }
    }

    addShip() {
        const ship = new Ship({
            pos: [300, 600],
            game: this
        });

        this.add(ship);

        return ship;
    }

    generateEnemyPosition(count) {
        if (count === 1){
            return [60, 50];
        }
        else if (count === 2){
            return [200, 110];
        } else {
            return [100, 170];
        }
    }

    wrap(pos, vel) {
        let x_pos = pos[0];
        let x_vel = vel[0];
        if (x_pos >= 650 || x_pos <= 30) {
            x_vel = x_vel * -1;
        } 
        return [x_vel, vel[1]];
    }

    
    remove(object, index = null){
        switch (true) {
            case object instanceof Projectile:
                this.projectiles.splice(this.projectiles.indexOf(object), 1);
                break;
            case object instanceof Enemy:
                this.enemies.forEach((enemy) => {
                    // if the enemy's id is index, remove
                    if (enemy.id === index){
                        this.enemies.splice(this.enemies.indexOf(enemy), 1);
                    }
                });
                break;
            case object instanceof Ship:
                this.ships.splice(this.ships.indexOf(object), 1);
                break;
            case object instanceof Explosion:
                this.explosions.splice(this.explosions.indexOf(object), 1);
                break;
            default:
                throw new Error("unknown type of object");
        }
        if (this.enemies.length === 0){
            this.gameOver();
        }
        if (object instanceof Ship){
            this.gameOver();
            let explosion = new Explosion({pos: object.pos, game: this, vel: object.vel});
            this.add(new Explosion(explosion));
            setTimeout(() => {
                this.remove(explosion);
            }, 1500);
        }
    }
       

    gameOver(){
        if (!this.over){
            this.over = true;
            const restartButton = document.createElement("button");
            restartButton.textContent = "Restart Game";
            restartButton.classList = "restart-button";
            restartButton.addEventListener("click", () => {
                document.body.removeChild(restartButton);
                this.gameview.setUp(true);  
            });
            const message = document.createElement("div");
       
            document.body.appendChild(restartButton);
        }   
    }
}

export default Game;