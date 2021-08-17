var seaImage,shipImage
function preload(){
seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImage)
sea.velocityX=-5
sea.scale =0.3
sea.x=sea.width/8
  ship=createSprite(130,200)
  ship.addAnimation("moveingship",shipImage)
  ship.scale=0.2
}

function draw() {
  background("blue");
  sea.velocityX=-2
if(sea.x<0){
  sea.x=sea.width/8
}
 drawSprites()
}


