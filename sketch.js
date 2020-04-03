function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
var raindrop1=createSprite(10,20,100,10);
var raindrop2=createSprite(30,20,100,15);
var raindrop3=createSprite(60,200,100,12);
var raindrop4=createSprite(130,70,100,18);
var raindrop5=createSprite(350,230,100,30);
var raindrop6=createSprite(250,170,100,30);
}
function preload(){
raindrop1img=loadImage("R1.png");
raindrop2img=loadImage("R1.png");
raindrop3img=loadImage("R1.png");
raindrop4img=loadImage("R1.png");
raindrop5img=loadImage("R1.png");
raindrop6img=loadImage("R1.png");
raindrop1Image=(raindrop1img,0,0)
raindrop2Image=(raindrop2img,0,0)
raindrop3Image=(raindrop3img,0,0)
raindrop4Image=(raindrop4img,0,0)
raindrop5Image=(raindrop5img,0,0)
raindrop6Image=(raindrop6img,0,0)

}

function display (){
raindrop1.display;
raindrop2.display;
raindrop3.display;
raindrop4.display;
raindrop5.display;
raindrop6.display;
}
function draw() {
  background(255,255,255);  
 raindrop1=raindrop1img;
 raindrop2=raindrop2img; 
 raindrop3=raindrop3img;
 raindrop4=raindrop4img;
 raindrop5=raindrop5img;
 raindrop6=raindrop6img;
  drawSprites();
}