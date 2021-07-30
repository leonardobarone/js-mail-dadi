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
for (i = 0; i < vecchieEmail.length; i++) {
    if (vecchieEmail[i] == nuovaEmail) {
        document.getElementById('message').innerHTML = "L'email è già stata registrata in passato!";
    } else {
        document.getElementById('message').innerHTML = "L'email non è mai stata registrata! ISCRIVITI ADESSO!!!";
    }
}
// stampa un messaggio appropriato sull’esito del controllo.


