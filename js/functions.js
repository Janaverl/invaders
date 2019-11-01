// everything for the hero

function positionHero(left, top){
  var hero = {
    left: left,
    top: top,
  }
  return hero;
}

function drawHero(){
  document.getElementById('hero').style.left = hero.left + "px";
}

function moveLeft(){
  hero.left = hero.left -10;
  drawHero();
}

function moveRight(){
  hero.left = hero.left +10;
  drawHero();
}

// everything for the enemies

function positionEnemysRandom(startTop, number, distance){
  var enemies = [];

  var distanceToTop = startTop;

  for(i=0; i<number; i++){
      enemies.push({
          left: Math.floor(Math.random() * (1000 - 200)) + 200,
          top: distanceToTop,
      });
      distanceToTop -= distance;
  }

  return enemies;
}

function drawEnemies(array){
    document.getElementById('enemies').innerHTML = "";
    
    for (var teller = 0; teller < array.length; teller++){
        document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${array[teller].left}px; top:${array[teller].top}px'></div>`;
    }
}

function moveEnemies(array, speed){
  for(var teller = 0; teller < array.length; teller++){
    array[teller].top = array[teller].top += speed;
  }
}

// everything for the missiles
function shootMissile(array){
  array.push({
    left: hero.left+50,
    top: hero.top,
})
}

function drawMissiles(array){
  document.getElementById('missiles').innerHTML = "";

  for (var teller = 0; teller < array.length; teller++){
      document.getElementById('missiles').innerHTML += `<div class='missile' style='left:${array[teller].left}px; top:${array[teller].top}px'></div>`;
  }
}

function moveMissiles(array){
  for(var teller = 0; teller < array.length; teller++){
    array[teller].top = array[teller].top -= 10;
  }
}

// hit an enemie with a missile
function hitAnEnnemy(arrayEnemies, arrayMissiles){
  for (var t = 0; t < arrayEnemies.length; t++){
      for (var i=0; i < arrayMissiles.length; i++){
          if(
              arrayMissiles[i].top <= (arrayEnemies[t].top + 50)
              &&
              arrayMissiles[i].top >= arrayEnemies[t].top
              &&
              (arrayMissiles[i].left) >= arrayEnemies[t].left
              &&
              arrayMissiles[i].left <= (arrayEnemies[t].left + 50)
          ){
              arrayEnemies.splice(t, 1);
              arrayMissiles.splice(i, 1);
          }
      }
  }
}

// catch an enmie with the hero

function catchAnEnnemy(array, animation = ""){
  for (var t = 0; t < array.length; t++){
    if(
        500 <= (array[t].top + 50)
        &&
        550 >= (array[t].top + 50)
        &&
        hero.left <= array[t].left
        &&
        (hero.left+150) >= array[t].left
    ){array.splice(t, 1);
      if(animation != ""){
        document.getElementById('hero').className += animation;
        setTimeout(function() {
            document.getElementById('hero').classList.remove(animation);
        }, 500);
      }
    }
  }
}

// stop or pause the game
function myStopFunction() {
  clearTimeout(game);
}

function startOrPause(){
  if(document.getElementById('text').innerHTML === ""){
    myStopFunction();
    document.getElementById('text').innerHTML = "<h1>pauze</h1>";
  } else if(document.getElementById('text').innerHTML != "<h1>game over!</h1>" ){
    gameLoop();
    document.getElementById('text').innerHTML = "";
  }
}

// end of the game
function endGame(array){
  for (var t = 0; t < array.length; t++){
      if((array[t].top + 50) > 600){
          myStopFunction();
          document.getElementById('text').innerHTML = "<h1>game over!</h1>";
      }
  }
  if(array.length == 0){
      document.getElementById('text').innerHTML = "<h1>You won!</h1>";
  }
}