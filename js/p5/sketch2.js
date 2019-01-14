var tileCountX = 10;
var tileCountY = 10;
var tileWidth, tileHeight;

var count = 0;
var colorStep = 15;
var circleCount;
var endSize, endOffset;

var actRandomSeed = 0;


function setup() { 
  createCanvas(780, 780);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
} 


function draw() { 
  smooth();
  noFill();
  stroke(0, 128);
  background(255); 
  randomSeed(actRandomSeed);
  push();
  translate((width/tileCountX)/2, (height/tileCountY)/2);

  circleCount = mouseX/30 + 1;
  endSize = map(mouseX, 0,width, tileWidth/2.0,0);
  endOffset = map(mouseY, 0,height, 0,(tileWidth-endSize)/2);
  pop();
  for (var gridY=0; gridY<=tileCountY; gridY++) {
    for (var gridX=0; gridX<=tileCountX; gridX++) {  
      push();
      translate(tileWidth*gridX, tileHeight*gridY);
      scale(1, tileHeight/tileWidth);

      var toggle = int(random(0,4));
      if (toggle == 0) rotate(-HALF_PI);  
      if (toggle == 1) rotate(0);  
      if (toggle == 2) rotate(HALF_PI);  
      if (toggle == 3) rotate(PI);  
      
      // draw module
      for(var i=0; i<circleCount; i++) {
        var diameter = map(i, 0,circleCount-1, tileWidth,endSize);
        var offset = map(i, 0,circleCount-1, 0,endOffset);
        ellipse(offset, 0, diameter,diameter);
      }
      pop();
    }
  }

} 


function mousePressed() {
  actRandomSeed = int(random(100000));
}


function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_1_3_01.png");
}
