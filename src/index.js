import Game from "./scripts/game.js";
import GameView from "./scripts/game_view.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 1000;
    canvasEl.height = 700;

    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    new GameView(game, ctx).start();
});