// Ciao ragazzi!
// Come annunciato oggi ci sarà un recap nel pomeriggio, i dettagli saranno meglio specificati dagli insegnanti del pomeriggio più tardi, perciò l'esercizio sarà piccino.
// Esercizio di oggi: Lista della spesa con ciclo while
// nome repo: js-lista-spesa
// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
// Buon lavoro a tutte e a tutti!!

const shopList = [
    "mela",
    "pera",
    "banana",
    "arancia" ]

const domUl = document.querySelector("ul");
console.log(domUl);

let i = 0;
result = "";

while (i<shopList.length) 
{

    result += `<li>${shopList[i]}</li>`;
    i++;

}

console.log(result);
domUl.innerHTML = result;

