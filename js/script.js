/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


let numbers = [];
const flashNumbers = document.getElementById('numbers');
const memory = document.getElementById('memory');
const result = document.getElementById('result');
const button = document.querySelector('button');

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
    flashNumbers.classList.add('d-none');
    result.classList.remove('d-none')
}, 3000);

button.addEventListener('click', resultNumber);

function resultNumber(){
    const resultNumber1 = parseInt(document.getElementById('number1').value);
    const resultNumber2 = parseInt(document.getElementById('number2').value);
    const resultNumber3 = parseInt(document.getElementById('number3').value);
    const resultNumber4 = parseInt(document.getElementById('number4').value);
    const resultNumber5 = parseInt(document.getElementById('number5').value);
    let array = [];
    let score = 0;
    const par = document.querySelector('.score');
    array.push(resultNumber1);
    array.push(resultNumber2);
    array.push(resultNumber3);
    array.push(resultNumber4);
    array.push(resultNumber5);
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