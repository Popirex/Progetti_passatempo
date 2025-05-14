
let celle = [];
let n = 0;
let px = 200;
let py = 200;
let indice = 0;
let fx = 0;
let fy = 0;


function setup() {
  
  createCanvas(420, 420);
  
  
  for(let x = 0; x< width; x+=20){
    
    for(let y = 0; y < height; y+= 20){
      if(x == px && y == py){
         celle[n] = new Celle(x,y,true);
         indice = n;
      }

      else{celle[n] = new Celle(x,y,false);}
      n++;
      
    }
  }
  
  
}

function draw() {
  frameRate(1);
  background('green');

  for(let i = 0; i < celle.length;i++){

    celle[i].disegnaCella();

    if(i == indice && celle[i].stato == true){
      fx = celle[i].x;
      fy = celle[i].y + 20;
      for(let j = 0; j < celle.length;j++){
        if(fx == celle[j].x && fy == celle[j].y){
          indice = j;
          console.log('if numero 1:' + fx+ ' ' + fy);
        }
      }
    }
    else if(i == indice && celle[i].stato == false){
      fx = celle[i].x - 20;
      fy = celle[i].y;

      for(let j = 0; j < celle.length;j++){
        if(fx == celle[j].x && fy == celle[j].y){
          indice = j;
          celle[j].stato = true;
          console.log('if numero 2:' + fx+ ' ' + fy);
        }
      }
    }




  }

}

