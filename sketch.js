
var hour,minute,sceond;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}



function draw() {
  background(255,255,255);  
  
  
  
  hr = hour();
  mn = minute();
  sc = second();

  
 


  push();
  scAngle = map(sc,0,60,0,360)
  rotate(scAngle);
  stroke(225,0,);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  push();
  mnAngle = map(mn,0,60,0,360)
  rotate(mnAngle);
  stroke(225,0,);
  strokeWeight(7);
  line(0,0,100,0);
  pop();




  
  
  drawSprites();

}