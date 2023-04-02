import MovingObject from "./moving_object";

class Projectile extends MovingObject {

    constructor(options) {
        options.radius = Projectile.RADIUS;
        super(options);
        this.isWrappable = false;
    }

    static RADIUS = 2;
    static SPEED = 15;
}

export default Projectile;

