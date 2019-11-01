var hero = positionHero(600, 480);

var enemies = positionEnemysRandom(0, 10, 100);

    drawEnemies(enemies, 'enemies', 'enemy');


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

// gameloops
var game;

function gameLoop(){
    game = setTimeout(gameLoop, 100);
        drawEnemies(enemies, 'enemies', 'enemy');
    moveEnemies(enemies, 8);
    catchAnEnnemy(enemies);
    endGame(enemies);
}

