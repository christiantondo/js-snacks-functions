/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let namesNewArray = ""

// Dichiara la funzione qui.
function nameInitials(array) {
    const initialsArray = []
    for (let i = 0; i < array.length; i++) {
        const name = array[i];
        const initial = name[0];
        initialsArray.push(initial);
        }
        return initialsArray;
    }

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]