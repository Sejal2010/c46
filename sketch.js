var rocketImg,rockImg,spaceImg;
var rocket,rock,space;

function preload(){
rocketImg=loadImage("./images coding/rocket.png");
rockImg=loadImage("./images coding/rock.png");
spaceImg=loadImage("./images coding/space.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  space=createSprite(windowWidth-700, windowHeight, windowWidth*2, 100000);
  space.addImage(spaceImg);
  
  rocket=createSprite(windowWidth/2, windowHeight/2, 50, 50);
  rocket.addImage(rocketImg);
  rocket.scale=0.5;

}

function draw() {
  background("black");  
  drawSprites();

  if(space.y>1000){
    space.y=0
  }
}
function movementOfRockets(){
  if(keyDown=RIGHT){
    rocket.x=+2
  }
  if(keyDown=LEFT){
    rocket.x=-2
  }
}
function mouseClicked(){
    space.velocityY=2;
}