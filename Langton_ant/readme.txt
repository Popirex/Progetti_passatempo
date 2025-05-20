Ciao a tutti, sono passati un po di giorni dall'ultimo commit che ho eseguito su questa repository; Volevo pensare bene a fondo a questo progettino per cercare di farlo il meglio possibile. Ci sono state alcune modifiche, innanzitutto non ho piu usato p5.js ma mi sono scaricato processing per imparare ad usarlo, dato che un giorno mi piacerebbe creare interfacce grafiche e simulazioni basate su dati reali presi da un arduino e questo ambiente di sviluppo mi permette proprio di fare tutto cio.

Mi sono anche informato un po di piu sulla storia di questo algoritmo, per questo motivo ho deciso di chiamare questa seconda versione con il nome appropriato.

#ESECUZIONE#
In pratica non è troppo diverso dalla prima versione, ma ha l'algoritmo della formica uguale a quello immaginato da Langton, e inoltre non vado a disegnare delle celle quadrate ma bensi immagino che ogni pixel della finestra sia una cella.

L'esecuzione è molto semplice:
-SETUP:  assegno al primo punto casuale della formica il valore 1, e le definisco un punto iniziale x e y randomici.

-DRAW: è subito presente un for loop che mi permette di decidere quanti 'passi' voglio che faccia la formica ogni volta che viene aggiornato un frame, come se potessi decidere a priori la velocita della formica, dopodiche vado a caricare tutti i pixel della finestra con il rispettivo colore in base allo stato assegnato e poi carico i valori dei pixel aggiornando di fatto il frame della finestra per poi iniziare da capo.

#VIDEO E GIF#
Trovate nella cartella due video disponibili nei formati .webm e .gif, uno ha la velocita pari a 1, ovvero che in ogni frame che vedete è stata eseguita una sola istruzione, mentre l'altro ha velocita pari a 15000, ovvero vengono eseguite 15000 istruzioni ad ogni frame che si vede.

Giocando con i colori che possono essere assegnati ai pixel si possono creare degli scenari piuttosto interessanti, infatti se li differenziamo in verde e azzurro andiamo come a creare la mappa dall'alto di un territorio molto frastagliato e pieno di laghetti e canali interconnessi, ovviamente la quantita di 'rumore' che vogliamo si puo scegliere da quanto tempo si fa andare la simulazione.

Bene per questo progettino direi che è tutto mi sono divertito abbastanza; alla prossima!!







 ______  ______   ______  __   ______   ______  __  __    
/\  == \/\  __ \ /\  == \/\ \ /\  == \ /\  ___\/\_\_\_\   
\ \  _-/\ \ \/\ \\ \  _-/\ \ \\ \  __< \ \  __\\/_/\_\/_  
 \ \_\   \ \_____\\ \_\   \ \_\\ \_\ \_\\ \_____\/\_\/\_\ 
  \/_/    \/_____/ \/_/    \/_/ \/_/ /_/ \/_____/\/_/\/_/ 
                                                          

