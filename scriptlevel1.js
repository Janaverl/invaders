// setting positions and arrays of all the animated elements

var hero = {
    left: 600,
    top: 480,
}

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
    // { left: 400, top: 200 },
    // { left: 600, top: 200 },
    // { left: 800, top: 200 },
];


drawEnemies();

document.onkeydown = function(e){
    console.log(e);
    if(e.keyCode === 13){
        // to start and to pause
        if(document.getElementById('text').innerHTML === ""){
            myStopFunction();
            document.getElementById('text').innerHTML = "<h1>pauze</h1>";
        } else if(document.getElementById('text').innerHTML != "<h1>game over!</h1>" ){
            gameLoop();
            document.getElementById('text').innerHTML = "";
        }
    } else if(e.keyCode === 37){
        hero.left = hero.left -10;
        console.log(hero.left);
        drawHero();
    } else if(e.keyCode === 39){
        console.log("right");
        hero.left = hero.left +10;
        console.log(hero.left);
        drawHero();
    } else if(e.keyCode === 32){
        missiles.push({
            left: hero.left+50,
            top: hero.top,
        })
        // console.log(missiles);
        drawMissiles();
    }
}

function drawHero(){
    document.getElementById('hero').style.left = hero.left + "px";
}

// We stoppen pas met het doorlopen van de loop als de teller gelijk is aan de lengte van de array ‘missiles’. Ofwel: Als we 3 misilles hebben afgevuurd moeten we de lus driemaal doorlopen om de positie van ieder missile aan te passen.
function drawMissiles(){
    document.getElementById('missiles').innerHTML = "";

    for (var teller = 0; teller < missiles.length; teller++){
        document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${missiles[teller].left}px; top:${missiles[teller].top}px'></div>`;
        // console.log(teller);
    }
    // console.log(missiles);
}

function moveMissiles(){
    for(var teller = 0; teller < missiles.length; teller++){
        missiles[teller].top = missiles[teller].top -= 10;
    }
}

function drawEnemies(){
    document.getElementById('enemies').innerHTML = "";

    for (var teller = 0; teller < enemies.length; teller++){
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[teller].left}px; top:${enemies[teller].top}px'></div>`;
        // console.log(teller);
    }
    // console.log(missiles);
}

function moveEnemies(){
    for(var teller = 0; teller < enemies.length; teller++){
        enemies[teller].top = enemies[teller].top += 2;
    }
}

function hitAnEnnemy(){
    for (var t = 0; t < enemies.length; t++){
        for (var i=0; i < missiles.length; i++){
            if(
                missiles[i].top <= (enemies[t].top + 50)
                &&
                missiles[i].top >= enemies[t].top
                &&
                (missiles[i].left) >= enemies[t].left
                &&
                missiles[i].left <= (enemies[t].left + 50)
            ){
                enemies.splice(t, 1);
                missiles.splice(i, 1);
            }
        }
    }
}

function endGame(){
    for (var t = 0; t < enemies.length; t++){
        for (var i=0; i < missiles.length; i++){
            if((enemies[t].top + 50) > 600){
                myStopFunction();
                document.getElementById('text').innerHTML = "<h1>game over!</h1>";
            }
        }
    }
    if(enemies.length == 0){
        document.getElementById('text').innerHTML = "<h1>You won!</h1>";

    }
}


// gameloops

var game;

function gameLoop(){
    console.log("gameloop");
    game = setTimeout(gameLoop, 100);
    moveMissiles();
    drawMissiles();
    drawEnemies();
    moveEnemies();
    hitAnEnnemy();
    endGame();
}

function myStopFunction() {
    clearTimeout(game);
  }

