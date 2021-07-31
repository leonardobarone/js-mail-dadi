// MAIL

// lista di email accettate
var mails = 
[
    "leonardo@gmail.com",
    "samuele@gmail.com",
    "manfredi@gmail.com",
    "federico@gmail.com",
    "gianluca@gmail.com",
];
// chiedi all'utente la sua email
var mail = prompt('Qual è la tua email?');
control = false;
// controlla che sia nella lista di chi può accedere
for (i = 0; i < mails.length; i++) {
    if (mail == mails[i]) {
        control = true;
        document.getElementById('message').innerHTML = "SIIIIIII";
    } 
}
if ( control == false) {
    document.getElementById('message').innerHTML = "NOOOOOOOOOOOOOO";
} 
// stampa un messaggio appropriato sull’esito del controllo.


