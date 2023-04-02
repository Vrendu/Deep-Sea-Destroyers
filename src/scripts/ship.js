import MovingObject from "./moving_object";

class Ship extends MovingObject{
    // constructor(options){
    //     this.pos = options.pos;
    //     this.vel = options.vel;
    //     this.color = "blue";
    // }

    constructor(options) {
        options.radius = Ship.RADIUS;
        options.vel = options.vel || [0, 0];
        options.color = "red"//options.color || randomColor();
        super(options);
    }

    static RADIUS = 15;

}

export default Ship;