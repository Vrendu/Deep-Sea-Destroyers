import GameObject from "./game_object";

class Projectile extends GameObject {

    static RADIUS = 2;
    static SPEED = 15;

    constructor(options) {
        options.radius = Projectile.RADIUS;
        super(options);
        
    }
    
}

export default Projectile;

