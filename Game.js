class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

   
  }

  play(){
    form.hide();
   background(200);
   //createPlayers
   player1=createSprite(displayWidth/2-displayWidth/3,displayHeight/2);
   player1.addImage("player1",player1Img);

   player2=createSprite(displayWidth/2+displayWidth/3,displayHeight/2);
   player2.addImage("player2",player2Img);
   
   gp1 = createSprite(displayWidth/-200,displayHeight/2);
   gp1.addImage("goalpost1.jpg",gp1Img);

   gp2 = createSprite(displayWidth/200,displayHeight/2);
   gp2.addImage("goalpost2.jpg",gp2Img);

   ball = createSprite(displayWidth/2,displayHeight/2-100);
   ball.addImage("ball",ballImg);
   ball.velocityY = 5;


//timer
   if(timerValue>=90){
    text(timerValue,displayWidth/2,displayHeight);
}
if(timerValue<90){
    text(timerValue,displayWidth/2,displayHeight);
}
if(timerValue===0){
    text("game over",displayWidth/2,displayHeight/2);

}

//movement
if(keyIsDown(RIGHT_ARROW)){
  player1.x = player1.x + 1;

}
if(keyIsDown(LEFT_ARROW)){
  player1.x = player1.x-1;
}
if(keyIsDown(UP_ARROW)){
  player1.y+=10;
  if(keyIsDown("space") && player1.isTouching(ball)){
    ball.velocityY = ball.velocityY - 5;
    ball.velocityX = ball.velocityX + 5;

  }
}
player1.y=player1.y-10;


if(keyIsDown(RIGHT_ARROW)){
  player2.x = player2.x + 1;

}
if(keyIsDown(LEFT_ARROW)){
  player2.x = player2.x-1;
}
if(keyIsDown(UP_ARROW)){
  player2.y+=10;
  if(keyIsDown("space") && player2.isTouching(ball)){
    ball.velocityY = ball.velocityY - 5;
    ball.velocityX = ball.velocityX - 5;

  }
}
player2.y = player2.y + 0.8;
player1.y = player2.y + 0.8;
ball.y = ball.y + 0.8;

if(ball.x>)



    drawSprites();
  }

  end(){
    console.log("Game Ended");
   
  }
}
