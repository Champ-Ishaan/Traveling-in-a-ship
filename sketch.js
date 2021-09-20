var sea, seaImg;
var ship, shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(1000,600);

  sea = createSprite(400, 400, 20, 20);
  sea.addImage("se1",seaImg);
  sea.scale=0.48;
  sea.velocityX=-2;
  sea.x=300;

  ship = createSprite(500, 390, 20, 20);
  ship.addAnimation("s1",shipImg1);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
 if (sea.x < 0) {
   sea.x = 300; 
 }
 drawSprites();
}