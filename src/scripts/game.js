import Enemy from "./enemy.js";
import Ship from "./ship.js";
import Projectile from "./projectile.js";

class Game {
    constructor(){
        this.enemies = [];
        this.projectiles = [];
        this.ships = [];
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
        });
    }

    allObjects() {
        return [].concat(this.ships, this.enemies, this.projectiles);
    }

    step(delta) {
        this.moveObjects(delta);
       // this.checkCollisions();
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
}

export default Game;