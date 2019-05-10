'use strict';


// VAR

let level1 = ['#', 0, 0, 0, 0, 0, 0, 'A'];

let user;


let game = {
    level   : level1,
    posX    : 0,
    posY    : 0,
    posXold : 0,
    posYold : 0
}; 


let goRight;    // Aller à droite
let goLeft;     // Aller à gauche
let goUp;       // Monter
let goDown;     // Descendre

let rightArrow;
let leftArrow;
let upArrow;
let downArrow;


// FUNCTIONS


    



// Programme








// DOM CONTENT LOADED


document.addEventListener('DOMContentLoaded', function()
{
    document.addEventListener('keydown', function()
    {
        
        if(game.posX < game.level.length)
        {
            switch (event.code) {
                case 'ArrowRight' :
                    game.posX++;
                    console.log(game.posX);
                    console.log(game.level[game.posX]);
                    break;
            
                case 'ArrowLeft' :
                    game.posX--;
                    break;
                
                case 'ArrowUp' :
                    game.posY++;
                    break;
        
                case 'ArrowDown' :
                    game.posY--;
                    break;
            }
        // console.log(game.posX);
        // console.log(game.posX);
        // console.log(game.level);
        // console.log(game.level.length);
        }
    });
   
});


