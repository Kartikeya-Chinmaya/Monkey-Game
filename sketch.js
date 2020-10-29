
var monkey , monkey_running;
var banana ,BananaImage, Obstacle, ObstacleImage;
var FoodGroup, obstacleGroup;
var score = 0,survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  BananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
 
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log (ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
background("cyan");
  
   
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,450,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,10,50);
  
  
  if(ground.x<200){
    
    ground.x = ground.width/2;
  
  }
  
  if(keyDown("space") && monkey.y >= 314){
    monkey.velocityY = -15;
  }
   monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  
  if(monkey.isTouching(FoodGroup)){
    score = score+1;
    FoodGroup.destroyEach();
  }
  
  
  
 
  Food();
  Obstacles();
  
  drawSprites();
}
function Food(){
   if(World.frameCount%80===0){
  banana = createSprite(400,200,20,20);
  banana.addImage(BananaImage);
  banana.y = Math.round(random(200,315));
  banana.setLifetime = 100;  
  banana.scale = 0.1;
     banana.velocityX = -4;
     
  FoodGroup.add(banana);
  
}
}



function Obstacles(){
  
  if(World.frameCount%300===0){
  Obstacle = createSprite(400,330,20,20);
  Obstacle.addImage(ObstacleImage);
  Obstacle.setLifetime = 100;  
  Obstacle.scale = 0.1;
  Obstacle.velocityX = -4;
  obstacleGroup.add(Obstacle);   
  
  } 
}
















