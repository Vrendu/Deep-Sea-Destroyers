class GameView{
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.ship = this.game.addShip();
    }

    static MOVES = {
        w: [0, -1],
        a: [-1, 0],
        s: [0, 1],
        d: [1, 0],
    };

    bindKeyHandlers() {
        const ship = this.ship;

        Object.keys(GameView.MOVES).forEach((k) => {
            const move = GameView.MOVES[k];
            key(k, () => { ship.move(move); });
            
            console.log("ship has moved");
        });

        //key("space", () => { ship.fireBullet(); });
    }

    start() {
        this.bindKeyHandlers();
        this.lastTime = 0;
        // start the animation
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;

        
        this.game.draw(this.ctx);
       this.game.step(timeDelta);
        this.lastTime = time;

        // every call to animate requests causes another call to animate
        requestAnimationFrame(this.animate.bind(this));
    }

}

export default GameView;