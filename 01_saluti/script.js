/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';




// Dichiara la funzione qui.
function printName(string) {
    alert(`Ciao ${string} benvenuto su questo sito web`)
    console.log(`L'utente ${string} ha effettuato l'accesso al sito` )
}

// Invoca la funzione qui e stampa il risultato in console
printName("Mario")

//Risultato atteso se si passa 'Mario': // ciao Mario
