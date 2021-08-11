var iss, spacecraft;
var bg, issimg, scimg;
var docked = false;

function preload(){
  bg= loadImage("spacebg.jpg");
  issImg = loadImage("iss.png");
  spacecraftImg = loadImage("spacecraft1.png");
  spacecraftImg1 = loadImage("spacecraft2.png");
  spacecraftImg2= loadImage("spacecraft3.png");
  spacecraftImg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  spacecraft = createSprite(windowWidth/2,windowHeight-100);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.4;
  
  iss = createSprite(windowWidth/2,windowHeight/2-100);
  iss.addImage(issImg);
  iss.scale = 1;
}
function draw() {
  background(bg);
  
  spacecraft.addImage(spacecraftImg);
  if(!docked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftImg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImg1);
  }
}
  if(spacecraft.y <= (iss.y+140) && spacecraft.x <= (iss.x-10)){
    docked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}