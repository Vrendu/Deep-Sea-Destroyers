import GameObject from "./game_object";

class Laser extends GameObject {
    constructor(options) {
        super(options);
        this.pos = options.pos;
        this.img = new Image();
        this.img.src = "assets/laser.png";
        this.currentFrame = 0;
        this.eachWidth = 512;
        this.eachHeight = 128;
        this.numFrames = 25;
    }

    draw(ctx) {
        let row = Math.floor(this.currentFrame / 5);
        let col = this.currentFrame % 5;
        ctx.drawImage(
            this.img,
            this.eachWidth * col,
            this.eachHeight * row,
            this.eachWidth,
            this.eachHeight,
            this.pos[0] + 90,
            this.pos[1],
            490,
            40
        );
        this.currentFrame = (this.currentFrame + 1) % this.numFrames;
    }
}

export default Laser;