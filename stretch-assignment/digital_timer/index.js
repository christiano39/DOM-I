// Digit Selectors
const secondTensEl = document.querySelector('#secondTens');
const secondOnesEl = document.querySelector('#secondOnes');
const msHundredsEl = document.querySelector('#msHundreds');
const msTensEl = document.querySelector('#msTens');

// Button Selectors
const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener("click", start);
const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener("click", reset);

// timer for interval
let timer;

// Digit Values
let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;

function incrementTime(){
    secondTensEl.textContent = secondTens;
    secondOnesEl.textContent = secondOnes;
    msHundredsEl.textContent = msHundreds;
    msTensEl.textContent = msTens;
    startBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');

    if (secondTens === 1 ){
        clearInterval(timer);
        secondTensEl.classList.add('redDigit');
        secondOnesEl.classList.add('redDigit');
        msHundredsEl.classList.add('redDigit');
        msTensEl.classList.add('redDigit');
    }

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

function start(){
    timer = setInterval(incrementTime, 10);
}

function reset(){
    secondTens = 0;
    secondOnes = 0;
    msHundreds = 0;
    msTens = 0;

    secondTensEl.textContent = secondTens;
    secondOnesEl.textContent = secondOnes;
    msHundredsEl.textContent = msHundreds;
    msTensEl.textContent = msTens;

    secondTensEl.classList.remove('redDigit');
    secondOnesEl.classList.remove('redDigit');
    msHundredsEl.classList.remove('redDigit');
    msTensEl.classList.remove('redDigit');

    clearInterval(timer);

    startBtn.classList.remove('hidden');
    resetBtn.classList.add('hidden');
}