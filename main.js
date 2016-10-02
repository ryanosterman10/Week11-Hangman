// running this in Terminal/Bash will start the game

var inquirer = require('inquirer');

var letter = require('./letter.js');
var word = require('./word.js');
var game = require('./game.js');

 var playerGuess = function(){
		inquirer.prompt([
			{
				type: 'input',
				message: 'Guess a letter!',
				name: 'letter'
			}
		]).then(function(player){
			this.playerInput = player.letter;
			console.log('\nLetter guessed: ' + this.playerInput + '\n');
		})
	}

console.log(game.game.instructions);

playerGuess();