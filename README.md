# Deep-Space-Destroyers

Background:

The user controls a ship and shoots projectiles at enemy bugs that are also shooting down.


Functionality & MVPs

In Deep Space Destroyers, users will be able to:

- use the keyboard to move ship freely and shoot projectiles to kill enemy ships
- utilize start, pause, and restart buttons to pause, start, and restart the game respectively.

<img width="500" alt="Start Screen" src="https://user-images.githubusercontent.com/93363393/230449660-1b162e7b-0cb3-4d89-8c30-2b913c8d69e7.png">
    - user can click start button here to start playing the game.
<img width="500" alt="Pause Button screenshot" src="https://user-images.githubusercontent.com/93363393/230449737-17a74b9b-38ec-40c4-a6a4-c1fc075740b0.png">
<img width="500" alt="Play Button screenshot" src="https://user-images.githubusercontent.com/93363393/230449812-7926f794-96a7-4948-b821-5e9471be7daa.png">
    - as seen in these two images, user can pause and unpause game by clicking the pause button located in the bottom left of game canvas, and the button text will toggle between "Pause" and "Play" as needed. 
<img width="500" alt="restart screenshot" src="https://user-images.githubusercontent.com/93363393/230451303-161017e9-1ec6-4b4a-9f58-6da945652c4a.png">
    - upon game ending (either if user ship runs out of health, or all enemies are defeated), the restart button pops up giving the user ability to press restart and end up back at the start screen, in order to start a new game. 


- navigate to my Github and LinkedIn
<img width="303" alt="links" src="https://user-images.githubusercontent.com/93363393/230450376-6c993c1d-27eb-48fa-b363-263dd027dc9f.png">
  - links are provided to my Github and LinkedIn profiles to get more information about me and my other projects. 


Libraries used:
- Canvas API
  - Layered game canvas, gif canvas and textbox canvas over an underlying canvas which renders the moving stars in the background. 
  - stars are created in a star generator function defined and exported from its own Javascript file. Array of stars of varying sizes and speeds is created and drawn on the canvas, and each star is moved every frame of the animation. The varying sizes and speeds gives the 3-dimensional effect of the background.
  
    ``` 
      for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (maxSize - minSize) + minSize,
            speed: Math.random() * speed + 0.1
        });
      }
      function drawStars() {
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            star.x -= star.speed;
            if (star.x < -star.size) {
                star.x = canvas.width + star.size;
            }
        }
      }
    ``` 
  
  - Game canvas is where main game is rendered. The Game class contains instances of GameView, Ship, Projectile, and Enemy classes which each define their unique functionality and behavior: 
  
        ``` 
        class Game {
            constructor(gameview){
            this.enemies = [];
            this.projectiles = [];
            this.ships = [];
            this.points = 0;
            this.addEnemies();   
            this.gameview = gameview;
            }
            // rest of Game class functions... 
         }
        ```
       
  - The game canvas then renders each frame according to the defined behavior and functionality of the ship, enemies, and projectiles
       
  - the gif and textbox are each rendered on a separate canvas, the functionality to do this is defined in the entry javascript file. 
    ```
    
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
                ctx2.drawImage(textbox, textFrame * textWidth, 0, textWidth, textHeight, 0, 0, textCanvas.width, textCanvas.height);
                textFrame = (textFrame + 1) % 108;
                requestAnimationFrame(update);
            }
            textbox.onload = function () {
                update();
            }
        }
        
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
        
        ```
  - All other animations are rendered using spritesheets to display a specific different image every frame, giving the desired effect.  
 
    ``` 
    
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
              this.eachWidth = 128; 
              this.eachHeight = 128; 
              this.numFrames = 16; 
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
      
    ```
- Keymaster
  - keymaster library used to track user input necessary to move the ship and fire projectiles. Uses WASD keys to move and the spacebar to shoot.    



This project also includes wireframe of original design idea for the project, titled Deep Sea Destroyers

Future Features: 
- choose from a selection of battleships
- turn music on or off
- collision graphics
- boss fight/extra levels
