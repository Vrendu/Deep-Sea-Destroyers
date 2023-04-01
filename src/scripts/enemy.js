import MovingObject from "./moving_object";

class Enemy extends MovingObject{

    static RADIUS = 25;
    static COLOR = "brown";

    constructor(options = {}){
        super(options);
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = Enemy.RADIUS;
        this.color = Enemy.color;
        this.health = options.health;
    }

}

export default Enemy; 