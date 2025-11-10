/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
const countVowels = (string) => {

    let result = 0;

    for (let i = 0; i < string.length; i++) {
        const thisChar = string.charAt(i).toLowerCase();

        if (thisChar == "a" || thisChar == "e" || thisChar == "i" || thisChar == "o" || thisChar == "u") {
            result++;
        }
    }
    return result;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)