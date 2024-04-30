
var  score1 = document.getElementById('score--0')
var score2 = document.getElementById('score--1')
var current0= document.getElementById('current--0')
var current1= document.getElementById('current--1')
var btnHold = document.querySelector('.btn--hold')
var dice = document.querySelector(".dice")
var newGame = document.querySelector('.btn--new')
var rollDice = document.querySelector('.btn--roll')
var rool = 0;
var tour =false;
function holdGame(){
    score1.textContent=0
    score2.textContent=0
    current0.textContent=0
    current1.textContent=0
}
//hold button
btnHold.addEventListener('click', holdGame);
//new Game 
newGame.addEventListener('click', holdGame) ;

 rollDice.addEventListener('click',function(){
    if(!(tour)){
        let somme=0
        let numberDice= Math.trunc(Math.random()*6+1)
         somme=somme+numberDice
        current0.textContent=somme
    if(current0 == 30){
        alert('player1 winner')
    }
    rool++
    if(rool==2){
        score1.textContent +=current0.textContent
        current0=0
        tour=true
        
    }

    }
    else{
        let numberDice= Math.trunc(Math.random()*6+1)
        current1+=numberDice
        if(current1 == 30){
            alert('player2 winner')
        }
        rool--
        if(rool==0){
            scoor1+=current1
            console.log(scoor1)
            current1=0
            tour=false
        }
    }













 })



