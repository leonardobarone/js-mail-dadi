// MAIL

// lista di email accettate
var vecchieEmail = 
[
    "leonardo@gmail.com",
    "samuele@gmail.com",
    "manfredi@gmail.com",
    "federico@gmail.com",
    "gianluca@gmail.com",
];
// chiedi all'utente la sua email
var nuovaEmail = prompt('Qual è la tua email?');
// controlla che sia nella lista di chi può accedere 
var control = false;
for (i = 0; i < vecchieEmail.length-1; i++) {
    if (vecchieEmail[i] == nuovaEmail) {
        control = true;
    document.getElementById('message').innerHTML = "c'è";
    } else {
        control = false;
        document.getElementById('message').innerHTML = "non c'è";
    }
}
// stampa un messaggio appropriato sull’esito del controllo.


