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
        this.over = false;   
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
        ctx.fillText("HEALTH: " + this.ships[0].health, Game.DIM_X - 50, Game.DIM_Y - 50);
    }

    allObjects() {
        return [].concat(this.ships, this.enemies, this.projectiles);
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
            //const random = 6 * Math.random();
            if (enemy.pos[0] - this.ships[0].pos[0] < 2 && 
               enemy.pos[0] - this.ships[0].pos[0] > -2){
                //console.log("Enemy in line of sight");
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
        let count = 0;
        for (let i = 0; i < Game.NUM_ENEMIES; i++) {
            count += 1
            this.add(new Enemy({ game: this, pos: this.generateEnemyPosition(count) }));
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
        // for now, manually entering the positions, when refactoring the code
        // figure out a way to make this more dynamic.
        if (count === 1){
            return [70, 100];
        }
        else if (count === 2){
            return [350, 110];
        } else {
            return [200, 130];
        }
    }

    wrap(pos, vel) {
        let x_pos = pos[0];
        let x_vel = vel[0];
        if (x_pos >= 669 || x_pos <= 30) {
            console.log("HELLO!!!!!");
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
        if (object instanceof Ship || this.enemies.length === 0){
            this.gameOver()
        };
    }
       

    gameOver(){
        this.over = true;
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Game";
        restartButton.classList = "restart-button";
        restartButton.addEventListener("click", () => {
            this.restart();
        });
        document.body.appendChild(restartButton);
    }

    restart(){
            
        }
    
}

export default Game;