var inquirer = require('inquirer');

var Game = {

	nflTeams: [
		'bears',
		'bengals',
		'bills',
		'broncos',
		'browns',
		'bucaneers',
		'cardinals',
		'chargers',
		'cheifs',
		'colts',
		'cowboys',
		'dolphins',
		'eagles',
		'falcons',
		'giants',
		'jaguars',
		'jets',
		'lions',
		'niners',
		'packers',
		'panthers',
		'patriots',
		'raiders',
		'rams',
		'ravens',
		'redskins',
		'saints',
		'seahawks',
		'steelers',
		'texans',
		'titans',
		'vikings'
	],

	instructions: '\n---------- NFL HANGMAN ---------- \n\nType a letter and see if you can guess the NFL team name!(not the city)\n',
	wordInPlay: null,
	lettersOfTheWord : [],
	matchedLetters: [],
	guessedLetters: [],
	guessesLeft: 0,
	totalGuesses: 0,
	letterGuessed: null,
	wins: 0,

	displayInstructions: function(){
		console.log(this.instructions);
	},

	setupGame: function(){
		var choice = (Math.floor(Math.random()*32) + 1);
		this.wordInPlay = this.nflTeams[choice];
		console.log(this.wordInPlay + '\n');
		this.lettersOfTheWord = this.wordInPlay.split('');
		// this.rebuildWordView();
		// this.processUpdateTotalGuesses();
	},

	playerGuess: function(){
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


}; //end of Game object


Game.displayInstructions();

Game.setupGame();

Game.playerGuess();