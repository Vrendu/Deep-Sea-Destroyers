# Deep-Space-Destroyers

Background:

The user controls a ship and shoots projectiles at enemy bugs that are also shooting down.


Functionality & MVPs

In Deep Space Destroyers, users will be able to:

- use the keyboard to move ship freely and shoot projectiles to kill enemy ships


- utilize start, pause, and restart buttons to pause, start, and restart the game respectively.

<img width="500" alt="Start Screen" src="https://user-images.githubusercontent.com/93363393/230449660-1b162e7b-0cb3-4d89-8c30-2b913c8d69e7.png">
<img width="500" alt="Pause Button screenshot" src="https://user-images.githubusercontent.com/93363393/230449737-17a74b9b-38ec-40c4-a6a4-c1fc075740b0.png">
<img width="500" alt="Play Button screenshot" src="https://user-images.githubusercontent.com/93363393/230449812-7926f794-96a7-4948-b821-5e9471be7daa.png">
<img width="500" alt="restart screenshot" src="https://user-images.githubusercontent.com/93363393/230451303-161017e9-1ec6-4b4a-9f58-6da945652c4a.png">


- navigate to my Github and LinkedIn
<img width="303" alt="links" src="https://user-images.githubusercontent.com/93363393/230450376-6c993c1d-27eb-48fa-b363-263dd027dc9f.png">


Libraries used:
- Canvas API
  - Layered game canvas, gif canvas and textbox canvas over an underlying canvas which renders the moving stars in the background. 
  - Game canvas is where main game is rendered, utilizes GameObject, Game, GameView, Ship, Enemy and Projectile classes in Javascript to define the         behaviors and functionality described above. 
  - the gif and textbox are each rendered on a separate canvas, the functionality to do this is defined in the entry javascript file. 
  - stars are created in a star generator function defined and exported from its own Javascript file. Array of stars of varying sizes and speeds is created and drawn on the canvas, and each star is moved every frame of the animation. The varying sizes and speeds gives the 3-dimensional effect of the background.
  - All other animations are rendered using spritesheets to display a specific different image every frame, giving the desired effect.  
- Keymaster
  - keymaster library used to track user input necessary to move the ship and fire projectiles. Uses WASD keys to move and the spacebar to shoot.    



This project also includes wireframe of original design idea for the project, titled Deep Sea Destroyers

Future Features: 
- choose from a selection of battleships
- turn music on or off
- collision graphics
- boss fight/extra levels
