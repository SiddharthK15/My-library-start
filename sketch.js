var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(200, 200, 80, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  fixedRect.debug = true ;
  movingRect.debug = true;
  movingRect.velocityX = 7;
  fixedRect.velocityX = -7;
}

function draw() {
  background(0);  
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;*/

bounceOff(movingRect, fixedRect);
if(isTouching(movingRect, fixedRect)){
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}
else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}


  drawSprites();
}


