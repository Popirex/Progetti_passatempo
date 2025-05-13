
let celle = [];
let n = 0;
let px = 200;
let py = 200;


function setup() {
  
  createCanvas(420, 420);
  
  
  for(let x = 0; x< width; x+=20){
    
    for(let y = 0; y < height; y+= 20){
      if(x == px && y == py){
         celle[n] = new Celle(x,y,true);
      
      }
      else{celle[n] = new Celle(x,y,false);}
      n++;
      
    }
  }
  
  
}

function draw() {
  n = 0;
  background('green');
  for(let i = 0; i < celle.length;i++){
  celle[i].disegnaCella();
    
}
}