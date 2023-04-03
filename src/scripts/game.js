import Enemy from "./enemy.js";
import Ship from "./ship.js";
import Projectile from "./projectile.js";

class Game {
    constructor(){
        this.enemies = [];
        this.projectiles = [];
        this.ships = [];
        this.points = 0;
        this.addEnemies();
    }

    static BG_COLOR = "#2B65EC";
    static DIM_X = 1000;
    static DIM_Y = 700;

    static NUM_ENEMIES = 3;

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.allObjects().forEach((object) => {
            object.draw(ctx);
            if (object instanceof Enemy){
                ctx.font = "15px serif";
                ctx.fillText(object.health + " HP", object.pos[0] + 20, object.pos[1] + 32);
            }
        });

        ctx.beginPath();
        ctx.font = "25px serif"
        ctx.textAlign = 'right';
        ctx.fillText("SCORE: " + this.points, 926,600);
        ctx.fillText("HEALTH: " + this.ships[0].health, 950, 630);
        ctx.stroke();
    }

    allObjects() {
        return [].concat(this.ships, this.enemies, this.projectiles);
    }

    step(delta) {
        
        this.moveObjects(delta);
        this.fireEnemyProjectiles();
        this.checkCollisions();
        //console.log(this.ships.length);
        //console.log(this.enemies.length);
        //console.log(this.projectiles.length);
    }

    fireEnemyProjectiles(){
        this.enemies.forEach((enemy) => {
            //const random = 6 * Math.random();
            if (enemy.pos[0] - this.ships[0].pos[0] < 2 && 
               enemy.pos[0] - this.ships[0].pos[0] > -2){
                console.log("Enemy in line of sight");
                enemy.fireProjectile();
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
                    console.log(obj1.health);
                   // console.log(obj2.health);
                }
            }
        }
    }

    moveObjects(delta) {
        this.allObjects().forEach((object) => {
            object.move(delta);
        });
        
    }
    
    add(object) {
        if (object instanceof Enemy) {
            this.enemies.push(object);
        } else if (object instanceof Projectile) {
            this.projectiles.push(object);
        } else if (object instanceof Ship) {
            this.ships.push(object);
        } else {
            throw new Error("unknown type of object");
        }
    }

    addEnemies() {
        for (let i = 0; i < Game.NUM_ENEMIES; i++) {
            this.add(new Enemy({ game: this }));
        }
    }

    addShip() {
        const ship = new Ship({
            pos: [500, 600],
            game: this
        });

        this.add(ship);

        return ship;
    }

    generateEnemyPosition() {
        return [
            (Game.DIM_X - 20)* Math.random(),
            20 + 100 * Math.random()
        ];
    }

    wrap(pos, vel) {
        let x_pos = pos[0];
        let x_vel = vel[0];
        if (x_pos > Game.DIM_X || x_pos < 0) {
            x_vel = x_vel * -1;
        } 
        return [x_vel, vel[1]];
    }

    // Something to update when you can, delegate removing responsibility 
    // to the objects themselves, as you add more objects, and simplify this code
    remove(object){
        switch (true) {
            case object instanceof Projectile:
                this.projectiles.splice(this.projectiles.indexOf(object), 1);
                break;
            case object instanceof Enemy:
                this.enemies.splice(this.enemies.indexOf(object), 1);
                break;
            case object instanceof Ship:
                this.ships.splice(this.ships.indexOf(object), 1);
                break;
            default:
                throw new Error("unknown type of object");
        }
        if (object instanceof Ship){this.gameOver()};
    }

    gameOver(){

        console.log("Game Over!");
    }
}

export default Game;