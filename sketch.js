var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1500,200,thickness,height / 2);
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;
  
  if(wall.x - bullet.x < (bullet.width + wall.width)/ 2){
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed / thickness ^ 3;
      if(damage > 3.68){
         wall.shapeColor = color(255,0,0);
      }
      if(damage < 12.43 && deformation > 3.68){
         wall.shapeColor = color(230,230,0);
      }
      if(damage < 12.43){
         wall.shapeColor = color(0,255,0);
      }
     
  }
  drawSprites();
}