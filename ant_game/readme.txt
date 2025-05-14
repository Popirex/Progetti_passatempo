Voglio creare una nuova simulazione:
Immagino di avere una stanza, diciamo (400x400)px, suddividiamo questa stanza in celle quadrate da 10 px per lato. Posiziono ora nella cella centrale una formica virtuale, essa interagirera con l'ambiente tramite il cambiamento di colore delle celle, le regole secondo cambiera il colore sono ancora da stabilire ma ci pensero dopo.
Per specificare effettuero questa simulazione principalmente utilizzando javascript e una librearia chiamata p5.js che agevola parecchio le simulazioni.
Inizio col creare la finestra e il sistema di celle, stavo pensando di creare una classe oggetto per tenere conto delle cordinate di ogni singola cella e del suo stato e di creare la formica come oggetto separato. Ma ora rallento un attimo e inizio a programmare.

Perfetto, ora che ho creato una "griglia nera con un quadrato bianco al centro" possiamo procedere. Ora devo definire le regole della mia formica:

PRIMO SET DI REGOLE:
-DATI: 
_le coordinate iniziali della formica f(200,200) (rappresentano la "cella"che va da px x:200-220 && y:200-220)

_lo stato iniziale del blocco su cui poggia la formica è 1 siccome "immagino che la formica abbia marcato con i suoi ormoni la cella" e la disegno di bianco.

Per quanto riguarda le regole effettive che impartisco da ora:
#RULESET_1#
-se la casella su cui si trova la formica non è stata marcata ,allora la formica "salta" una casella a sinistra e marca la casella su cui è appena saltata.
-se la casella su cui si trova la formica è stata marcata, allora la formica "salta" una casella indietro e lascia invariata la casellla su cui è appena saltata.

Perfetto ormai ci troviamo nel giorno#2, non ho fatto molto, ho finito di implementare il ruleset 1 e devo dire che fa molto cagare, certo non mi potevo immaginare nulla di diverso da due regole stupide come quelle. Trovate l'immagine della simulazione sempre in questa cartella con il nome RULE_SET_1.png ; Per oggi ho fatto abbastanza, alla prossima.
PS: mi stavo dimenticando di lasciare il codice per le prime regole dato che quando implementerò le prossime queste verranno ' sfortunatamente :( ' perse.

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

Andate bei nerd, godetevi questo schifo di if e for ( assolutamente veloce e ottimizzato ), magari per le prossime ragiono un po di piu su come fare, va beh, vado a cenare.
