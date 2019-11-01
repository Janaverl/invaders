// setting positions and arrays of all the animated elements
var hero = positionHero(600, 480);

var enemies = positionEnemysRandom(0, 10, 100);

drawEnemies(enemies);


document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode === 13){
        startOrPause();
    } else if(e.keyCode === 37){
        moveLeft();
    } else if(e.keyCode === 39){
        moveRight();
    } 
}

// function catchAnEnnemy(){
//     for (var t = 0; t < enemies.length; t++){
//             if(
//                 500 <= (enemies[t].top + 50)
//                 &&
//                 550 >= (enemies[t].top + 50)
//                 &&
//                 hero.left <= enemies[t].left
//                 &&
//                 (hero.left+150) >= enemies[t].left
//             ){
//                 enemies.splice(t, 1);
//             }
//     }
// }


// gameloops

var game;

function gameLoop(){
    game = setTimeout(gameLoop, 100);
    drawEnemies(enemies);
    moveEnemies(enemies, 8);
    catchAnEnnemy(enemies);
    endGame(enemies);
}

