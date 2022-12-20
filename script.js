'use strict';

const player0El = document.querySelector('#score--0');
const player1El = document.querySelector('#score--1');
const score0El = document.getElementById('current--0');
const score1El = document.getElementById('current--1');

player0El.textContent = 0;
player1El.textContent = 0;

const dice = document.querySelector('.dice');

dice.classList.add('hidden');

const diceNew = document.querySelector('.btn--new');
const diceHold = document.querySelector('.btn--hold');
const diceRoll = document.querySelector('.btn--roll');
let currScore = 0;

let scores = [0,0];

let activePlayer = 0;

diceRoll.addEventListener('click', function(){
    dice.classList.remove('hidden');

    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    dice.src = `dice-${diceNumber}.png`;

    if(diceNumber !== 1)
    {   
        currScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currScore;
    }

    else
    {
        currScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        activePlayer = activePlayer === 0 ? 1:0;

        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

     }
})

diceHold.addEventListener('click', function(){

        scores[activePlayer] += currScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        currScore = 0;

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        if(scores[activePlayer] >= 20)
        {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            dice.classList.add('hidden');
            diceHold.classList.add('hidden');
            diceRoll.classList.add('hidden');
        }

        else
        {
            activePlayer = activePlayer === 0 ? 1:0;

            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        }      
});

diceNew.addEventListener('click', function(){

    currScore = 0;
    scores = [0,0];

    for(let i = 0 ; i <= 1 ; i++)
    {
        document.getElementById(`current--${i}`).textContent = 0;
        document.getElementById(`score--${i}`).textContent = 0;
    }

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    dice.classList.remove('hidden');
    diceHold.classList.remove('hidden');
    diceRoll.classList.remove('hidden');
    dice.classList.add('hidden');

    activePlayer = 0;

    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
});