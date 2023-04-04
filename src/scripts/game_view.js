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
        const pauseButton = document.createElement('button');
        pauseButton.textContent = 'Pause/Unpause Game';

        pauseButton.onclick = () => {
           this.paused = !this.paused;
        };
        document.body.append(pauseButton);
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        
        if (!this.paused) { 
            this.game.draw(this.ctx);
            this.game.step(timeDelta);
        }

        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    }

}

export default GameView;