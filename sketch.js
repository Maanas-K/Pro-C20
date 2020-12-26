var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  

  movingRect= createSprite(750,200,30,30);
  movingRect.velocityX=-2;
  fixedRect.velocityX=2;

}

function draw() {
  background(255,255,255);  

  /*movingRect.x=World.mouseX;
  movingRect.y= World.mouseY;*/

 
/*if(((movingRect.x-fixedRect.x)<(movingRect.width/2+fixedRect.width/2))&&(fixedRect.x-movingRect.x)<(movingRect.width/2+fixedRect.width/2)&&
((movingRect.y-fixedRect.y)<(movingRect.height/2+fixedRect.height/2))&&(fixedRect.y-movingRect.y)<(movingRect.height/2+fixedRect.height/2)){
  movingRect.shapeColor="red";
  fixedRect. shapeColor="red";
}else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}*/

if((abs(movingRect.x-fixedRect.x)<(movingRect.width/2+fixedRect.width/2))&&
(abs(movingRect.y-fixedRect.y)<(movingRect.height/2+fixedRect.height/2))){
  movingRect.shapeColor="red";
  fixedRect. shapeColor="red";

  
}else{
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";

}

if((abs(movingRect.x-fixedRect.x)<(movingRect.width/2+fixedRect.width/2))){

  fixedRect.velocityX=fixedRect.velocityX*-2;
  movingRect.velocityX=movingRect.velocityX*-2;
}


  drawSprites();
}