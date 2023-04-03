import MovingObject from "./moving_object";

class Projectile extends MovingObject {

    static RADIUS = 2;
    static SPEED = 15;

    constructor(options) {
        options.radius = Projectile.RADIUS;
        super(options);
        
    }
    
}

export default Projectile;

