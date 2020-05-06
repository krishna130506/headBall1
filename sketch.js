var player1,player2,ball;
var gp1,gp2,field;
var database;
var game, form, player;
var player1Img,player2Img,ballImg,backgroundImg;
var timerValue=90;
var playerCount=0;
var gameState=0;
var gp1Img,gp2Img,fieldImg;
var fans;

function preload() {
  //  backgroundImg = loadImage("background.jpg");
    gp1Img = loadImage("goalpost1.jpg");
    gp2Img = loadImage("goalpost2.jpg");
    fieldImg = loadImage("field.jpg");
    player1Img = loadImage("player1.jpg");
    player2Img = loadImage("player2.jpg");
    ballImg = loadImage("ball.jpg");
}


function setup() {
var canvas = createCanvas(displayWidth-30,displayHeight-250);
    database = firebase.database();
    game=new Game();
    game.getState();
    game.start();
    setInterval(timeIt, 1000);
    

}

function draw() {
    background(200);
  
    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        game.play();

    }
    if(gameState===2){
        game.end();
    }

   // player1.display();
    //player2.display();
}


function timeIt() {
    if(timerValue>0){
        timerValue--;
    }
}