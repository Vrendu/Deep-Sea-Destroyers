import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";


document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    const ctx = canvasEl.getContext("2d");
    const image = document.createElement("image");
    image.src = "assets/game_background.png";

    const container = document.getElementById('container');
    container.appendChild(image);

    canvasEl.style.position = 'absolute';
    canvasEl.style.top = '0';
    canvasEl.style.left = '0';
    canvasEl.style.zIndex = '1';

    const startbutton = document.createElement("button");
    startbutton.textContent = "Start!";
    startbutton.classList.add("start-button");
    container.append(startbutton);

    startbutton.addEventListener("click", () => {
        const game = new Game();
        new GameView(game, ctx).start();
        container.removeChild(startbutton);
    });

    
    
});