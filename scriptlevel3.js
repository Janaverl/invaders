// setting positions and arrays of all the animated elements

var hero = {
    left: 600,
    top: 480,
}

// var missiles = [];

var enemies = [];

var topv = 0;

for(i=0; i<20; i++){
    enemies.push({
        left: Math.floor(Math.random() * (1000 - 200)) + 200,
        top: topv,
    });
    topv -= 200;
}

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
    } 
}

function drawHero(){
    document.getElementById('hero').style.left = hero.left + "px";
}

function drawEnemies(){
    document.getElementById('enemies').innerHTML = "";
    
    for (var teller = 0; teller < enemies.length; teller++){
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[teller].left}px; top:${enemies[teller].top}px'></div>`;
    }
}

drawEnemies();

function moveEnemies(){
    for(var teller = 0; teller < enemies.length; teller++){
        enemies[teller].top = enemies[teller].top += 8;
    }
}

function catchAnEnnemy(){
    for (var t = 0; t < enemies.length; t++){
            if(
                500 <= (enemies[t].top + 50)
                &&
                550 >= (enemies[t].top + 50)
                &&
                hero.left <= enemies[t].left
                &&
                (hero.left+150) >= enemies[t].left
            ){
                enemies.splice(t, 1);
                // var el = document.getElementById('hero');
                // console.log(el);
                document.getElementById('hero').className += 'wobble-hor-bottom';
                setTimeout(function() {
                    document.getElementById('hero').classList.remove("wobble-hor-bottom");
                    //your code to be executed after 1 second
                }, 500);
            }
    }
}

function endGame(){
    for (var t = 0; t < enemies.length; t++){
            if((enemies[t].top + 50) > 600){
                myStopFunction();
                document.getElementById('text').innerHTML = "<h1>game over!</h1>";
            }
        }
    if(enemies.length == 0){
        document.getElementById('text').innerHTML = "<h1>You won!</h1>";

    }
}


// gameloops

var game;

function gameLoop(){
    game = setTimeout(gameLoop, 100);
    drawEnemies();
    moveEnemies();
    catchAnEnnemy();
    endGame();
}

function myStopFunction() {
    clearTimeout(game);
  }

