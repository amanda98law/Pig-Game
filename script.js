// JavaScript Document
const score0Obj = document.querySelector('#score--0');
const score1Obj = document.querySelector('#score--1');
const diceObj = document.querySelector('.dice');
const totalScore = [0,0];

let currentScore = 0;
let currentPlayer = 0;
score0Obj.textContent = 0;
score1Obj.textContent = 0;
diceObj.classList.add('hidden');
document.querySelector('.btn--roll').addEventListener('click', function(){
	const randomDice = Math.floor(Math.random()*6+1);
	diceObj.classList.remove('hidden');
	diceObj.src = "dice-"+randomDice+".png";

	if (randomDice !== 1){
		currentScore += randomDice;
		document.querySelector('#current--'+currentPlayer).textContent = currentScore;
	}else{
		currentScore = 0;
		document.querySelector('#current--'+currentPlayer).textContent = currentScore;
		currentPlayer = currentPlayer === 0 ? 1 : 0;
		document.querySelector('.player--0').classList.toggle('player--active');
		document.querySelector('.player--1').classList.toggle('player--active');
		}
	})

	document.querySelector('.btn--hold').addEventListener('click',function(){
		currentScore += totalScore[currentPlayer];
		totalScore[currentPlayer] = currentScore;
		document.querySelector('#score--'+currentPlayer).textContent = totalScore[currentPlayer];

		if (totalScore[currentPlayer] < 10){
			currentScore = 0;
			document.querySelector('#current--'+currentPlayer).textContent = currentScore;
			currentPlayer = currentPlayer === 0 ? 1 : 0;
			document.querySelector('.player--0').classList.toggle('player--active');
			document.querySelector('.player--1').classList.toggle('player--active');
		} else {
			currentScore = 0;
			document.querySelector('#current--'+currentPlayer).textContent = currentScore;
			document.querySelector('.player--'+currentPlayer).classList.add('player--winner');
			document.querySelector('.player--'+currentPlayer).classList.remove('player--active');
			document.querySelector('.btn--roll').classList.add('hidden');
			document.querySelector('.btn--hold').classList.add('hidden');
			document.querySelector('.dice').classList.toggle('hidden');
		}
	})

	document.querySelector('.btn--new').addEventListener('click',function(){
		totalScore[0] = 0;
		totalScore[1] = 0;
		document.querySelector('#score--0').textContent = 0;
		document.querySelector('#score--1').textContent = 0;
		document.querySelector('.player--'+currentPlayer).classList.remove('player--winner');
		document.querySelector('.player--0').classList.add('player--active');
		document.querySelector('.btn--roll').style.display = "block";
		document.querySelector('.btn--hold').style.display = "block";
		document.querySelector('.dice').classList.add('hidden');
		currentPlayer = 0;
	})
