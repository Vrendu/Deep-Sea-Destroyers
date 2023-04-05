import Game from "./game";

class GameView{
    constructor(ctx) {
        this.game = new Game(this);
        this.ctx = ctx;
        this.ship = this.game.addShip();
        this.paused = false;  
        this.setUp(false);
    }

    static MOVES = {
        w: [0, -10],
        a: [-10, 0],
        s: [0, 10],
        d: [10, 0],
    };

    setUp(restart) {
        //this.paused = true;
        console.log("we have hit setup function");
        const startbutton = document.createElement("button");
        startbutton.textContent = "Start!";
        startbutton.classList.add("start-button");
        container.append(startbutton);
        startbutton.addEventListener("click", () => {
            this.start();
            container.removeChild(startbutton);
        });
        if (restart){
                cancelAnimationFrame(this.animation);
                this.game = new Game(this);
        }

    }
    

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
        pauseButton.textContent = 'Pause';

        pauseButton.onclick = () => {
           this.paused = !this.paused;
           if (pauseButton.textContent === "Pause"){
                pauseButton.textContent = "Play";
           } else {
                pauseButton.textContent = "Pause";
           }
           
        };
        document.body.append(pauseButton);
        this.animation = requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        
        if (!this.paused) {          
            this.game.step(timeDelta);
            this.game.draw(this.ctx);
        }

        this.lastTime = time;

        this.animation = requestAnimationFrame(this.animate.bind(this));
    }

}

export default GameView;