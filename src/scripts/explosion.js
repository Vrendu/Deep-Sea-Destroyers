import GameObject from "./game_object";

class Explosion extends GameObject {

    constructor(options) {
        super(options);
        this.img = new Image();
        this.img.src = "assets/explosion.png";
        this.currentFrame = 0;
        this.eachWidth = 128;
        this.eachHeight = 128;
        this.numFrames = 12;
    }

    draw(ctx) {
        ctx.drawImage(
                this.img,
                this.currentFrame * this.eachWidth,
                0,
                this.eachWidth,
                this.eachHeight,
                this.pos[0],
                this.pos[1],
                60,
                60
            );
        this.currentFrame = (this.currentFrame + 1) % this.numFrames;
    }
}

export default Explosion;