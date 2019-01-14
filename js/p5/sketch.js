// P_2_1_1_04


/**
 * shapes in a grid, that are always facing the mouse
 * 	 
 * MOUSE
 * position x/y        : position to face
 * 
 * KEYS
 * 1-7                 : choose shapes
 * arrow up/down       : scale of shapes
 * arrow left/right    : additional rotation of shapes
 * d                   : toggle. size depending on distance
 * g                   : toggle. grid resolution
 * s                   : save png
 
 */



var tileCount = 14;
var tileWidth, tileHeight;
var shapeSize = 50;
var newShapeSize = shapeSize;
var shapeAngle = 0;
var maxDist;
var currentShape;

var fillMode = 0;
var sizeMode = 0;


function preload(){
  
  currentShape = loadImage("data/module_1.svg");
  currentShape = loadImage("data/module_2.svg");
  currentShape = loadImage("data/module_3.svg");
  currentShape = loadImage("data/module_4.svg");
  currentShape = loadImage("data/module_5.svg");
  currentShape = loadImage("data/module_6.svg");
  currentShape = loadImage("data/module_7.svg");
  currentShape = loadImage("data/module_1.svg");
}


function setup(){
  createCanvas(780, 780);
  background(255);
  smooth();

  tileWidth = width/float(tileCount);
  tileHeight = height/float(tileCount);
  maxDist = sqrt(sq(width)+sq(height));
} 


function draw(){

  background(255);
  smooth();

  for (var gridY=0; gridY<tileCount; gridY++) {
    for (var gridX=0; gridX<tileCount; gridX++) {

      var posX = tileWidth*gridX + tileWidth/2;
      var posY = tileHeight*gridY + tileWidth/2;

      // calculate angle between mouse position and actual position of the shape
      var angle = atan2(mouseY-posY, mouseX-posX) + radians(shapeAngle);
      if (sizeMode == 0) {newShapeSize = shapeSize;}
      if (sizeMode == 1) {newShapeSize = shapeSize*1.5-map(dist(mouseX,mouseY,posX,posY),0,500,5,shapeSize);}
      if (sizeMode == 2) {newShapeSize = map(dist(mouseX,mouseY,posX,posY),0,500,5,shapeSize);}

      push();
      translate(posX, posY);
      rotate (angle);
      imageMode (CENTER);
      scale(newShapeSize/100,newShapeSize/100);
      noStroke();
      shape(currentShape, 0,0, newShapeSize,newShapeSize);
      pop();
    }
  }

}

function shape(currentShape, x,y, newShapeSize,newShapeSize){
  image(currentShape,0,0);
  x=0;
  y=0;
 
}


function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_1_1_04.png");
  if (key == 'd' || key == 'D') sizeMode = (sizeMode+1) % 3;

  if (key == 'g' || key == 'G') {
    tileCount = tileCount+5;
    if (tileCount > 20) {
      tileCount = 10;
    }
    tileWidth = width/float(tileCount);
    tileHeight = height/float(tileCount);
  }

  if (key == '1') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
  if (key == '2') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
  if (key == '3') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
  if (key == '4') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
  if (key == '5') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
  if (key == '6') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
  if (key == '7') currentShape = loadImage("https://habitat-confort-renovation_1542278923.site-privilege.pagesjaunes.fr/wp-content/uploads/sites/6830/2019/01/module_1.svg");
}
  
function keyPressed(){
  if (keyCode == UP_ARROW) shapeSize +=5;
  if (keyCode == DOWN_ARROW) shapeSize = max(shapeSize-5, 5);
  if (keyCode == LEFT_ARROW) shapeAngle -=5;
  if (keyCode == RIGHT_ARROW) shapeAngle +=5;
}  
