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
        this.enemyProjectileSheet.src = "assets/power.png";
        this.currentFrame = 0;
        this.eachWidth = 128; // Width of each frame in pixels
        this.eachHeight = 128; // Height of each frame in pixels
        this.numFrames = 4; // Total number of frames in the spritesheet
    }

    draw(ctx) {
        const sx = this.currentFrame * this.eachWidth;
        const sy = 0;

        if (this.vel[1] < 0){
            ctx.drawImage(this.userProjectileSheet, sx, sy, this.eachWidth, this.eachHeight, this.pos[0], this.pos[1], 60, 60);    
        } else {
            
            ctx.drawImage(this.enemyProjectileSheet, sx, sy, this.eachWidth, this.eachHeight, this.pos[0], this.pos[1], 60, 60);
        }
        this.currentFrame = (this.currentFrame + 1) % this.numFrames;
    }
}

export default Projectile;

