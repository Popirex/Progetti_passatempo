class Celle{
  
  //DEFINISCO UNA POSIZIONE E UNO STATO(0/1) PER LA CELLA
  constructor(x,y,stato){
    this.x = x;
    this.y = y;
    this.stato = stato;
    this.r = 20;
  }
  
  disegnaCella(){
  
    stroke(1);

    if(this.stato) fill('black');
    else fill('white');
    square(this.x, this.y, this.r);
    
  }
  
}