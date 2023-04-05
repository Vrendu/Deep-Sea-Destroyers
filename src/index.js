import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";



document.addEventListener("DOMContentLoaded", () => {

    animateGif();

    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    const ctx = canvasEl.getContext("2d");

    canvasEl.style.position = 'absolute';
    canvasEl.style.top = '0';
    canvasEl.style.left = '0';
    canvasEl.style.zIndex = '1';
   // let game = new Game();
  
    let gameview = new GameView(ctx);

    
});

function animateGif() {
    const gifCanvas = document.getElementById("vehicle-gif");
    const ctx = gifCanvas.getContext("2d");
    const img = new Image();
    img.src = "assets/vehicle-2.png";

    let frameIndex = 0;
    const spriteWidth = 528;
    const spriteHeight = 375;

    function update() {
        ctx.clearRect(0, 0, gifCanvas.width, gifCanvas.height);
        ctx.drawImage(img, frameIndex * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, gifCanvas.width, gifCanvas.height);
        frameIndex = (frameIndex + 1) % 3; 
        requestAnimationFrame(update);
    }

    img.onload = function () {
        update();
    }
}