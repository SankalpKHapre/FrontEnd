let comNum='';

let score = JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    loses:0,
    ties:0
  };


//updateScore();
/*if (score === null) {
  score = {
    wins:0,
    loses:0,
    ties:0
  }
}*/

function playMove(play) {
conNum = pickcom(); 
if (play==='Scissors'){
  if(comNum === 'Rock'){
  result = 'You Lose'
  }
  else if(comNum==='Paper'){
  result='You Win';
  }
  else if(comNum === 'Scissors'){
  result = 'Tie';
  }

}
else if (play==='Rock') {              
  conNum = pickcom();  
  if(comNum === 'Rock'){
  result = 'Tie'
  }
  else if(comNum==='Paper'){
  result='You Lose';
  }
  else if(comNum === 'Scissors'){
  result = 'You Win';
  }

}
else if (play==='Paper') {
  conNum = pickcom();
  if(comNum === 'Rock'){
  result = 'You Win'
  }
  else if(comNum==='Paper'){
  result='Tie';
  }
  else if(comNum === 'Scissors'){
  result = 'You Lose';
  }
}

if (result ===  'You Win') {
  score.wins = score.wins+1;
}
else if(result ===  'You Lose'){
  score.loses= score.loses+1;
}
else if(result ===  'Tie'){
  score.ties=score.ties+1;
}

localStorage.setItem('score',JSON.stringify(score));


updateScore();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You
<img class="move-icon" src="images/${play}-emoji.png">
<img class="move-icon" src="images/${comNum}-emoji.png">
Computer  `;
document.querySelector('.js-result').innerHTML = result;


} 

function pickcom() {
const randomNum = Math.random();

let result='';

if(randomNum>= 0 && randomNum<=1/3){
comNum='Rock';

}
else if(randomNum>1/3 && randomNum<=2/3){
comNum='Paper';
//console.log('You Lose Bitch! Haha!!')

}
else if(randomNum>2/3 && randomNum<=3/3){
comNum='Scissors';
//console.log('DamnIT The Human WON! ????');

}
return comNum;
}

function updateScore(){
document.querySelector('.js-score').innerHTML = `Wins:${score.wins},Loses:${score.loses},Ties:${score.ties}`;
}  