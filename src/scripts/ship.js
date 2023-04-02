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
        options.color = "red";
        super(options);
    }

    static RADIUS = 15;

    move(shipVec) {
        this.pos[0] += shipVec[0];
        this.pos[1] += shipVec[1];
    }

}

export default Ship;