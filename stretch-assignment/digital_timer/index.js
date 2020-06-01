const secondTensEl = document.querySelector('#secondTens');
const secondOnesEl = document.querySelector('#secondOnes');
const msHundredsEl = document.querySelector('#msHundreds');
const msTensEl = document.querySelector('#msTens');

let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;

function incrementTime(){
    secondTensEl.textContent = secondTens;
    secondOnesEl.textContent = secondOnes;
    msHundredsEl.textContent = msHundreds;
    msTensEl.textContent = msTens;

    msTens++;

    if (msTens > 9){
        msTens = 0;
        msHundreds++;
    }
    
    if (msHundreds > 9){
        msHundreds = 0;
        secondOnes++;
    }

    if (secondOnes > 9){
        secondOnes = 0;
        secondTens++;
    }
}

setInterval(incrementTime, 10);


