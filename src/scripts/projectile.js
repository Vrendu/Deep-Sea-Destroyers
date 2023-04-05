import GameObject from "./game_object";

class Projectile extends GameObject {

    static RADIUS = 2;
    static SPEED = 15;

    constructor(options) {
        options.radius = Projectile.RADIUS;
        super(options);
        this.userProjectileSheet = new Image();
        this.userProjectileSheet.src = "assets/flame.png";
        this.enemyProjectileSheet = new Image();
        this.enemyProjectileSheet.src = "assets/flame_glow.png";
        this.currentFrame = 0;
        this.eachWidth = 128; // Width of each frame in pixels
        this.eachHeight = 128; // Height of each frame in pixels
        this.numFrames = 16; // Total number of frames in the spritesheet
    }

    draw(ctx) {
        let row = Math.floor(this.currentFrame / 4);
        let col = this.currentFrame % 4;
        if (this.vel[1] < 0){
            ctx.drawImage(this.userProjectileSheet, 128 * col, 128 * row, this.eachWidth, this.eachHeight, this.pos[0], this.pos[1], 60, 60);    
        } else {
            ctx.drawImage(this.enemyProjectileSheet, 128 * col, 128 * row, this.eachWidth, this.eachHeight, this.pos[0], this.pos[1], 60, 60);
        }
        this.currentFrame = (this.currentFrame + 1) % this.numFrames;
    }
}

export default Projectile;

