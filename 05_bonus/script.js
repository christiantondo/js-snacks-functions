/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function currentDateGreetings(string) {
    const currentDate = new Date().getHours()
    if (currentDate < 13) {
        alert(`Buongiorno ${string}`);
    } else if (currentDate < 17) {
        alert(`Buon pomeriggio ${string}`);
    } if (currentDate > 17) {
        alert(`Buonasera ${string}`);
    }
}
// Invoca la funzione qui e stampa il risultato in console
currentDateGreetings("Mario")


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.