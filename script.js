'use strict';

const btn = document.querySelector('.check'); 

const randomNumber = Math.floor(Math.random() * 20) + 1; //the + 1 makes it so its not 0.
let score = 20;
let winning = 0;

btn.addEventListener('click', function(){
  
const guess = document.querySelector('.guess').value;
const guessed = Number(guess); 
const randomNumber = Math.floor(Math.random() * 20) + 1; //the + 1 makes it so its not 0.

if(!guessed){
  document.querySelector('.message').textContent = 'No Number! 🙅‍♂️';
}else if(guessed === randomNumber){
  document.querySelector('.message').textContent = 'Hurray! You Won round 🏆';
  document.querySelector('.highscore').textContent = randomNumber;
  document.querySelector('.number').textContent = randomNumber;
  document.querySelector('body').style.background = 'dodgerblue';
  winning++;
  document.querySelector('.winning').textContent =winning ;
  
  
}else if(guessed > randomNumber){
  document.querySelector('.message').textContent = 'Number is High';
  score--; 
  document.querySelector('.number').textContent = 'Kashif';
  if(score === 0 ){
    if(winning >= 2){
      alert('Hurray Your Score is ' + winning + ' You won 🏆')
      window.location.reload();
    }
    else if(winning <= 1){
      alert('You lost badly') 
      window.location.reload();
    } 
  }
  else if(score >= 1){
  document.querySelector('.score').textContent = score;
  }
  
  document.querySelector('body').style.background = '#222';
    
}else if(guessed < randomNumber){
  document.querySelector('.message').textContent = 'Number is Low'; 
  document.querySelector('.number').textContent = 'Kashif';
  score--;
  if(score < 1){
    if(winning >1 && winning <3){
      alert('Hurray Your Score is ' + winning + ' You won 🏆')
      
    window.location.reload();
    }
    else if(winning < 2){
      alert('You lost badly')
      
    window.location.reload();
    }
  }
  else if(score > 0){
  document.querySelector('.score').textContent = score;
  }
  
  document.querySelector('body').style.background = '#222';
}
  
})




let again = document.querySelector('.again');


again.addEventListener('click', function(){
  
document.querySelector('.guess').value = '';
score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('body').style.background = '#222';
document.querySelector('.number').textContent = 'Kashif';
document.querySelector('.message').textContent = 'Start guessing...'; 
document.querySelector('.winning').textContent = 0;

})