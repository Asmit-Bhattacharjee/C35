var ball;
var database, position;
var form, game, player;
var gameState = 0;
var playerCount;

function setup(){
    createCanvas(400,400);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    //textSize(30); fill("black"); text(mouseX + "," + mouseY,30,30);
}
