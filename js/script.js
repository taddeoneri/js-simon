/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


let numbers = [];
const memory = document.getElementById('memory');

while(numbers.length < 5){
    const number = getRandomInt(1, 100);
    if(!numbers.includes(number)){
        numbers.push(number);
        memory.innerHTML += 
        `
            <div class="number">${number}</div>
        `;
    }
}

const myTimeout = setTimeout(function(){
    const flashNumbers = document.getElementById('numbers');
    flashNumbers.classList.add('d-none');
}, 30000);


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}