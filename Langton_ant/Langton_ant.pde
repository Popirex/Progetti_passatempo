int[][] griglia;
int x;
int y;
int direzione;
boolean attivato = false;

int SU = 0;
int DX = 1;
int GIU = 2;
int SX = 3;

void mousePressed(){
    attivato = !attivato;
  }

//FUNZIONI PER GIRARE LA FORMICA E ANDARE AVANTI

void avanti(){
  switch(direzione){
    case 0:
          y--;
          break;
    case 1:
          x++;
          break;
    case 2:
          y++;
          break;
    case 3:
          x--;
          break;
          
  }
  
  //SE LA FORMICA ESCE DALLO SCHERMO RIENTRA DALLA PARTE OPPOSTA
  
  if(x < 0){x = width-1;}
  else if(x > width-1){x = 0;}
  else if(y < 0){y = height-1;}
  else if(y > height-1){y = 0;}
  
}

void giraDX(){
  direzione++;
  if(direzione > SX){direzione = SU;}
}

void giraSX(){
  direzione--;
  if(direzione < SU){ direzione = SX;}
}


void setup(){
  size(200,200);
  
  //fullScreen();
  
  griglia = new int[width][height];
  x = floor(random(width));
  y = floor(random(height));
  direzione = SU;
  griglia[x][y]  = 1;

} 




void draw(){
  background(225);
  
  if(mousePressed){
  mousePressed();
  }
  
  if(attivato){
  

  
 for(int n = 0; n < 1;n++){
  int stato = griglia[x][y];
  
  if(stato == 0){
    giraDX();
    griglia[x][y] = 1;
  }
  
  else if(stato == 1){
    giraSX();
    griglia[x][y] = 0;
  }  

  avanti();
  }
  
  loadPixels();
  for(int i = 0; i < width; i++){
  
    for(int j = 0; j < height; j++){
  
      int pix = i + width * j;
    
      if(griglia[i][j] == 0){
        pixels[pix] = color(255);
      }
      else{
        pixels[pix] = color(0);
      }
      }
    
  }
  
  updatePixels();
  }
}
