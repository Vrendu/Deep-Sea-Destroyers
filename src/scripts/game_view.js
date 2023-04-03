class GameView{
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.ship = this.game.addShip();
        this.paused = false;
    }

    static MOVES = {
        w: [0, -10],
        a: [-10, 0],
        s: [0, 10],
        d: [10, 0],
    };

    bindKeyHandlers() {
        const ship = this.ship;

        Object.keys(GameView.MOVES).forEach((k) => {
            const move = GameView.MOVES[k];
            key(k, () => { ship.moveShip(move); });
        });

        key("space", () => { ship.fireProjectile(); });
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
        // Want to add button here to pause, DOM manipulation

        // every call to animate requests causes another call to animate
        if(!this.paused){
            requestAnimationFrame(this.animate.bind(this));
        }
        
    }

}

export default GameView;