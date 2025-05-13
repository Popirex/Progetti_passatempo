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
-se la casella su cui si trova la formica non è stata marcata ,allora la formica "salta" una casella a sinistra
-se la casella su cui si trova la formica è stata marcata, allora la formica "salta" una casella indietro
