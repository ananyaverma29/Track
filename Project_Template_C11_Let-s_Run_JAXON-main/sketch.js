var trackimg;
var track;
var boyrun;
var boy, invisibleGround;
function preload()
{
  //pre-load images
trackimg = loadImage("path.png");
boyrun = loadAnimation("Runner1.png","Runner2.png");

}

function setup()
{
  createCanvas(400,400);
  //create sprites here
track = createSprite(200,200);
 track.addImage("tracking",trackimg);
track.velocityY = 4;
track.scale = 1.2;

boy = createSprite(100,100,20,20);
boy.addAnimation("running",boyrun);
boy.scale = 0.05;

invisibleGround = createSprite(370,370,75,800);
  // invisibleGround.visible = false;
    invisibleGround2 = createSprite(10,10,75,800);
   invisibleGround2.visible = false;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
  if(track.y>400)
{
  track.y = height/2;
}


boy.collide(invisibleGround);
boy.collide(invisibleGround2);
drawSprites();
}
