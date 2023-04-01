import Enemy from "./enemy.js";
import Ship from "./ship.js";

class Game {
    constructor(){
        this.enemies = [];
        this.projectiles = [];
        this.ships = [];
    }

    static BG_COLOR = "#2B65EC";
    static DIM_X = 1000;
    static DIM_Y = 700;

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = Game.BG_COLOR;
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.allObjects().forEach((object) => {
            object.draw(ctx);
        });
    }

}

export default Game;