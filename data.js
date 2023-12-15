
const score = JSON.parse(localStorage.getItem('score')) || {
    wines:0,
    losses:0,
    ties:0
  };
  
  let isAutoPlay = false;
  let IntervalId;
  function autoPlay(){
    const auto = document.querySelector('.auto');
    if(auto.innerHTML === 'Auto Play' && !isAutoPlay){
      IntervalId = setInterval(function(){
        const playerMove = function1();
        function2(playerMove); 
      },1000);
      isAutoPlay = true;
      auto.innerHTML = 'Stop Play';
    }else{
      clearInterval(IntervalId);
      auto.innerHTML = 'Auto Play';
      isAutoPlay = false;
    }
  }
  document.body.addEventListener('keydown',(event) => {
    if(event.key === 'a'){
      autoPlay();
    }
    if(event.key === 'Backspace'){
      show();
    }
  })
  function reset(){
    score.wines=0; 
    score.losses=0; 
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
  }
  document.querySelector('.reset').addEventListener('click', ()=> {
    show();
  });
  function show(){
    
    document.querySelector('.confirm').innerHTML = `Are you sure you want to reset the score ? 
    <button class="Yes">Yes</button> <button class="No">No</button>`;
  
  
  if(document.querySelector('.Yes').addEventListener('click', ()=>{
    reset();
    hideResetConfirmation();
  }));

  if(document.querySelector('.No').addEventListener('click', ()=>{
    hideResetConfirmation();
  }));
}
  function hideResetConfirmation() {
document.querySelector('.confirm')
  .innerHTML = '';
}


  updateScore();
  function updateScore(){
    document.querySelector('.score').innerHTML = `Wins: ${score.wines} ,Losses: ${score.losses} ,Ties: ${score.ties} `;
  }
  function choose(playerMove,computerMove){
    document.querySelector('.choose').innerHTML = `You <img src="images/${playerMove}-emoji.png">
                                                   <img src="images/${computerMove}-emoji.png"> Computer.`;
    
  }
  function results(result){
    document.querySelector('.result').innerHTML = ` ${result}.`;
    
  }
  

  function function2(playerMove){
    if(playerMove === 'scissors'){
        const computerMove = function1();
        let result = '';
        if(computerMove=='rock'){
          result = 'Tie';
        }else if (computerMove == 'paper'){
          result = 'You lose'
        }else {
        result = 'You win'
      }

      if(result === 'You win'){
        score.wines += 1;
      }else if(result === 'You lose'){
        score.losses += 1;
      }else if(result === 'Tie'){
        score.ties += 1;
      }
      updateScore();
      choose(playerMove,computerMove);
      results(result);
    }
    
    if(playerMove === 'paper'){
      const computerMove = function1();
      let result = '';
      if(computerMove=='rock'){
        result = 'Tie';
      }else if (computerMove == 'paper'){
        result = 'You lose'
      }else {
        result = 'You win'
      }

      if(result === 'You win'){
        score.wines += 1;
      }else if(result === 'You lose'){
        score.losses += 1;
      }else if(result === 'Tie'){
        score.ties += 1;
      }
      updateScore();
      choose(playerMove,computerMove);
      results(result);
    }

    if(playerMove === 'rock'){
      const computerMove = function1();

      let result = '';
      if(computerMove=='rock'){
        result = 'Tie';
      }else if (computerMove == 'paper'){
        result = 'You lose'
      }else {
        result = 'You win'
      }

      if(result === 'You win'){
        score.wines += 1;
      }else if(result === 'You lose'){
        score.losses += 1;
      }else if(result === 'Tie'){
        score.ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));
      updateScore();
      choose(playerMove,computerMove);
      results(result);
    }
  }

  function function1(){

    let computerMove = '';
    const number = Math.random();
    if(number >=0 && number < 1/3){computerMove = 'rock';}
    else if(number > 1/3 && number < 2/3){computerMove = 'paper';}
    else{computerMove = 'scissors';}
    return computerMove;
  }