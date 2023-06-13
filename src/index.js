//import { set } from "core-js/core/dict";
import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";
import * as StarGenerator from "./scripts/star_generator.js"

StarGenerator.generateStars();

document.addEventListener("DOMContentLoaded", () => {

    animateTextBox();
    animateGif();
   displayControls();

    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;
    const ctx = canvasEl.getContext("2d");

    canvasEl.style.position = 'absolute';
    canvasEl.style.top = '0';
    canvasEl.style.left = '0';
    canvasEl.style.zIndex = '1';
  
    let gameview = new GameView(ctx);
});

function animateGif() {
    
    const gifCanvas = document.getElementById("vehicle-gif");
    const ctx = gifCanvas.getContext("2d");
    gifCanvas.height = 250;
    gifCanvas.width = 400;
    ctx.clearRect(0, 0, gifCanvas.width, gifCanvas.height);
    const img = new Image();
    img.src = "assets/vehicle-2.png"; 

    let frameIndex = 0;
    const spriteWidth = 528;
    const spriteHeight = 375;

    function update() {   
        ctx.drawImage(img, frameIndex * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, gifCanvas.width, gifCanvas.height);
        frameIndex = (frameIndex + 1) % 3; 
        requestAnimationFrame(update);
    }

    img.onload = function () {
        update();
    }
}

function animateTextBox(){
     const textCanvas = document.getElementById("text-gif");
     const ctx2 = textCanvas.getContext("2d");
     textCanvas.height = 300;
     textCanvas.width = 420;
      const textbox = new Image();
    textbox.src = "assets/textbox.png";
    let textFrame = 0;
    const textWidth = 594;
    const textHeight = 168;
    function update() {
        ctx2.clearRect(0, 0, textCanvas.width, textCanvas.height);
        ctx2.drawImage(
            textbox,
            textFrame * textWidth,
            0,
            textWidth,
            textHeight,
            0,
            0,
            textCanvas.width,
            textCanvas.height
        );

        textFrame = (textFrame + 1) % 108;

        if (textFrame === 0) {
            // After the final frame, wait for 5 seconds before continuing the loop
            setTimeout(() => {
                requestAnimationFrame(update);
            }, 5000);
        } else {
            setTimeout(() => {    
                requestAnimationFrame(update);
            }, 50);
        }
    }
    textbox.onload = function () {
        update();
    }
}





function displayControls() {
    const canvas = document.getElementById("controls");
    const context = canvas.getContext("2d");
    canvas.height = 300;
    canvas.width = 300;

    const controls = new Image();
    controls.addEventListener('load', function () {
        context.drawImage(controls, 0, 0, 970, 647, 0, 0, canvas.width, canvas.height);
    });
    controls.src = "assets/controls.png";
}

