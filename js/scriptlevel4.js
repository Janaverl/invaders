// window.alert("check");

var hero = positionHero(600, 480);

var enemiesGood = positionEnemysRandom(0, 10, 250);
var enemiesBad = positionEnemysRandom(-100, 8, 350);

drawEnemies(enemiesGood, 'enemies', 'enemy');
drawEnemies(enemiesBad, 'enemiesBad', 'enemyBad');

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
    drawEnemies(enemiesBad, 'enemiesBad', 'enemyBad');
    drawEnemies(enemiesGood, 'enemies', 'enemy');
    moveEnemies(enemiesBad, 8);
    moveEnemies(enemiesGood, 8);
    catchAnEnnemy(enemiesBad, 'gameOver');
    catchAnEnnemy(enemiesGood, 'wobble-hor-bottom');
    endGame(enemiesGood);
}

