// setting positions and arrays of all the animated elements
var hero = positionHero(600, 480);

var missiles = [];

var enemies = [
    { left: 200, top: 0 },
    { left: 400, top: 0 },
    { left: 600, top: 0 },
    { left: 800, top: 0 },
    { left: 1000, top: 0 },
    { left: 300, top: 100 },
    { left: 500, top: 100 },
    { left: 700, top: 100 },
    { left: 900, top: 100 },
];

// draw the enemies
drawEnemies(enemies);


document.onkeydown = function(e){
    if(e.keyCode === 13){
        startOrPause();
    } else if(e.keyCode === 37){
        moveLeft();
    } else if(e.keyCode === 39){
        moveRight();
    } else if(e.keyCode === 32){
        shootMissile(missiles);
    }
}


// gameloops

var game;

function gameLoop(){
    console.log("gameloop");
    game = setTimeout(gameLoop, 100);
    moveMissiles(missiles);
    drawMissiles(missiles);
    drawEnemies(enemies);
    moveEnemies(enemies, 2);
    hitAnEnnemy(enemies, missiles);
    endGame(enemies);
}

