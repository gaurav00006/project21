function isTouching(){
    if (car.x - wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2){
      car.velocityX=0;
  
      
        car.shapeColor="RED"
      
      
    }
  
  
  }