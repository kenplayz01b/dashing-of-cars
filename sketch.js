var car , c2 , c3 , c4 , wall , w2 , w3 , w4 ;

var speed , weight;

function setup() {
  createCanvas(800,400);

 speed=random(55,90)
 weight=random(400,1500);

car=createSprite(50, 50, 10, 10);
car.velocityX=speed;


c2=createSprite(50, 150, 10, 10);
c2.velocityX=speed;


c3=createSprite(50, 250, 10, 10);
c3.velocityX=speed;


c4=createSprite(50, 350, 10, 10);
c4.velocityX=speed;



wall=createSprite(700,50,10,50);


w2=createSprite(700,150,10,50);


w3=createSprite(700,250,10,50);


w4=createSprite(700,350,10,50); 






}

function draw() {
  background("black");  
if (wall.X-car.X<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5 * weight * speed/22509;
if(deformation>180){
  car.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
if (deformation<100){
  car.shapeColor=color(0,255,0);
}

if (wall.X-c2.X<(c2.width+w2.width)/2){
  car.velocityX=0;
  var deformation=0.5 * weight * speed/22509;
  if(deformation>180){
    c2.shapeColor=color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    c2.shapeColor=color(230,230,0);
  }
  if (deformation<100){
    c2.shapeColor=color(0,255,0);
  }
  
  if (wall.X-c3.X<(c3.width+w3.width)/2){
    c3.velocityX=0;
    var deformation=0.5 * weight * speed/22509;
    if(deformation>180){
      c3.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      c3.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      c3.shapeColor=color(0,255,0);
    }
    

    if (wall.X-c4.X<(c4.width+w4.width)/2){
      c4.velocityX=0;
      var deformation=0.5 * weight * speed/22509;
      if(deformation>180){
        c4.shapeColor=color(255,0,0);
      }
      if (deformation<180 && deformation>100){
        c4.shapeColour=color(230,230,0);
      }
      if (deformation<100){
        c4.shapeColor=color(0,255,0);
      }




    }

    }
}




  }


  if(wall.isTouching(car) && car.bounceOff(wall)){
    b1.shapeColor = "blue"
    music.play();
}
if(w2.isTouching(c2) && c2.bounceOff(w2)){
    b1.shapeColor = "red"
    music.stop();
}
if(w3.isTouching(c3) && c3.bounceOff(w3)){
    b1.shapeColor = "orange"
    
}
if(w4.isTouching(c4) && c4.bounceOff(w4)){
    b1.shapeColor = "pink"
  
}

  drawSprites();
}