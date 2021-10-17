function setup() {
  createCanvas(640,360);


}

function draw() {
  background(230,230,250);  

 
spawnDrop(); 
spawnDrop2();
spawnDrop3();
spawnDrop4();
spawnDrop5();
spawnDrop6();
    
drawSprites();
}

function spawnDrop(){

if(frameCount % 3 === 0){


var d1 = createSprite(random(0,640),random(-200,-100),5,10)
d1.velocityY = random(7,12)
d1.shapeColor = "pink"
d1.lifetime = 650
}
}


function spawnDrop2(){

  if(frameCount % 3 === 0){
  
  
  var d2 = createSprite(random(0,640),random(-200,-100),5,10)
  d2.velocityY = random(7,12)
  d2.shapeColor = "yellow"
  d2.lifetime = 650
  }
  }

function spawnDrop3(){

  if(frameCount % 3 === 0){
  
  
  var d3 = createSprite(random(0,640),random(-200,-100),5,10)
  d3.velocityY = random(7,12)
  d3.shapeColor = "green"
  d3.lifetime = 650
  }
  }

  
function spawnDrop4(){

  if(frameCount % 3 === 0){
  
  
  var d4 = createSprite(random(0,640),random(-200,-100),5,10)
  d4.velocityY = random(7,12)
  d4.shapeColor = "indigo"
  d4.lifetime = 650
  }
  }

   
function spawnDrop5(){

  if(frameCount % 3 === 0){
  
  
  var d5 = createSprite(random(0,640),random(-200,-100),5,10)
  d5.velocityY = random(7,12)
  d5.shapeColor = "blue"
  d5.lifetime = 650
  }
  }


   
function spawnDrop6(){

  if(frameCount % 3 === 0){
  
  
  var d6 = createSprite(random(0,640),random(-200,-100),5,10)
  d6.velocityY = random(7,12)
  d6.shapeColor = "mustard"
  d6.lifetime = 650
  }
  }
