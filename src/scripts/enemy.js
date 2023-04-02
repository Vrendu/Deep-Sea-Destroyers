import MovingObject from "./moving_object";

class Enemy extends MovingObject{

    static COLOR = "red";
    static RADIUS = 15;

    constructor(options = {}) {
        //this.pos = options.pos;
        
        options.pos = options.pos || options.game.generateEnemyPosition();
        options.color = Enemy.COLOR;
        options.radius = Enemy.RADIUS;
        super(options);
    }

    
}

export default Enemy; 