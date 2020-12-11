var car, wall; 
var speed, weight; 



function setup() {

  createCanvas(1400,400);

  speed=random(30,100);
  weight=random(700,2500);
  
  car=createSprite(50, 200, 50,50);
  car.shapeColor="white";
  car.scale=0.5;
  car.velocityX=speed;

  wall=createSprite(1340, 200, 40, 200);
  wall.shapeColor="grey";

}

function draw() {
  background("black");

  
isTouching();
  drawSprites();
}
