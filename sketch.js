

var car, wall;

var speed, weight;

var lamboImage;
var brickImage;

function preload(){

lamboImage = loadImage("cartoonLambo.png")
brickImage = loadImage("brickWall.png");

}


function setup() {
  createCanvas(1600,400);

  speed=random(1,180);
  //(55,90);
  weight=random(400, 1500)

  car=createSprite(50, 200, 50, 50);
  car.addImage(lamboImage);
  car.scale = 0.4;
  car.setCollider('rectangle',0,0,700,50);

  wall=createSprite(1500,200, 60, height/2);
  wall.addImage(brickImage);
  wall.scale = 0.5;
  wall.setCollider('circle',0,0,100);

  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  

 if((0.5*weight*speed*speed)/22500 >= 180) {
   textSize(20);
   fill("red");
   text("RED", car.x, car.y - 80);
   //car.shapeColor = "red";
     //(0,255,0);
    }

 if((0.5*weight*speed*speed)/22500 <= 180 && (0.5*weight*speed*speed)/22500 > 100) {
  textSize(20);
  fill("yellow");
  text("YELLOW", car.x, car.y - 80);
    //car.shapeColor = "yellow";
      //(230,230,0);
   }

 if((0.5*weight*speed*speed)/22500 <= 100) {
  textSize(20);
  fill("green");
  text("GREEN", car.x, car.y - 80);
  //car.shapeColor = "green";
    //(255,0,0);
   }  

  car.collide(wall);
  
  drawSprites();
}