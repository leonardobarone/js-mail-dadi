// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var numeroComputer = parseInt(Math.random()*6)+1;
document.getElementById('numeroComputer');
var numeroGiocatore = parseInt(Math.random()*6)+1;
document.getElementById('numeroGiocatore').innerHTML;
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (numeroGiocatore > numeroComputer) {
    console.log('ha vinto il giocatore');
} else if (numeroGiocatore < numeroComputer) {
    console.log('ha vinto il computer')
} else {
    console.log('è patta!');
}
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?