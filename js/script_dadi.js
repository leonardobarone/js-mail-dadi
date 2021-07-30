// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var numeroComputer = parseInt(Math.random()*6)+1;
document.getElementById('numeroComputer').innerHTML += numeroComputer;
var numeroGiocatore = parseInt(Math.random()*6)+1;
document.getElementById('numeroGiocatore').innerHTML += numeroGiocatore;
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (numeroGiocatore > numeroComputer) {
    document.getElementById('Risultato').innerHTML += 'ha vinto il giocatore';  
} else if (numeroGiocatore < numeroComputer) {
    
    document.getElementById('Risultato').innerHTML += 'ha vinto il computer';
} else {
    document.getElementById('Risultato').innerHTML += 'è patta!';
}
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?