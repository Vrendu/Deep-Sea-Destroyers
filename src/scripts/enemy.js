import MovingObject from "./moving_object";
import * as Util from "./util.js";

class Enemy extends MovingObject{

    static COLOR = "red";
    static RADIUS = 15;
    static SPEED = 4;

    constructor(options = {}) {
        //this.pos = options.pos;
        
        options.pos = options.pos || options.game.generateEnemyPosition();
        options.color = Enemy.COLOR;
        options.radius = Enemy.RADIUS;
        options.vel = options.vel || Util.enemyVec(Enemy.SPEED);
        super(options);
    }

    
}

export default Enemy; 