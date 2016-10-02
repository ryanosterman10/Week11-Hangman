// running this in Terminal/Bash will start the game

var inquirer = require('inquirer');

var letter = require('./letter.js');
var word = require('./word.js');
var game = require('./game.js');

var nflAnswer = game.game.getRandomTeam().split('');
var numBlanks = nflAnswer.length;

var blanksAndSuccesses = [];
var numGuesses = 5;
var wrongGuesses = [];

for (var i=0; i < numBlanks; i++){
	blanksAndSuccesses.push("_");
}

function playerGuess(){
		inquirer.prompt([
			{
				type: 'input',
				message: 'Guess a letter!',
				name: 'letter'
			}
		]).then(function(player){
			if (numGuesses > 0){
				if(nflAnswer.indexOf(player.letter) !== -1){
					blanksAndSuccesses[nflAnswer.indexOf(player.letter)] = player.letter;
					console.log(blanksAndSuccesses.join(' '));
					playerGuess();
					if(blanksAndSuccesses.indexOf("_") == -1){
						console.log("WINNER!");
					}
				}
				else if(nflAnswer.indexOf(player.letter) == -1){
					console.log(blanksAndSuccesses.join(' '));
					numGuesses--;
					playerGuess();
				}	
			}
			else{
				console.log("LOSER!");
			}
			// this.playerInput = player.letter;
			// console.log('\nLetter guessed: ' + this.playerInput + '\n');
		});
	}

console.log(game.game.instructions);

console.log("You have: " + game.game.numGuesses + " guesses\n");

console.log(blanksAndSuccesses + "\n");

playerGuess();

// console.log(nflAnswer);
