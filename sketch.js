var canvas,backgroundImg;
var database;
var form , player , game;
var gameState = 0;
var playerCount;
function setup(){
  canvas = createSprite(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){

}

