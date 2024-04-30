'use strict';
const scoreOEl = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector(".dice")
//btn 
const btnHold = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')
const rollDice = document.querySelector('.btn--roll')

//me
var tour= false
let currentScore=0
let currentScore2=0
scoreOEl.textContent= 0
score1El.textContent= 0
diceEl.classList.add("hidden")
var rool=0
function clear(){
    rool=0
    currentScore=0
    currentScore2=0
    current0El.textContent=0
    current1El.textContent=0
    scoreOEl.textContent=0
    score1El.textContent=0
    tour=false
    diceEl.classList.add("hidden")
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')

}
rollDice.addEventListener('click',function(){
   
    if(!(tour)){
       
        const dice= Math.trunc(Math.random()*6+1)
        diceEl.classList.remove('hidden')
        diceEl.src= `dice-${dice}.png`
        current0El.textContent=dice
        currentScore +=dice
        scoreOEl.textContent=currentScore
     

       
       
        if(rool==2){
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
            tour=true
        }
        if(scoreOEl.textContent>=30){
            alert('player 1 winner')
            clear()
           
        }
        rool++
    }
    else{

        //player 2
        const dice= Math.trunc(Math.random()*6+1)
        diceEl.classList.remove('hidden')
        diceEl.src= `dice-${dice}.png`
        current1El.textContent=dice
        currentScore2 +=dice
        score1El.textContent=currentScore2
      
        rool--
        if(rool==0){
            player1.classList.toggle('player--active')
            player2.classList.toggle('player--active')
            tour=false
        }
        if(score1El.textContent>=30){
            alert('player 2 winner')
            clear()
           
        }
    }

 })

 newGame.addEventListener('click',clear)
 btnHold.addEventListener('click',clear)