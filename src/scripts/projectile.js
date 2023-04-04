import GameObject from "./game_object";

class Projectile extends GameObject {

    static RADIUS = 2;
    static SPEED = 15;

    constructor(options) {
        options.radius = Projectile.RADIUS;
        super(options);
        this.spriteSheet = new Image();
        this.spriteSheet.src = "assets/flame.png";
        this.currentFrame = 0;
        this.frameWidth = 128; // Width of each frame in pixels
        this.frameHeight = 128; // Height of each frame in pixels
        this.numFrames = 4; // Total number of frames in the spritesheet
    }

    draw(ctx) {
        // Calculate the x and y coordinates of the current frame in the spritesheet
        const sx = this.currentFrame * this.frameWidth;
        const sy = 0;

        // Draw the current frame of the projectile on the canvas
        ctx.drawImage(this.spriteSheet, sx, sy, this.frameWidth, this.frameHeight, this.pos[0], this.pos[1], this.frameWidth, this.frameHeight);

        // Increment the current frame index
        this.currentFrame = (this.currentFrame + 1) % this.numFrames;
    }
}

export default Projectile;

