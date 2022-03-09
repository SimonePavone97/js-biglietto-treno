/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/

let numeroKm = prompt( "Quanti km vuoi percorrere?" );
console.log( numeroKm);

const etaUtente = prompt( "Inserisci la tua età");
console.log( etaUtente);

let prezzoTicket = 0.21

let risultato = numeroKm * prezzoTicket;
console.log(risultato) 

let sconto = risultato * 0.2;
console.log(sconto)

let sconto2 = risultato * 0.65;
console.log(sconto2)

if ( etaUtente < 18 ) {
    
    //sconto20%
    console.log( "true" )
} else if ( etaUtente >= 65) {
    //sconto40%
    console.log ("false")
} else {

    console.log(risultato)
}