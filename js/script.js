/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


let numbers = [];
const NUM = 5;
const flashNumbers = document.getElementById('numbers');
const memory = document.getElementById('memory');
const resultDiv = document.getElementById('result');
const button = document.querySelector('button');

while(numbers.length < NUM){
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
    flashNumbers.classList.add('d-none');
    resultDiv.classList.remove('d-none')
}, 3000);


button.addEventListener('click', resultNumber);


function resultNumber(){
    const result = document.querySelectorAll('input');
    let array = [];
    let score = 0;
    const par = document.querySelector('.score');
    for(let i = 0; i < result.length; i++){
        array.push(parseInt(result[i].value));
    }
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] === (numbers[i])){
                score++;
            }
        }
    }
    par.innerHTML += 
    `
        <h4>Il tuo risultato è: ${score}</h4>
    `;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}